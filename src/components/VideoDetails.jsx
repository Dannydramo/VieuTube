import React, { Fragment, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { FetchApi } from "../utils/fetchApi";
import Videos from "./Videos";
import {Oval} from 'react-loader-spinner'
const VideoDetails = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState();
  const [fetchVideo, setFetchVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    FetchApi(`videos?part=snippet&id=${id}`).then(data => {
      setVideos(data?.items[0])
      setIsLoading(false)
    }).catch(err => console.log(err.message));

    FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(data => {
      setFetchVideo(data?.items)
      setIsLoading(false)
    }).catch(err => console.log(err.message));
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
          <div className="absolute top-[50%] right-[50%]">
{isLoading &&   <Oval
  height={80}
  width={80}
  color="#000"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#000"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>}
</div>
          {!isLoading &&  <Videos videos={fetchVideo} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoDetails;
