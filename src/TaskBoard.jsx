import React from "react";
import TaskColumn from "./TaskColumn";

const TaskBoard = ({ tasks, onEdit, onDelete, onStatusChange }) => {
  const groupedTasks = {
    todo: [],
    "in-progress": [],
    completed: [],
  };

  tasks.forEach((task, index) => {
    groupedTasks[task.status].push({ ...task, originalIndex: index });
  });

  return (
    <div className="task-board">
      <TaskColumn
        title="To Do"
        tasks={groupedTasks["todo"]}
        onEdit={onEdit}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
      />
      <TaskColumn
        title="In Progress"
        tasks={groupedTasks["in-progress"]}
        onEdit={onEdit}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
      />
      <TaskColumn
        title="Completed"
        tasks={groupedTasks["completed"]}
        onEdit={onEdit}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
      />
    </div>
  );
};

export default TaskBoard;
