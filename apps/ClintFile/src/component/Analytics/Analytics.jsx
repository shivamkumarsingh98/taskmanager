import React from 'react'
import style from './Analytics.module.css'
import Navebar from '../navebar/Navebar'

function Analytics() {
    return (
        <div className={style.body}>
            <div >
                
            </div>
            <div className={style.mainsection}>
                <div className={style.header}>
                    <h3>Analytics</h3>
                </div>
                <div className={style.board}>
                    <div className={style.sectionone}>
                        <ul>
                            <div className={style.list}>
                                <li>Backlock Task</li><span>0</span>
                            </div>
                            <div className={style.list}>
                                <li>Todo Task</li><span>0</span>
                            </div>
                            <div className={style.list}>
                                <li>In-Progress Tasks</li><span>0</span>
                            </div>
                            <div className={style.list}>
                                <li>Completed Task</li><span>0</span>
                            </div>
                        </ul>
                    </div>
                    <div className={style.sectiontwo}>
                        <ul>
                            <div className={style.list}>
                                <li>Low Priority</li><span>0</span>
                            </div>
                            <div className={style.list}><li>Moderate Priority</li><span>0</span></div>
                            <div className={style.list}><li>High Priority</li><span>0</span></div>
                            <div className={style.list}><li>Due Date Tasks</li><span>0</span></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics
