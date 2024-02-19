

function DeleteReview({ review, onDeleteReview }) {

    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
            method: "DELETE",
        })
        .then(() => onDeleteReview(review.id))
    }

    return (
        <button onClick={handleDeleteClick}>Delete Review</button>
    )
}


export default DeleteReview