import React from 'react';

const VideoTutorial = ({ url }) => {
  return (
    <>
      <h3>Video Tutorial</h3>
      <a id="video-tutorial">
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </a>
    </>
  );
};

export default VideoTutorial;
