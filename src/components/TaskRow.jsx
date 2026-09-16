import styles from "./TaskRow.module.css";

function TaskRow({ task }) {

    return (
        <tr>
            <td>{task.title}</td>
            <td className={`${styles.status} ${styles[task.status.toLowerCase().replace(" ", "-")]}`} >
                {task.status}
            </td>
            <td>{task.createdAt}</td>
        </tr>
    );
}

export default TaskRow;