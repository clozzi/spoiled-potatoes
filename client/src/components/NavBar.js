import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <ul>
                <div>
                   <NavLink to="/" className="nav-link">
                    Home
                    </NavLink> 
                </div>
                <div>
                   <NavLink to="/login" className="nav-link">
                    Login
                    </NavLink> 
                </div>
            </ul>
        </nav>
    )
}

export default NavBar