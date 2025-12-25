import "./styles.css";
import { useRef, useState } from "react";
import video from "../../../videos/8128414-uhd_3840_2160_25fps.mp4";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

export default function Videoblock() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="VideoBlock">
      <div className="VideoRight">
        <video
          ref={videoRef}
          src={video}
          onClick={togglePlay}
          className={isPlaying ? "playing" : ""}
        ></video>
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? (
            <PauseCircleOutlineIcon sx={{ fontSize: 60, color: "white" }} />
          ) : (
            <PlayCircleOutlineIcon sx={{ fontSize: 60, color: "white" }} />
          )}
        </button>
      </div>
      <div className="VideoLeft">
        <h2>Lorem Ipsum is simply dummy text.</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy .
        </p>
        <ul>
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
          <li>Lorem Ipsum is simply</li>
        </ul>
      </div>
    </div>
  );
}
