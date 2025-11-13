const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span className="task-title">{task.title}</span>
      <button
        onClick={() => deleteTask(task.id)}
        className="delete-button"
        aria-label="Eliminar tarea"
      >
        ❌
      </button>
    </li>
  );
};

export default TaskItem;