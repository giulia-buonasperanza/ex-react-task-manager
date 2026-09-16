import { useRef, useState } from "react";

function AddTask() {

    const [title, setTitle] = useState("");

    const descriptionRef = useRef();
    const statusRef = useRef();

    return (
        <div>
            <h1>Aggiungi Task</h1>

            <form>

                <div>
                    <label htmlFor="title">
                        Nome del task
                    </label>

                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="description">
                        Descrizione
                    </label>

                    <textarea
                        id="description"
                        ref={descriptionRef}
                    />
                </div>

                <div>
                    <label htmlFor="status">
                        Stato
                    </label>

                    <select
                        id="status"
                        ref={statusRef}
                        defaultValue="To do"
                    >
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

                <button type="submit">
                    Aggiungi Task
                </button>

            </form>
        </div>
    );
}

export default AddTask;
