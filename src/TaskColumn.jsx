import React from "react";
import TaskItem from "./TaskItem";

const TaskColumn = ({ title, tasks, onEdit, onDelete, onStatusChange }) => (
  <div className="ind-task-board">
    <h2 className="heading">{title}</h2>
    <ul className="li-container">
      {tasks.map((task) => (
        <TaskItem
          key={task.originalIndex}
          task={task}
          index={task.originalIndex}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  </div>
);

export default TaskColumn;
