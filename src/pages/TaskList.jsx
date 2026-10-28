import { useContext, useMemo, useState, useCallback } from "react";
import { GlobalContext } from "../contexts/GlobalContext.jsx";
import TaskRow from "../components/TaskRow.jsx";


function debounce(callback, delay) {
    let timeout;

    return (value) => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

function TaskList() {
    const [sortBy, setSortBy] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const { tasks } = useContext(GlobalContext);

    const debounceSearch = useCallback(
        debounce((value) => {
            setSearchQuery(value);
        }, 300),
        []
    );

    const sortedTasks = useMemo(() => {

        const filteredTasks = tasks.filter((task) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return filteredTasks.sort((a, b) => {
            let result = 0;

            if (sortBy === "title") {
                result = a.title.localeCompare(b.title);
            }

            if (sortBy === "status") {
                const statusOrder = {
                    "To do": 0,
                    "Doing": 1,
                    "Done": 2
                };

                result = statusOrder[a.status] - statusOrder[b.status];

            }

            if (sortBy === "createdAt") {
                result = new Date(a.createdAt).getTime()
                    - new Date(b.createdAt).getTime();
            }

            return result * sortOrder;
        });
    }, [tasks, sortBy, sortOrder, searchQuery]);


    function handleSort(column) {
        if (sortBy === column) {
            setSortOrder((currentOrder) => currentOrder * -1);
        } else {
            setSortBy(column);
            setSortOrder(1);
        }
    }



    return (

        <div>
            <h1>Lista dei Task</h1>

            <input
                type="text"
                placeholder="Cerca un task..."
                onChange={(e) => debounceSearch(e.target.value)}
            />


            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort("title")}>
                            Nome {sortBy === "title" && (sortOrder === 1 ? "↑" : "↓")}
                        </th>

                        <th onClick={() => handleSort("status")}>
                            Stato {sortBy === "status" && (sortOrder === 1 ? "↑" : "↓")}
                        </th>

                        <th onClick={() => handleSort("createdAt")}>
                            Data di Creazione {sortBy === "createdAt" && (sortOrder === 1 ? "↑" : "↓")}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {sortedTasks.map((task) => (
                        <TaskRow
                            key={task.id}
                            task={task}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default TaskList;