import { useContext } from "react";
import { GlobalContext } from "../contexts/Globalcontext.jsx";

function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log(tasks);

    return (

        <div>
            <h1>Lista dei Task</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Stato</th>
                        <th>Data di Creazione</th>
                    </tr>
                </thead>

                <tbody>
                    {/*  task */}
                </tbody>
            </table>
        </div>
    );

}

export default TaskList;