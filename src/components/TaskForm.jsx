// src/components/TaskForm.jsx
import React, { useState } from 'react';

/**
 * Formulario para agregar nuevas tareas.
 */
const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-button">
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;