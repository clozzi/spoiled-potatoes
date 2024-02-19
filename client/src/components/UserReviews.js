import { useState, useEffect } from "react"
import EditReview from "./EditReview"
import DeleteReview from "./DeleteReview"

function UserReviews({ user }) {

    const [reviews, setReviews] = useState([])
    const [filteredReviews, setFilteredReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/reviews")
            .then((r) => r.json())
            .then((reviews) => setReviews(reviews))
    }, [])

    function handleUpdateReview(updatedReview) {
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
        const updatedReviews = reviews.filter((review) => review.id !== id)
        setReviews(updatedReviews)
        setLoading(false)
    }

    setTimeout(() => {
        setFilteredReviews(reviews.filter((review) => review.user_id === user.id))
        setLoading(false)
    }, 2000)
    
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
                    <h3>My Reviews</h3>
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