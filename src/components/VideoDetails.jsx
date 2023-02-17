import React, { Fragment, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { FetchApi } from "../utils/fetchApi";
import Videos from "./Videos";
const VideoDetails = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState();
  const [fetchVideo, setFetchVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    FetchApi(`videos?part=snippet&id=${id}`) .then(data => {
      setVideos(data?.items[0])
      setIsLoading(false)
    }).catch(err => console.log(err.message));

    FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setFetchVideo(data.items)
    );
  }, [id]);

  return (
    <Fragment>
      <div className="container">
        <div className="md:flex">
          <div className="w-[90vw] md:w-[100%] lg:w-[50%]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <h1>{videos?.snippet?.title}</h1>
            <Link to={`/channel/${videos?.snippet?.channelId}`}>
              <p>{videos?.snippet?.channelTitle}</p>
            </Link>
            <p>{videos?.snippet?.description.slice(0, 100)}</p>
          </div>
          <div className="grid_temp">
            {isLoading && <p>Loading....</p>}
          {!isLoading &&  <Videos videos={fetchVideo} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoDetails;
