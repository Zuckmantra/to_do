import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Completar diagrama de casos de uso', completed: true },
    { id: 2, title: 'Codificar frontend con React', completed: false },
  ]);


  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };


  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;