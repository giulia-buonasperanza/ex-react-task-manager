import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

function Modal({
    title,
    content,
    show,
    onClose,
    onConfirm,
    confirmText = "Conferma"
}) {

    if (!show) {
        return null;
    }

    const modal = (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>{title}</h2>

                <div>{content}</div>

                <div className={styles.actions}>
                    <button onClick={onClose}>
                        Annulla
                    </button>

                    <button onClick={onConfirm}>
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(modal, document.body);
}

export default Modal;
