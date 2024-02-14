import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateMedia from "./components/CreateMedia";
import SearchMedia from "./components/SearchMedia";
import CreateReview from "./components/CreateReview";
import Media from "./components/Media";
import potato from '../src/images/potato.jpg';
import UserReviews from "./components/UserReviews";
import EditReview from "./components/EditReview";
import DeleteReview from "./components/DeleteReview";


function App() {
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])


  function handleLogin(username) {
    setUser(username)
    navigate('/')
    document.location.reload()
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <main>
      <NavBar user={user} onLogout={handleLogout}/>
      <h1><img src={potato} alt="spoiled potato" width="30" height="30" />Welcome to Spoiled Potatoes!<img src={potato} alt="spoiled potato" width="30" height="30" /></h1>
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/signup" element={<Signup onLogin={handleLogin}/>} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/create" element={<CreateMedia />} />
        <Route path="/medias/:id" element={<Media user={user}/>} />
        <Route path="/reviews" element={<CreateReview  />} />
        <Route path="/search_media" element={<SearchMedia user={user} />} />
        <Route path="/user_reviews/:id" element={<UserReviews />} />
        <Route path="/reviews/:id" element={<EditReview />} />
        <Route path="/reviews/:id" element={<DeleteReview />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App;
