import React from 'react'

const AddTask = () => {

    const [task, setTask] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() === '') {
            alert('Task cannot be empty');
            return;
        }

        setTasks([...tasks, task]);
        setTask('');
    }

    return (
        <div className="m-14">
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={task}
                    onChange={handleInputChange}
                    className="rounded-md flex-grow border focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white rounded-full hover:bg-blue-900"
                >
                    Add Task
                </button>
            </div>
            <ul className="space-y-4 mt-4">
                {tasks.map((task, index) => (
                    <li
                     key={index}
                      className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-md shadow-md"
                      >
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-5 h-5" />
                            <p>{task}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="text-blue-500 hover:text-blue-600">Edit</button>
                            <button className="text-red-500 hover:text-red-600">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AddTask;