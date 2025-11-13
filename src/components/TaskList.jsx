// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

/**
 * Lista de tareas. Recibe tareas y funciones como props.
 */
const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No hay tareas pendientes. ¡Buen trabajo!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;