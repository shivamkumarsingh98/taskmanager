import React from 'react'
import style from './Dashbord.module.css'
import Navebar from '../navebar/Navebar'
import Todoboard from '../todoboard/Todoboard'
import Analytics from '../Analytics/Analytics'

function Dashbord() {
  return (
    <div className={style.body}>
   <Navebar />
      <div className={style.board}>
        <div className={style.boardTop}>
          <div className={style.lefttext}>
            <h6 >Welcome !</h6>
            <p>Board</p>
          </div>
          <div className={style.righttext}>
            <p>09:50 Am</p>
            <p>This Week</p>
          </div>
        </div>
        <div className={style.boardDown}>
        <Todoboard/>
        </div>
      </div>
    </div>
  )
}

export default Dashbord
