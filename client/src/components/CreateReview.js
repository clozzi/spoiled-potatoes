import { useFormik } from "formik"

function CreateReview({ user, media }) {

    const formik = useFormik({
        initialValues: {
            rating: "",
            comment: "",
            user_id: user.id,
            media_id: media.id,
        },
        onSubmit: (values) => {
            fetch("/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((r) => {
                if (r.status === 201) {
                    console.log(values)
                    window.location.reload()
                }
            })
        }
    })

    return (
        <div className="createReview">
            <h3>Create new review</h3>
            <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
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
                <div>
                    <label>User ID:</label>
                    <input 
                        type="number" 
                        id="user_id"
                        name="user_id"
                        readOnly
                        value={formik.values.user_id}
                    />
                </div>
                <div>
                    <label>Media ID:</label>
                    <input 
                        type="number" 
                        id="media_id"
                        name="media_id"
                        readOnly
                        value={formik.values.media_id}
                    />
                </div>
                <button type="submit">Submit New Review</button>
            </form>
        </div>
    )
}

export default CreateReview