const Video = () => {
  return (
    <div className = "mt-16 p-8 container mx-auto">
      <iframe
        width="100%"
        height="600"
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
