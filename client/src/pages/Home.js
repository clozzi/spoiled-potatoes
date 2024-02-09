// import MediaCard from "../components/MediaCard";
import { useState, useEffect } from "react";

function Home() {
  const [medias, setMedias] = useState([])

  useEffect(() => {
    fetch("/home")
      .then((r) => r.json())
      .then((medias) => setMedias(medias))
      
  }, [])


  return (
      <main>
        <h1>Welcome to Spoiled Potatoes!</h1>
        <ul>{medias.map((media) => (
          <div className="mediaCard" key={media.id}>
            <img src={media.image_url} alt="media" width="50" height="50"/>
            <h1>{media.title}</h1>
            <h3>{media.media_type}</h3>
            <h3>Streaming on: {media.streaming_platform}</h3>
          </div>
        ))}</ul>
      </main>
  );
};

export default Home