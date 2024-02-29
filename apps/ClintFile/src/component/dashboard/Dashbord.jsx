import React, { useEffect, useState } from 'react'
import style from './Dashbord.module.css'
import Navebar from '../navebar/Navebar'
import Todoboard from '../todoboard/Todoboard'

function Dashbord() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 
    return () => clearInterval(intervalId); 
  }, []);
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
            <p>{currentTime.toLocaleTimeString()}</p>
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
