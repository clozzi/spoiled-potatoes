// import './App.css';
import { useEffect, useState } from "react";

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
      <p>Client Home</p>
      <ul>{medias.map((media) => (
        <li>{media.title}</li>
      ))}</ul>
    </div>
  )
}

export default App;
