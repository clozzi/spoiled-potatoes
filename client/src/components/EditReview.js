import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";

function EditReview({ review }) {
  const { id } = useParams()

  const formik = useFormik({
    initialValues: {
        rating: "",
        comment: "",
        user_id: review.user_id,
        media_id: review.media_id
    },
    onSubmit: (values) => {
        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        }).then((r) => {
            if (r.status === 201) {
                console.log(values)
            }
        })
    }
})

  return (
    <div>
        <form className="edit-review" onSubmit={formik.handleSubmit}>
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
    
  );
}

export default EditReview;