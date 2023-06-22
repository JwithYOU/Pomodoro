const YoutubeVideo = (videoId: string) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
