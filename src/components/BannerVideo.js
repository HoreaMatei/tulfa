import React, { useEffect, useRef } from "react";

const BannerVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play video automatically when component mounts
    videoRef.current.play();
  }, []);

  return (
    <div className="video-wrapper">
      <video ref={videoRef} className="banner-video" muted loop autoPlay>
        <source src="./sample.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BannerVideo;
