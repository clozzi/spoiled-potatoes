import EditReview from "./EditReview"

function Review({ review }) {

    return (
        <div>
            <div className="userReviews" key={review.id}>
                <p>Rating: {review.rating}</p>
                <p>Comment: {review.comment}</p>
                <p>Media ID: {review.media_id}</p>
                <EditReview review={review}>Modify Review</EditReview>
                <p>Delete Button Here</p>
            </div>
        </div>
    )
}

export default Review