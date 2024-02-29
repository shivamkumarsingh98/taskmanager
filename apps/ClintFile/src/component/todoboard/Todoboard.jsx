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
        <div className={style.Backlocks}>
        <p>Backlocks</p>
        <TaskCard/>
          </div>
        <div className={style.Todo}>
          <div className={style.TodoUp}>
          <p>Todo</p>
          <span onClick={() => handelPopup()}><i className="bi bi-plus"></i></span>
          </div>
          <div></div>
          </div>
        <div className={style.InProcess}>
          <p>In Process</p>
          </div>
        <div className={style.Done}>
          <p>Done</p>
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
