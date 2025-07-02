import React from "react";


function TaskItem({ task, index, onEdit, onDelete, onStatusChange }) {
    const { title, description, status } = task;

    const getStatusBtn = () => {
        if (status === "todo") {
            return (
                <button className="to-do-btn" onClick={() => onStatusChange(index, "in-progress")}>
                <i className="bi bi-fast-forward-circle-fill"></i>
                </button>
            );
        } else if (status === "in-progress") {
            return (
                <button className="in-progresh-btn" onClick={() => onStatusChange(index, "completed")}>
                 <i className="bi bi-check2-circle"></i>
                </button>
            );
        } else {
            return (
                <button className="completed-btn" onClick={() => onStatusChange(index, "todo")}>
                    <i className="bi bi-arrow-repeat"></i>
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
                <button className="delete-btn" onClick={() => onDelete(index)}><i className="bi bi-trash-fill"></i></button>
            </div>
        </li>
    );
}

export default TaskItem;
