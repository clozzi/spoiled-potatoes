import { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
            .then((r) => {
            if (r.status === 200) {
                onLogin(username)
                document.location.reload()
            }
        })
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