import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar({ user, onLogout }) {

    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => 
            onLogout(),
            navigate('/')
            )
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
                            <p className="greeting">You are logged in as: {user.username}</p>
                        </div>
                        <div>
                            <button className="logoutButton" onClick={handleLogout}>Logout</button>
                        </div>
                        <div>
                            <NavLink to="/create" className="nav-link">Create New Media</NavLink>
                        </div>
                    </>
                ) : (
                <div>
                   <NavLink to="/login" className="nav-link">Login</NavLink> 
                </div>
                )} 
                <div>
                    <NavLink to="/search_media" className="nav-link">Search for Media</NavLink>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar