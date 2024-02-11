import { useState } from "react"


function SearchMedia() {
    const [titleInput, setTitleInput] = useState("")
    // const [results, setResults] = useState([])

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch(`/medias/${id}`)
    //         .then((r) => r.json())
    //         .then((results) => setResults(results))
    // }

    // share props from home to have access to all media...search all media that way??
    return (
        <>
            <h1>Search for Media</h1>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                {/* separate out form elements to above after fetching and setting in state */}
                <label htmlFor="title">Media Title</label>
                <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    placeholder="Enter Media Title..."
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {/* <div>
                {results.map((result) => (
                    <div className="medias" key={result.id} >
                    <img src={result.image_url} alt="media" width="100" height="100"/>
                    <h3>{result.title}</h3>
                    <h5>{result.media_type}</h5>
                    <h5>Streaming on: {result.streaming_platform}</h5>
                    <div>
                    {result.reviews.map((review) => (
                        <div key={review.id}>
                        <p>Rating: {review.rating}</p>
                        <p>Explanation:{review.comment}</p>
                        <p>User: {review.user.username}</p>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div> */}
        </>
    )
}

export default SearchMedia