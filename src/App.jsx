import React, { useState, useEffect } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskBoard from "./TaskBoard";

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (title, description) => {
    if (!title.trim()) return alert("Please enter a task.");

    const updatedTasks = [...tasks];
    if (editIndex !== null) {
      updatedTasks[editIndex] = { ...updatedTasks[editIndex], title, description };
      setEditIndex(null);
    } else {
      updatedTasks.push({ title, description, status: "todo" });
    }
    setTasks(updatedTasks);
  };

  const updateStatus = (index, newStatus) => {
    const updated = [...tasks];
    updated[index].status = newStatus;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const editTask = (index) => setEditIndex(index);

  return (
    <div className="page-back-ground min-h-screen flex justify-center items-center p-6">
      <div className="main-container">
        <Header />
        <TaskInput
          onAdd={addOrUpdateTask}
          editTask={tasks[editIndex]}
          isEditing={editIndex !== null}
        />
        <TaskBoard tasks={tasks} onEdit={editTask} onDelete={deleteTask} onStatusChange={updateStatus} />
      </div>
    </div>
  );
}

export default App;
