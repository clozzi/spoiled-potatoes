import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CreateReview from "./CreateReview"


function Media({ user }) {
    const [loading, setLoading] = useState(false)
    const [media, setMedia] = useState({})
    const [reviews, setReviews] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/medias/${id}`)
            .then((r) => {
                if (r.ok) {
                    r.json().then((data) => {
                    handleDisplayMedia(data);
                    setLoading(false)
                })}
            })
    }, [id])


    function handleDisplayMedia(media) {
        setMedia(media)
        setReviews(media.reviews)
    }


    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="media" key={media.id} >
                <img src={media.image_url} alt="media" width="100" height="100"/>
                <h3>{media.title}</h3>
                <h5>{media.media_type}</h5>
                <h5>Streaming on: {media.streaming_platform}</h5>
                <CreateReview media={media} user={user} />
                <div>
                {reviews.map((review) => (
                    <div key={review.id}>
                    <p>Rating: {review.rating}</p>
                    <p>Explanation:{review.comment}</p>
                    <p>User: {review.user.username}</p>
                    </div>
                ))}
                </div>
            </div>
            )}
        </>
        
        
    )
}

export default Media