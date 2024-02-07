

function MediaCard({ media }) {


    return (
        <div className="mediaCard">
            <img src={media.image_url} alt="media"/>
            <h1>{media.title}</h1>
            <h3>{media.media_type}</h3>
            <h3>Streaming on: {media.streaming_platform}</h3>
        </div>
    )
}

export default MediaCard