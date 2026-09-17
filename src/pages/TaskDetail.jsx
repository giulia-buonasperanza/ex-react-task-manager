import { useContext} from "react";
import { useParams} from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);

    const task = tasks.find((task) => Number(task.id) === Number(id));

    if (!task) {
        return <div>Task non trovato</div>;
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Creato il : {task.createdAt}</p>

            <button onClick={() => console.log("Elimina Task")}> Elimina Task</button>
        </div>
    );
}

export default TaskDetail;