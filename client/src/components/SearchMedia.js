import { useState } from "react"


function SearchMedia() {
    const [title, setTitle] = useState("")
    // const [results, setResults] = useState([])

    // function handleSearch(e) {
    //     e.preventDefault()
    //     fetch("/medias/:id", {

    //     })
    // }

    // share props from home to have access to all media...search all media that way??
    return (
        <>
            <h1>Search for Media</h1>
            {/* <form onSubmit={handleSearch}> */}
            <form>
                <label htmlFor="title">Media Title</label>
                <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    placeholder="Enter Media Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchMedia