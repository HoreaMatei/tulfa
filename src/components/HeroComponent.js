import React, { useState, useEffect, useRef } from "react";
import BannerVideo from "./BannerVideo";
import IntroducingComponent from "./IntroducingComponent";
import "./HeroComponent.css"; // Add your CSS for fade-in/out

const HeroComponent = () => {
  const [fadeOutVideo, setFadeOutVideo] = useState(false);
  const [fadeInIntro, setFadeInIntro] = useState(false);

  const videoRef = useRef(null);

  // Scroll event handler to fade out video and fade in IntroducingComponent
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const videoHeight = videoRef.current ? videoRef.current.clientHeight : 0;

      console.log("ScrollY:", scrollY, "Video Height:", videoHeight);

      // Trigger fade-out effect earlier (using videoHeight / 1.2 for quicker fade)
      if (scrollY > videoHeight / 1.2 && !fadeOutVideo) {
        console.log("Triggering fade-out");
        setFadeOutVideo(true);
        setFadeInIntro(true); // Start fading in the IntroducingComponent
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fadeOutVideo]);

  return (
    <div className="hero-container">
      <div
        className={`video-container ${fadeOutVideo ? "fade-out" : ""}`}
        ref={videoRef}
      >
        <BannerVideo />
      </div>
      <div
        className={`introducing-container ${fadeInIntro ? "fade-in" : ""}`}
      ></div>
    </div>
  );
};

export default HeroComponent;
