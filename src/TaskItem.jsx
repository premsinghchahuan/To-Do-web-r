import React from "react";


function TaskItem({ task, index, onEdit, onDelete, onStatusChange }) {
    const { title, description, status } = task;

    const getStatusBtn = () => {
        if (status === "todo") {
            return (
                <button className="to-do-btn" onClick={() => onStatusChange(index, "in-progress")}>
                <i class="bi bi-fast-forward-circle-fill"></i>
                </button>
            );
        } else if (status === "in-progress") {
            return (
                <button className="in-progresh-btn" onClick={() => onStatusChange(index, "completed")}>
                 <i class="bi bi-check2-circle"></i>
                </button>
            );
        } else {
            return (
                <button className="completed-btn" onClick={() => onStatusChange(index, "todo")}>
                    <i class="bi bi-arrow-repeat"></i>
                </button>
            );
        }
    };

    return (
        <li className="task-item">
            <div className="task-content">
                <strong className="task-title">{title}</strong>
                <p className="task-desc">{description}</p>
            </div>
            <div className="button-column">
                {getStatusBtn()}
                {status !== "completed" && (
                    <button className="edit-btn" onClick={() => onEdit(index)}> <i className="bi bi-pencil-fill" /></button>
                )}
                <button className="delete-btn" onClick={() => onDelete(index)}><i class="bi bi-trash-fill"></i></button>
            </div>
        </li>
    );
}

export default TaskItem;
