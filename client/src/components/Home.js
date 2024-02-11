import { useState, useEffect } from "react";
import potato from '../images/potato.jpg';
import { Link } from "react-router-dom";

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
          <div className="medias" key={media.id} >
            <img src={media.image_url} alt="media" width="100" height="100"/>
            <h3>{media.title}</h3>
            <h5>{media.media_type}</h5>
            <h5>Streaming on: {media.streaming_platform}</h5>
            <div>
            {media.reviews.map((review) => (
                <div key={review.id}>
                <p>Rating: {review.rating}</p>
                <p>Explanation:{review.comment}</p>
                <p>User: {review.user.username}</p>
                </div>
            ))}
            </div>
            <Link to={`/medias/${media.id}`}>Click for more information</Link>
          </div>
        ))}
      </main>
  );
};

export default Home