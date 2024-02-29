import { useState } from 'react';
import styles from './TaskCard.module.css';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Chip from '../../Buttons/Chip';

const TaskCard = ({priority,setShowList,showList}) => {
    const [showModal, setShowModal] = useState(false);

  const handleIconClick = () => {
    setShowModal(!showModal);
  };

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
        <div className={styles.head}>
          <p className={styles.priority}><div style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: priority === "HIGH" ? "red": "green",
            marginRight: '6px', 
             
            
          }}></div> {priority}PRIORITY</p>  <BsThreeDots className={styles.icon} onClick={handleIconClick} />
</div>
      <Modal showModal={showModal}  />
        <h1 className={styles.title}>Hero section</h1>
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
          <Chip bgColor={"#CF3636"} text={"10 Feb"} textClr={"white"} />
          <span style={{
            display: "flex",
            gap: "5px"
          }}>
            <Chip bgColor={"#EEECEC"} text={"Progress"} textClr={"black"}></Chip>
            <Chip bgColor={"#EEECEC"} text={"To-Do"} textClr={"black"}></Chip>
            <Chip bgColor={"#EEECEC"} text={"Done"} textClr={"black"}></Chip>
          </span>
        </div>
      </div>
    </>
  );
};

export default TaskCard;



const Modal = ({handleCloseModal, showModal}) => {
  return (
    <>
      {showModal && (
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
          <div className={styles.modal}>
            
            <ul>
              <li>Edit</li>
              <li>Share</li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
