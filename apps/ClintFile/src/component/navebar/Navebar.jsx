import React from 'react'
import style from './Navebar.module.css'

function Navebar() {
    return (
        <div className={style.body}>
            <div className={style.sectionone}>
                <p className={style.heading}>Pro Manage</p>
                <div className={style.navbtn}>
                <p><i class="bi bi-wallet"></i> Board</p>
                <p><i class="bi bi-database"></i> Analytics</p>
                <p><i class="bi bi-gear"></i> Settings</p>
                </div>
            </div>
            <div className={style.sectiontwo}>
                <p><i class="bi bi-box-arrow-right"></i> Log out</p>
            </div>
        </div>
    )
}

export default Navebar
