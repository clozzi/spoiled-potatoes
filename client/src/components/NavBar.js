import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ user, onLogout }) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout())
        }


    return (
        <nav>
            <ul>
                <div>
                   <NavLink to="/" className="nav-link">
                    Home
                    </NavLink> 
                </div>
                {user ? (
                    <>
                        <div>
                            <p>Welcome, {user.username}</p>
                            
                        </div>
                        <div>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </>
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