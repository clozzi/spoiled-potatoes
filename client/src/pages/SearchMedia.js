import { useState, useEffect } from "react"


function SearchMedia() {
    const [titleInput, setTitleInput] = useState("")
    const [medias, setMedias] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
        fetch("/medias")
        .then((r) => r.json())
        .then((medias) => setMedias(medias))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        const filteredResults = medias.filter((media) => {
            return media.title.includes(titleInput)
        })
        if (filteredResults.length >= 1) {
            setSearchResults(filteredResults)
        } else {
            setDisplayText("No Results Found")
            setSearchResults([])
        }
    }
    
    const displayResults = searchResults.map((media) => (
        <div className="medias" key={media.id} >
            <img src={media.image_url} alt="media" width="100" height="100"/>
            <h3>{media.title}</h3>
            <h5>{media.media_type}</h5>
            <h5>Streaming on: {media.streaming_platform}</h5>
            <div>
            {media.reviews.map((review) => (
                <div key={review.id}>
                <p>Rating: {review.rating}</p>
                <p>Explanation:{review.comment}</p>
                <p>User: {review.user.username}</p>
                </div>
            ))}
            </div>
        </div>
    ))

    // share props from home to have access to all media...search all media that way??
    return (
        <>
            <h1>Search for Media</h1>
            <form onSubmit={handleSubmit}>
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
            <div>Results: {displayResults}{displayText}</div>
        </>
    )
}

export default SearchMedia