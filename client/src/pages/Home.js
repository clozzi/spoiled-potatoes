import { useOutletContext } from "react-router-dom";
import MediaCard from "../components/MediaCard";

function Home() {
    const medias = useOutletContext();

  return (
      <main>
        <h1>Home!</h1>
        {/* <ul>{medias.map((media) => (
            <li>{media.title}</li>
        ))}</ul> */}
        <ul>{medias.map((media) => (
            <MediaCard key={media.id} media={media} />
        ))}</ul>
      </main>
  );
};

export default Home