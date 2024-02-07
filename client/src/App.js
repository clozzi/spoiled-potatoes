// import './App.css';
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

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
      <Outlet context={medias} />
    </div>
  )
}

export default App;
