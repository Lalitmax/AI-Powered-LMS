"use client";
import React, { useEffect, useRef } from "react";
import YouTube, { YouTubeProps } from "react-youtube";



interface props {
    videoUrl: string
}
const YouTubePlayer: React.FC<props> = ({ videoUrl }) => {
    const playerRef = useRef<YT.Player | null>(null);

    const opts: YouTubeProps["opts"] = {
        height: "315",
        width: "560",
        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
        },
    };

    const handleReady: YouTubeProps["onReady"] = (event) => {
        playerRef.current = event.target;
        const savedTime = localStorage.getItem("videoTime");
        if (savedTime) {
            event.target.seekTo(parseFloat(savedTime), true);
        }
    };

    const handleStateChange: YouTubeProps["onStateChange"] = (event) => {
        if (event.data === YT.PlayerState.PLAYING) {
            const interval = setInterval(() => {
                if (playerRef.current) {
                    const currentTime = playerRef.current.getCurrentTime();
                    localStorage.setItem("videoTime", currentTime.toString());
                }
            }, 1000);

            // Clear interval when video is paused or stopped
            const onStateChangeListener = (e: YT.OnStateChangeEvent) => {
                if (
                    e.data === YT.PlayerState.PAUSED ||
                    e.data === YT.PlayerState.ENDED
                ) {
                    clearInterval(interval);
                    playerRef.current?.removeEventListener("onStateChange", onStateChangeListener);
                }
            };

            playerRef.current?.addEventListener("onStateChange", onStateChangeListener);
        }
    };

    return (

        <div className="video duration-500 h-full w-full rounded-md mr-3">
            <iframe
                className="h-full w-full rounded-md"
                src={videoUrl || undefined}
                title="YouTube video player"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>


    );
};

export default YouTubePlayer;

// <div className="app-container">
//     <h1>YouTube Video Player</h1>
//     <div id="player">
//         <YouTube
//             videoId={videoUrlId}
//             opts={opts}
//             onReady={handleReady}
//             onStateChange={handleStateChange}
//         />
//     </div>
// </div>