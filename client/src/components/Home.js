import { NavLink } from "react-router-dom";

function Home({ user, medias }) {


  return (
      <div>
        <h4>Media Home Page</h4>
        {medias.map((media) => (
          <div className="medias" key={media.id} >
            <img src={media.image_url} alt="media" width="100" height="100" className="mediaImage"/>
            <h3>{media.title}</h3>
            <h5>{media.media_type}</h5>
            <h5>Streaming on: {media.streaming_platform}</h5>
            {user ? (
              <NavLink to={`/medias/${media.id}`} className="nav-link">Click for more information</NavLink>
            ) : (
              <p>Log in to see Reviews</p>
            )}
          </div>
        ))}
      </div>
  );
};

export default Home