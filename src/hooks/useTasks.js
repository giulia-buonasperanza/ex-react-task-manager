import { useEffect, useState } from "react";

function useTasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/tasks`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTasks(data);
            });
    }, []);

    async function addTask(task) {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        const data = await response.json();

        if (data.success) {
            setTasks((currentTasks) => [...currentTasks, data.task]);
        } else {
            throw new Error(data.message);
        }
    }

    async function removeTask(taskId) {

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
            method: "DELETE"
        }
        );

        const data = await response.json();

        if (data.success) {
            setTasks((currentTasks) =>
                currentTasks.filter((task) => task.id !== (taskId)));
        } else {
            throw new Error(data.message);
        }
    }

    async function updateTask(updatedTask) {

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/tasks/${updatedTask.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedTask)
            }

        );

        const data = await response.json();

        if (data.success) {
            setTasks((currestTasks) =>
                currestTasks.map((task) =>
                    task.id === data.task.id ? data.task :task
            )
        );

        } else {
            throw new Error(data.messaage);
        }
    }


    return {
        tasks,
        addTask,
        removeTask,
        updateTask
    };
}

export default useTasks;