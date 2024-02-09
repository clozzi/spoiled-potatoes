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
                   <NavLink to="/" className="nav-link">Home</NavLink> 
                </div>
                <div>
                    <NavLink to="/signup" className="nav-link">Signup</NavLink>
                </div>
                {user ? (
                    <>
                        <div>
                            <p className="greeting">Welcome back! You are logged in as: {user.username}</p>
                        </div>
                        <div>
                            <button className="logoutButton" onClick={handleLogout}>Logout</button>
                        </div>
                    </>
                ) : (
                <div>
                   <NavLink to="/login" className="nav-link">Login</NavLink> 
                </div>
                )} 
            </ul>
        </nav>
    )
}

export default NavBar