import { useContext , useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import Modal from "../components/Modal";

function TaskDetail() {
    const { id } = useParams();
    const { tasks, removeTask } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

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

            <button onClick={() => setShowModal(true)}> Elimina Task</button>

            <Modal
                title="Conferma eliminazione"
                content="Sei sicuro di voler eliminare questo task?"
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
                confirmText="Elimina"
            />
        </div>
    );
}

export default TaskDetail;