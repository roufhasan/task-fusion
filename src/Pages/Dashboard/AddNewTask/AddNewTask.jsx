import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { PulseLoader } from "react-spinners";
import { addTask } from "../../../api/task";
import toast from "react-hot-toast";

const AddNewTask = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [addButtonText, setAddButtonText] = useState("Add Task");
  const [myTask, setMyTask] = useState([]);

  const handleAddTask = () => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const date = form.date.value;

    const taskData = {
      title,
      description,
      date,
      email: user?.email,
      status: false,
    };

    addTask(taskData)
      .then((data) => {
        setAddButtonText("Task Added");
        setLoading(false);
        toast.success("Task Added Succesfully");
        form.reset();
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/tasks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTask(data);
      });
  }, [user?.email]);

  console.log(myTask);
  return (
    <div className="w-full px-[10%]">
      <h1 className="text-center text-3xl font-semibold">Create new task</h1>
      <form onSubmit={handleAddTask}>
        <label htmlFor="title" className="mb-3 inline-block">
          Title *
        </label>
        <br />
        <input
          className="py-5 pl-6 w-full rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4] mb-8"
          type="text"
          name="title"
          id="title"
          required
        />
        <br />
        <label htmlFor="description" className="mb-3 inline-block">
          Description *
        </label>
        <br />
        <textarea
          name="description"
          id="description"
          required
          className="py-10 pl-6 w-full rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4] mb-8"
        ></textarea>
        <label htmlFor="description" className="mb-3 inline-block">
          Due Date *
        </label>
        <br />
        <input
          type="date"
          name="date"
          id="date"
          required
          className="py-5 pl-6 w-2/4 rounded-lg text-[#808080] text-sm font-light focus:font-normal border border-[#ADADAD] outline-none focus:border-[#4285F4] mb-8"
        />
        <div>
          <button
            type="submit"
            className="font-medium bg-black text-white w-full py-4 rounded-[10px] shadow-4xl cursor-pointer"
            disabled={loading}
          >
            {loading ? <PulseLoader color="#FFF" size={10} /> : addButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
