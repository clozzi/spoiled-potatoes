import Media from "./Media";
import { useState, useEffect } from "react";
import potato from '../images/potato.jpg';

function Home() {
  const [medias, setMedias] = useState([])

  useEffect(() => {
    fetch("/medias")
      .then((r) => r.json())
      .then((medias) => setMedias(medias))
  }, [])


  return (
      <main>
        <h1><img src={potato} alt="spoiled potato" width="30" height="30" />Welcome to Spoiled Potatoes!<img src={potato} alt="spoiled potato" width="30" height="30" /></h1>
        {medias.map((media) => (
          <Media key={media.id} media={media} />
        ))}
      </main>
  );
};

export default Home