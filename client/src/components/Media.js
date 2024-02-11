import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Media() {
    const [media, setMedia] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`/medias/${id}`)
            .then((r) => {
                if (r.ok) {
                    r.json().then((media) => (
                    setMedia(media)
                    ))
                }
            })
    }, [id])





    return (
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
        </div>
    )
}

export default Media