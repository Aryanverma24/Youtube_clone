import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img alt="" src="https://i.ytimg.com/vi/_pbBqHhmYbs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBE9pOy_QlKXF9iN4GKRa6gOIvzfQ"></img>
        <span>5:30</span>
      </div>
      <div className="video_title">
        <p>
          Man TGS 8X8 Heavy hauling in a forest - SnowRunner | Thrustmaster TX
        </p>
      </div>
      <div className="video_details">
        <span>
          <AiFillEye /> 5M views 
        </span>
        <span> &bull; 3 days ago</span>
      </div>
      <div className="video_channel">
        <img src="https://yt3.ggpht.com/ytc/AIdro_lGz1gq3Nst--TrQ_kuDu3YU4KJqJFfBTkOSLhUoJeH_gY=s68-c-k-c0x00ffffff-no-rj"alt="" />
        <p>Forza Horizon 5</p>
      </div>
    </div>
  );
};

export default Video;
