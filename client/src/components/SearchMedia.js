import { useState } from "react"


function SearchMedia() {
    const [titleInput, setTitleInput] = useState("")
    // const [results, setResults] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(titleInput)
    }

    // share props from home to have access to all media...search all media that way??
    return (
        <>
            <h1>Search for Media</h1>
            <form onSubmit={handleSubmit}>
                separate out form elements to above after fetching and setting in state
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
        </>
    )
}

export default SearchMedia