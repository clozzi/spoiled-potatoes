import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ user }) {
    return (
        <nav>
            <ul>
                <div>
                   <NavLink to="/" className="nav-link">
                    Home
                    </NavLink> 
                </div>
                {user ? (
                    <div>
                        <p>Welcome, {user.username}</p>
                    </div>
                ) : (
                    <div>
                   <NavLink to="/login" className="nav-link">
                    Login
                    </NavLink> 
                </div>
                )} 
            </ul>
        </nav>
    )
}

export default NavBar