import { NavLink, useNavigate, Link } from "react-router-dom";

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
            <div>
                <NavLink to="/" className="nav-link">Home</NavLink> 
                <NavLink to="/signup" className="nav-link">Signup</NavLink>
                {user ? (
                    <>
                        <p className="greeting">You are logged in as: {user.username}</p>
                        <button className="logoutButton" onClick={handleLogout}>Logout</button>
                        <NavLink to="/create" className="nav-link">Create New Media</NavLink>
                        <NavLink to="/create_review" className="nav-link">Create New Review</NavLink>
                        <Link to={`/reviews/${user.id}`}>My Reviews</Link>
                    </>
                ) : (
                   <NavLink to="/login" className="nav-link">Login</NavLink> 
                )} 
                
                <NavLink to="/search_media" className="nav-link">Search for Media</NavLink>
            </div>
        </nav>
    )
}

export default NavBar