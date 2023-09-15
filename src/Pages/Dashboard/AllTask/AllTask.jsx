import { useEffect, useState } from "react";
import { getAllTasks } from "../../../api/task";
import AllTaskTable from "./AllTaskTable";

const AllTask = () => {
  const [tasks, setTasks] = useState("");
  const [filter, setFilter] = useState(false);
  console.log(tasks);

  const filterItem = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    getAllTasks()
      .then((data) => {
        if (filter) {
          const filteredTask = data.filter((task) => task?.status === true);
          setTasks(filteredTask);
        } else {
          setTasks(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);
  return (
    <div className="w-full px-[5%]">
      <div className="text-right mb-8">
        <select value={filter} onChange={filterItem}>
          <option value={false}>All Task</option>
          <option value={true}>Completed</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          {tasks &&
            tasks.map((task, index) => (
              <AllTaskTable
                key={task._id}
                task={task}
                index={index}
                setFilter={setFilter}
              />
            ))}
        </table>
      </div>
    </div>
  );
};

export default AllTask;
