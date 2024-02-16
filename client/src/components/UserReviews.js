import { useState, useEffect } from "react"
import EditReview from "./EditReview"
import DeleteReview from "./DeleteReview"


function UserReviews({ user }) {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("/reviews")
            .then((r) => r.json())
            .then((reviews) => {
                setReviews(reviews)
                setLoading(false)
            })
    }, [])

    function handleUpdateReview(updatedReview) {
        setLoading(true)
        const updatedReviews = reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview
            } else {
                return review
            }
        })
        setReviews(updatedReviews)
        setLoading(false)
    }

    function handleDeleteReview(id) {
        setLoading(true)
        const updatedReviews = reviews.filter((review) => review.id !== id)
        setReviews(updatedReviews)
        setLoading(false)
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
        <>
        {loading ? (
            <p>Loading</p>
        ) : (
            <div>
                <h1>My Reviews</h1>
                {displayReviews ? (
                    <div>{displayReviews}</div>
                ) : (
                    <p>No Reviews Yet</p>
                )}    
            </div>
        )}
      </>  
    )
}

export default UserReviews