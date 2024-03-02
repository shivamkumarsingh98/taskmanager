import style from './Navebar.module.css'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../Context/AuthProvider'
import { useContext } from 'react';

function Navebar() {
    let navigate = useNavigate()
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        logout();
        navigate('/LoginPage');
    };

    return (
        <div className={style.body}>
            <div className={style.sectionone}>
                <p className={style.heading}>Pro Manage</p>
                <div className={style.navbtn}>
                <p onClick={()=>{navigate('/Dashbord')}}><i className="bi bi-wallet"></i> Board</p>
                <p onClick={()=>{navigate('/Analytics')}}><i className="bi bi-database"></i> Analytics</p>
                <p onClick={()=>{navigate('/Setting')}}><i className="bi bi-gear"></i> Settings</p>
                </div>
            </div>
            <div className={style.sectiontwo}>
                <p onClick={handleLogout}><i className="bi bi-box-arrow-right"></i> Log out</p>
            </div>
        </div>
    )
}

export default Navebar
