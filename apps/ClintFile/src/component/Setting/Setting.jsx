import React from 'react'
import Navebar from '../navebar/Navebar'
import style from './Setting.module.css'
import { useNavigate } from 'react-router'

function Setting() {
  return (
    <div className={style.body}>
      <div>
        <Navebar/>
      </div>
      <div>
        <div>
            <form>
            <input type='text' placeholder='Name'/><br/>
            <input type='Password' placeholder='Old Password'/><br/>
            <input type='Password' placeholder='New Password'/><br/>
            <button>Save</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Setting
