import { memo } from "react";
import styles from "./TaskRow.module.css";
import { Link } from "react-router-dom";

function TaskRow({ task }) {

    return (
        <tr>
            <td><Link to={`/tasks/${task.id}`}>{task.title}</Link></td>
            <td className={`${styles[task.status.toLowerCase().replace(" ", "-")]}`} >
                {task.status}
            </td>
            <td>{task.createdAt}</td>
        </tr>
    );
}

export default memo(TaskRow);