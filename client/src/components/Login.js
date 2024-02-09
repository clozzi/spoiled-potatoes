import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
            .then((r) => r.json())
            .then((user) => 
                onLogin(user),
                navigate('/')
                )
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Login with Username</h3>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login