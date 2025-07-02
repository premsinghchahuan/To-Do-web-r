import React, { useState, useEffect } from "react";

const TaskInput = ({ onAdd, editTask, isEditing }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editTask]);

  const handleSubmit = () => {
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        id="taskInput"
        placeholder="Add a new task..."
        className="task-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        id="descriptionInput"
        placeholder="Description..."
        className="description-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-task-btn" onClick={handleSubmit}>
        {isEditing ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
};

export default TaskInput;
