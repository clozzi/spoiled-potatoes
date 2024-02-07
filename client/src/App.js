// import './App.css';
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {

  const [medias, setMedias] = useState([])

  useEffect(() => {
    fetch("/home")
      .then((r) => r.json())
      .then((medias) => setMedias(medias))
      
  }, [])

  console.log(medias)

  return (
    <div>
      <header><NavBar /></header>
      <p>Client Home</p>
      <ul>{medias.map((media) => (
        <li>{media.title}</li>
      ))}</ul>
    </div>
  )
}

export default App;
