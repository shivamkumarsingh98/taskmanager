import React from 'react'
import { useState } from 'react'
import style from './Todoboard.module.css'
import CreateTodo from '../module/CreateTodo'
import TaskCard from './Backlocks/TaskCard'

function Todoboard() {

  const [todo, setTodo] = useState()
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(null)

  const handelPopup = (someQuize) => {
    console.log('ok')
    setClick('someQuize');
    setShow(true)
}
  return (
    <div className={style.body}>
        <div className={style.container}>
        <p>Backlocks</p>
        <TaskCard priority={"HIGH"} />
        <TaskCard priority={"HIGH"} />
          </div>
        <div className={style.container}>
          <div className={style.TodoUp}>
          <p>Todo</p>
          <TaskCard priority={"LOW"} />
          <span onClick={() => handelPopup()}><i className="bi bi-plus"></i></span>
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
                            onOpen={show}
                            onRequestClose={() => {
                                console.log("helllo")
                                setClick(null)
                            }}
                        />
                    )}
    </div>
  )
}

export default Todoboard
