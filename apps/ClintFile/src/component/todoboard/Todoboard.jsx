import { useState } from 'react'
import style from './Todoboard.module.css'
import CreateTodo from '../module/CreateTodo'
import TaskCard from './Backlocks/TaskCard'

function Todoboard() {
  
  const [showModal, setShowModal] = useState(false);
  const [click, setClick] = useState(null);

  const handlePopup = () => {
    setClick('someQuize');
    setShowModal(true);
  }

  return (
    <div className={style.body}>
      <div className={style.container}>
        <p>Backlogs</p>
        <TaskCard priority={"HIGH"} />
        <TaskCard priority={"HIGH"} />
      </div>
      <div className={style.container}>
        <div className={style.TodoUp}>
          <p>Todo</p>
          <TaskCard priority={"LOW"} />
          <span onClick={handlePopup} style={{
            cursor: "pointer"
          }}><i className="bi bi-plus" ></i></span>
        </div>
        <div></div>
      </div>
      <div className={style.container}>
        <p>In Process</p>
        <TaskCard priority={"LOW"} />
      </div>
      <div className={style.container}>
        <p>Done</p>
        <TaskCard priority={"LOW"} />
      </div>

      {click && (
        <CreateTodo
          isOpen={showModal}
          onRequestClose={() => {
            setClick(null);
            setShowModal(false);
          }}
        />
      )}
    </div>
  )
}

export default Todoboard;
