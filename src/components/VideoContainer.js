import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constant"
import VideoCard,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

if (videos==0)return <Shimmer/>
  // return videos?.length === 0 ? (
  //   <h1 className="bg-red-300">juhi</h1>
  // ) : 
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[7]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}

    </div>
  );
};

export default VideoContainer;