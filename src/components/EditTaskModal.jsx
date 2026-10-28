import { useRef, useState } from "react";
import Modal from "./Modal"

function EditTaskModal({ show, onClose, task, onSave }) {

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);

    const editFormRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const updatedTask = {
            ...task,
            title,
            description,
            status
        };

        onSave(updatedTask);
    }


    const form = (
        <form ref={editFormRef} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="edit-title">Nome</label>
                <input
                    id="edit-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="edit-description">Descrizione</label>
                <textarea
                    id="edit-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="edit-status">Stato</label>
                <select
                    id="edit-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </form>
    );

    return (
        <Modal
            title="Modifica Task"
            content={form}
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}
            confirmText="Salva"
        />
    );

}

export default EditTaskModal