import { useOutletContext } from "react-router-dom";

function Home() {
    const medias = useOutletContext();

  return (
      <main>
        <h1>Home!</h1>
        <ul>{medias.map((media) => (
            <li>{media.title}</li>
        ))}</ul>
      </main>
  );
};

export default Home