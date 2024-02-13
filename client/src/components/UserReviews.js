import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Review from "./Review"


function UserReviews() {
    const [reviews, setReviews] = useState([])
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

    return (
        <div>
            <h1>My Reviews</h1>
            <div>
                {reviews.map((review) => (
                    <Review review={review} key={review.id}/>
                ))}
            </div>
        </div>
    )
}

export default UserReviews