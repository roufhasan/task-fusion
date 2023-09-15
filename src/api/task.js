// *** ==> API URL <== ***
const apiUrl = import.meta.env.VITE_API_URL;

// Add a task
export const addTask = async (taskData) => {
  const response = await fetch(`${apiUrl}/tasks`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  const data = await response.json();
  return data;
};

// Get all tasks
export const getAllTasks = async () => {
  const response = await fetch(`${apiUrl}/tasks`);
  const data = await response.json();
  return data;
};

// Get tasks by user's email
export const getTasks = async (email) => {
  const response = await fetch(`${apiUrl}/tasks/${email}`);
  const data = await response.json();
  return data;
};
