import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import EditReview from "./EditReview"


function UserReviews() {
    const [reviews, setReviews] = useState([])
    // const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        fetch(`/user_reviews/${id}`)
            .then((r) => {
                if (r.ok) {
                    r.json().then((data) => 
                    setReviews(data)
                    )
                }
            })
    }, [id])

    function handleUpdateReview(updatedReview) {
        // setIsEditing(false)
        console.log(updatedReview)
        const updatedReviews = reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview
            } else {
                return review
            }
        })
        setReviews(updatedReviews)
        console.log(updatedReviews)
    }

    const displayReviews = reviews.map((review) => (
        <div className="userReviews" key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>Media ID: {review.media_id}</p>
            <EditReview review={review} onUpdateReview={handleUpdateReview}>Modify Review</EditReview>
            <p>Delete Button Here</p>
        </div>
    ))

    return (
        <div>
            <h1>My Reviews</h1>
            <div>{displayReviews}</div>
            {/* <div>
                {reviews.map((review) => (
                    <div className="userReviews" key={review.id}>
                    <p>Rating: {review.rating}</p>
                    <p>Comment: {review.comment}</p>
                    <p>Media ID: {review.media_id}</p>
                    <EditReview review={review} onUpdateReview={handleUpdateReview}>Modify Review</EditReview>
                    <p>Delete Button Here</p>
                </div>
                ))}
            </div> */}
        </div>
    )
}

export default UserReviews