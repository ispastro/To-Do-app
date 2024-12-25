import React, { useState } from "react";

const TaskList = () => {
  const [task, setTask] = useState(""); // State for the current task input
  const [tasksList, setTasksList] = useState([]); // State for the list of tasks
  const [editIndex, setEditIndex] = useState(null); // Index of the task being edited
  const [editText, setEditText] = useState(""); // Text of the task being edited

  // Handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    const newTask = { text: task, isCompleted: false };
    setTasksList([...tasksList, newTask]);
    setTask("");
  };

  // Toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasksList.map((item, idx) =>
      idx === index ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTasksList(updatedTasks);
  };

  // Start editing a task
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(tasksList[index].text);
  };

  // Handle change for editing
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  // Save edited task
  const saveEdit = () => {
    const updatedTasks = tasksList.map((item, idx) =>
      idx === editIndex ? { ...item, text: editText } : item
    );
    setTasksList(updatedTasks);
    setEditIndex(null);
    setEditText("");
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditIndex(null);
    setEditText("");
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasksList.filter((_, idx) => idx !== index);
    setTasksList(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">My Task List</h1>

      {/* Input and Add Task Button */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter Task"
          className="bg-gray-800 text-white p-3 rounded-lg w-72 focus:outline-none"
        />
        <button
          onClick={addTask}
          className="bg-teal-500 p-3 rounded-lg hover:bg-teal-600"
        >
          +
        </button>
      </div>

      {/* Task List */}
      <div className="w-full max-w-md space-y-4">
        {tasksList.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
          >
            {editIndex === index ? (
              // Edit Mode
              <div className="flex items-center space-x-3 flex-grow">
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  className="bg-gray-700 text-white p-2 rounded-lg flex-grow focus:outline-none"
                />
                <button
                  onClick={saveEdit}
                  className="bg-teal-500 p-2 rounded-lg hover:bg-teal-600"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-red-500 p-2 rounded-lg hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              // Display Mode
              <>
                <div className="flex items-center space-x-3 flex-grow">
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => toggleComplete(index)}
                    className="h-5 w-5 accent-teal-500"
                  />
                  <span
                    className={`text-lg ${
                      task.isCompleted ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => startEdit(index)}
                    className="bg-teal-500 p-2 rounded-lg hover:bg-teal-600"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-500 p-2 rounded-lg hover:bg-red-600"
                  >
                    🗑️
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
