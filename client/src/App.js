// import './App.css';
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch("/check_session")
  //     .then((r) => r.json())
  //     .then((user) => setUser(user))
      
  // }, [])

  function handleLogin(user) {
    setUser(user)
  }

  console.log(user)

  return (
    <div>
      <header><NavBar /></header>
      <Outlet context={user}/>
    </div>
  )
}

export default App;
