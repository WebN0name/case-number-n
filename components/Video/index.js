const Video = () => {
  return (
    <div >
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/7e22klrUs_A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className = "mx-auto"
      ></iframe>
    </div>
  )
}

export default Video
