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

    function addTask() {

    }

    function removeTask() {

    }

    function updateTask() {

    }

    return {
        tasks
    };
}

export default useTasks;