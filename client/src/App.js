import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateMedia from "./components/CreateMedia";
import SearchMedia from "./pages/SearchMedia";
import CreateReview from "./components/CreateReview";

function App() {
  const [user, setUser] = useState(null)


  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  function handleLogin(username) {
    setUser(username)
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <>
      <NavBar user={user} onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin}/>} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/create" element={<CreateMedia />} />
        <Route path="/create_review" element={<CreateReview />} />
        <Route path="/search_media" element={<SearchMedia />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App;
