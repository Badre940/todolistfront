import React, { useState, useEffect } from 'react';
import styles from '../styles/todo.module.css';
import { Icon } from 'semantic-ui-react';
import axiosInstance from '@/api/axiosInstance';
const Todo = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const userId = 1; // Utilisateur simulé, remplacez-le par l'ID utilisateur actuel

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`http://localhost:5434/tasks/${userId}`);
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) return;

    const response = await fetch('http://localhost:5434/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, description: value, completed: false }),
    });

    const newTask = await response.json();
    setTasks([...tasks, newTask]);
    setValue("");
  };

  const handleDelete = async (taskId) => {
    await fetch(`http://localhost:5434/tasks/${taskId}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.title}>
          <h1 className={styles.mainTitle}>Get Things Done!</h1>
        </div>
        <form className={styles.searchBar} onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="What is the task today"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.todobtn}>Add Task</button>
        </form>
        <div className={styles.todolist}>
          {tasks.map(task => (
            <div key={task.id} className={styles.todo}>
              <div className={styles.todoTask}>
                <p>{task.description}</p>
              </div>
              <div className={styles.todoOptions}>
                <Icon name='edit' />
                <Icon name='trash' onClick={() => handleDelete(task.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
