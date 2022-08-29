import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../auth/context/AuthContext'

export const NavBar = () => {
const {user, logout}= useContext(AuthContext);


    const navigate = useNavigate();

    const onLogout=()=>{
        logout()
       navigate('/login',{
        replace:true
       });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link Marvel" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link DC" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link Search" 
                        to="/Search"
                    >
                        Search...
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span 
                        className="nav-item nav-link text-primary" 
                        
                    >
                        {user?.name}
                    </span>
                    <button 
                    className="nav-item nav-link btn"
                    onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}