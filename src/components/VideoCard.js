import React from "react";

const VideoCard = ({info}) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title,thumbnails } = snippet;
 const {viewCount} =statistics;
  return (
    <div className="p-2 m-2 w-72 ">
      <img className="rounded-lg " alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-600">{viewCount} views</li>

      </ul>
    </div>
  );
};

export default VideoCard;
