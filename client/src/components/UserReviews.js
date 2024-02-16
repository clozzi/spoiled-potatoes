import { useState, useEffect } from "react"
import EditReview from "./EditReview"
import DeleteReview from "./DeleteReview"


function UserReviews({ user }) {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("/reviews")
            .then((r) => r.json())
            .then((reviews) => setReviews(reviews))
    }, [])

    function handleUpdateReview(updatedReview) {
        // setIsEditing(false)
        const updatedReviews = reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview
            } else {
                return review
            }
        })
        setReviews(updatedReviews)
    }

    function handleDeleteReview(id) {
        const updatedReviews = reviews.filter((review) => review.id !== id)
        setReviews(updatedReviews)
    }

    const filteredReviews = reviews.filter((review) => review.user_id === user.id)

    const displayReviews = filteredReviews.map((review) => (
        <div className="userReviews" key={review.id} >
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>Media ID: {review.media_id}</p>
            <EditReview review={review} onUpdateReview={handleUpdateReview} />
            <DeleteReview review={review} onDeleteReview={handleDeleteReview} />
        </div>
    ))

    return (
        <div>
            <h1>My Reviews</h1>
            {displayReviews ? (
                <div>{displayReviews}</div>
            ) : (
                <p>No Reviews Yet</p>
            )}
            
        </div>
    )
}

export default UserReviews