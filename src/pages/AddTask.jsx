import { useRef, useState } from "react";

function AddTask() {

    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    const descriptionRef = useRef();
    const statusRef = useRef();

    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";


    function validateTitle(title) {

        if (title.trim() === "") {
            return "Il nome del task è obbligatorio";
        }

        for (const symbol of symbols) {
            if (title.includes(symbol)) {
                return "Il nome del task non può contenere simboli speciali";
            }
        }

        return "";
    }

    function handleSubmit(e) {
        e.preventDefault();

        const errorMessage = validateTitle(title);

        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        setError("");

        const task = {
            title: title,
            description: descriptionRef.current.value,
            status: statusRef.current.value
        };

        console.log(task);
    }


    return (
        <div>
            <h1>Aggiungi Task</h1>

            <form  onSubmit={handleSubmit}>

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

                    {error && <p>{error}</p>}
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
