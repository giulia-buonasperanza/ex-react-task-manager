import { useContext} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

function TaskDetail() {
    const { id } = useParams();
    const { tasks, removeTask } = useContext(GlobalContext);
    const navigate = useNavigate();

    const task = tasks.find((task) => (task.id) === Number(id));
  
  
    if (!task) {
        return <div>Task non trovato</div>;
    }
    
    async function handleDelete() {

        try{
            await removeTask(Number(id));

            alert("Task eliminato con successo");

            navigate("/tasks");
        
        }catch(error){
            alert(error.message);
        }
    }

  

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Creato il : {task.createdAt}</p>

            <button onClick={handleDelete}> Elimina Task</button>
        </div>
    );
}

export default TaskDetail;