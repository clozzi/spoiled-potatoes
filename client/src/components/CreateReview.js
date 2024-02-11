import { useFormik } from "formik"

function CreateReview() {

    const formik = useFormik({
        initialValues: {
            rating: "",
            comment: "",
        },
        onSubmit: (values) => {
            console.log(values)
            fetch("/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((r) => {
                if (r.status === 201) {
                    console.log(r)
                    console.log(values)
                }
            })
        }
    })

    return (
        <div>
            <h1>Create new review</h1>
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
                <button type="submit">Submit New Review</button>
            </form>
        </div>
    )
}

export default CreateReview