import { useState } from 'react';
import styles from './TaskCard.module.css';
import { IoIosArrowUp,IoIosArrowDown  } from "react-icons/io";
import Chip from '../../Buttons/Chip';

const TaskCard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Listen to music', checked: false },
    { id: 2, title: 'Learn JavaScript', checked: false },
    { id: 3, title: 'Watch a movie', checked: false },
    { id: 4, title: 'Read emails', checked: false }
  ]);
  const [showList, setShowList] = useState(false);

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
        <h2 className={styles.heading}>Hero section </h2>
        <div className={styles.header}>
          <h2 className={styles.heading}>Check list ({checkedItemCount}/{tasks.length})</h2>
          <button className={styles.dropdownButton} onClick={() => setShowList(!showList)}>
            {showList ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
        </div>
        {showList && (
          <div className={styles.checkboxContainer}>
            {tasks.map(task => (
              <div key={task.id} onChange={() => handleCheckboxChange(task.id)} className={`${styles.checkboxGroup} ${task.checked ? styles.checked : ''}`}>
                <input
                  type="checkbox"
                  id={`checkbox${task.id}`}
                  checked={task.checked}
                  
                />
                <label htmlFor={`checkbox${task.id}`}>{task.title}</label>
              </div>
            ))}
          </div>
        )}
        <div className={styles.footer}>
         <Chip/>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
