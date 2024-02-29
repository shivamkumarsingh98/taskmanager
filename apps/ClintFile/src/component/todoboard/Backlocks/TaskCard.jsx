import React, { useState } from 'react';
import styles from './TaskCard.module.css';

const TaskCard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Listen to music', checked: false },
    { id: 2, title: 'Learn JavaScript', checked: false },
    { id: 3, title: 'Watch a movie', checked: false },
    { id: 4, title: 'Read emails', checked: false }
  ]);

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const checkedItemCount = tasks.filter(task => task.checked).length;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Check list ({checkedItemCount}/{tasks.length})</h2>
        <div className={styles.checkboxContainer}>
          {tasks.map(task => (
            <div key={task.id} className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id={`checkbox${task.id}`}
                checked={task.checked}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <label htmlFor={`checkbox${task.id}`}>{task.title}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskCard;
