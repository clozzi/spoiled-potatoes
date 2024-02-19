import { useFormik } from "formik"

function CreateReview({ user, media, onCreateReview }) {

    const formik = useFormik({
        initialValues: {
            rating: "",
            comment: "",
            user_id: "",
            media_id: "",
        },
        onSubmit: (values) => {
            fetch("/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    rating: values.rating,
                    comment: values.comment,
                    user_id: user.id,
                    media_id: media.id
                }),
            })
            .then((r) => r.json())
            .then((review) => {
                onCreateReview(review)
                formik.values.rating = ""
                formik.values.comment = ""
            })
        }
    })

    return (
        <div className="createReview">
            <h3>Create new review</h3>
            {user ? (
                <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }} id="newReview">
            <div>
                <label>Rating (between 0 and 10):</label>
                <input 
                    type="number" 
                    id="rating"
                    name="rating" 
                    placeholder="Enter Rating (0-10)..." 
                    max="10" 
                    min="0"
                    onChange={formik.handleChange}
                    value={formik.values.rating}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    id="comment"
                    name="comment" 
                    placeholder="Enter comment..."
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                />
            </div>
            <div className="hiddenInput">
                <label>User ID:</label>
                <input 
                    type="hidden" 
                    id="user_id"
                    name="user_id"
                    readOnly
                    value={formik.values.user_id}
                />
            </div>
            <div className="hiddenInput">
                <label>Media ID:</label>
                <input 
                    type="hidden" 
                    id="media_id"
                    name="media_id"
                    readOnly
                    value={formik.values.media_id}
                />
            </div>
            <button type="submit">Submit New Review</button>
            </form>
            ) : (
                <h3>You must be logged in to leave a review</h3>
            )}
            
        </div>
    )
}


export default CreateReview