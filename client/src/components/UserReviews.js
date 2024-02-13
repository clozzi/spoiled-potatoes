import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function UserReviews() {
    const [reviews, setReviews] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/reviews/${id}`)
            .then((r) => {
                if (r.ok) {
                    r.json().then((data) => 
                    setReviews(data)
                    )
                }
            })
    }, [id])

    console.log(reviews)

    return (
        <div>
            <h1>My Reviews</h1>
            <div>
                {reviews.map((review) => (
                    <div className="userReviews">
                        <p>Rating: {review.rating}</p>
                        <p>Comment: {review.comment}</p>
                        <p>Media ID: {review.media_id}</p>
                        <p>Update Button Here</p>
                        <p>Delete Button Here</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserReviews