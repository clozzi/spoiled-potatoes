// import './App.css';
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from "./components/Login";

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
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App;
