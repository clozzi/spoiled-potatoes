import { useFormik } from "formik"
// import { useState } from "react"
import * as yup from 'yup'

function CreateMedia() {
    const formSchema = yup.object().shape({
        title: yup.string().max(32).min(1),
    })

    const formik = useFormik({
        initialValues: {
            media_type: "",
            streaming_platform: "",
            title: "",
            image_url: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values)
            fetch("/medias", {
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
            <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
                <div>
                     <p>Select a Media Type:</p>
                     <input 
                        name="media_type" 
                        type="radio"
                        id="Movie"
                        value="Movie"
                        onChange={formik.handleChange}
                    />
                    <label >Movie</label>
                    <input 
                        name="media_type" 
                        type="radio"
                        id="Series"
                        value="Series"
                        onChange={formik.handleChange}
                    />
                    <label >Series</label>
                </div>
                <div>
                    <p>Select a Streaming Platform:</p>
                    <input 
                        name="streaming_platform" 
                        type="radio"
                        id="HBO"
                        value="HBO"
                        onChange={formik.handleChange}
                    />
                    <label >HBO</label>
                    <input 
                        name="streaming_platform" 
                        type="radio"
                        id="Hulu"
                        value="Hulu"
                        onChange={formik.handleChange}
                    />
                    <label >Hulu</label>
                    <input 
                        name="streaming_platform" 
                        type="radio"
                        id="Netflix"
                        value="Netflix"
                        onChange={formik.handleChange}
                    />
                    <label >Netflix</label>
                    <input 
                        name="streaming_platform" 
                        type="radio"
                        id="Prime"
                        value="Prime"
                        onChange={formik.handleChange}
                    />
                    <label >Prime</label>
                    <input 
                        name="streaming_platform" 
                        type="radio"
                        id="Peacock"
                        value="Peacock"
                        onChange={formik.handleChange}
                    />
                    <label >Peacock</label>
                </div>
                <div>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Enter media title..." 
                        maxLength="32" 
                        minLength="1"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                </div>
                <div>
                    <input 
                        type="url" 
                        name="image_url" 
                        placeholder="Enter image url..."
                        onChange={formik.handleChange}
                        value={formik.values.image_url}
                    />
                </div>
                <button type="reset">Reset Form</button>
                <button type="submit">Submit New Media</button>
            </form>
        </div>
    )
}


    // const [title, setTitle] = useState("")
    // const [mediaType, setMediaType] = useState("")
    // const [streamingPlatform, setStreamingPlatform] = useState("")
    // const [imageURL, setImageURL] = useState("")

    // function handleNewMedia(e) {
    //     e.preventDefault()
    //     const mediaData = {
    //         mediaType: mediaType,
    //         streamingPlatform: streamingPlatform,
    //         title: title,
    //         imageURL: imageURL,
    //     }
    //     // incorrect POST format
    //     fetch("/medias", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': "application/json",
    //         },
    //         body: JSON.stringify(mediaData, null, 2),
    //     }).then((r) => {
    //         if (r.status === 201) {
    //             alert('success!')
    //         }
    //     })
    // }


    // return (
    //     <>
    //         <h1>Create Media Here</h1>
    //         <form onSubmit={handleNewMedia}>
    //             <div>
    //                 <p>Select a Media Type:</p>
    //                 <input 
    //                     name="mediaType" 
    //                     type="radio"
    //                     id="Movie"
    //                     value="Movie"
    //                     onChange={(e) => setMediaType(e.target.value)}
    //                 />
    //                 <label >Movie</label>
    //                 <input 
    //                     name="mediaType" 
    //                     type="radio"
    //                     id="Series"
    //                     value="Series"
    //                     onChange={(e) => setMediaType(e.target.value)}
    //                 />
    //                 <label >Series</label>
    //             </div>
    //             <div>
    //                 <p>Select a Streaming Platform:</p>
    //                 <input 
    //                     name="streamingPlatform" 
    //                     type="radio"
    //                     id="HBO"
    //                     value="HBO"
    //                     onChange={(e) => setStreamingPlatform(e.target.value)}
    //                 />
    //                 <label >HBO</label>
    //                 <input 
    //                     name="streamingPlatform" 
    //                     type="radio"
    //                     id="Hulu"
    //                     value="Hulu"
    //                     onChange={(e) => setStreamingPlatform(e.target.value)}
    //                 />
    //                 <label >Hulu</label>
    //                 <input 
    //                     name="streamingPlatform" 
    //                     type="radio"
    //                     id="Netflix"
    //                     value="Netflix"
    //                     onChange={(e) => setStreamingPlatform(e.target.value)}
    //                 />
    //                 <label >Netflix</label>
    //                 <input 
    //                     name="streamingPlatform" 
    //                     type="radio"
    //                     id="Prime"
    //                     value="Prime"
    //                     onChange={(e) => setStreamingPlatform(e.target.value)}
    //                 />
    //                 <label >Prime</label>
    //                 <input 
    //                     name="streamingPlatform" 
    //                     type="radio"
    //                     id="Peacock"
    //                     value="Peacock"
    //                     onChange={(e) => setStreamingPlatform(e.target.value)}
    //                 />
    //                 <label >Peacock</label>
    //             </div>
    //             <div>
    //                 <input 
    //                     type="text" 
    //                     name="title" 
    //                     placeholder="Enter media title..." 
    //                     maxLength="32" 
    //                     minLength="1"
    //                     onChange={(e) => setTitle(e.target.value)}
    //                 />
    //             </div>
    //             <div>
    //                 <input 
    //                     type="url" 
    //                     name="imageURL" 
    //                     placeholder="Enter image url..."
    //                     onChange={(e) => setImageURL(e.target.value)}
    //                 />
    //             </div>
    //             <button type="reset">Reset Form</button>
    //             <button type="submit">Submit New Media</button>
    //         </form>
    //     </>
    // )

export default CreateMedia