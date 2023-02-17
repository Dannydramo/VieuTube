import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { FetchApi } from "../utils/fetchApi";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    FetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0]).catch(err => console.log(err.message))
    );
  }, [id]);

  useEffect(() => {
    FetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideo(data?.items)
    );
  }, [id]);

  return (
    <Fragment>
      <div className="container">
        <div className="md:w-[40%]">
          <img
            src={channel?.snippet?.thumbnails?.default?.url}
            alt=""
            className="h-[100px] w-[100px] rounded-[50%]"
          />
          <h6 className="my-1 font-bold">{channel?.snippet?.title}</h6>
          <h6 className="my-1 font-bold">{channel?.snippet?.description}</h6>
          {channel?.statistics?.subscriberCount && (
            <p className="mb-4">
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
              Subscribers
            </p>
          )}
        </div>
        <div className="grid_temp">
          {video.map((videos) => (
            <div>
              <Link
                to={videos?.id?.videoId ? `/video/${videos?.id?.videoId}` : ""}
              >
                <div className="">
                  <img
                    src={videos?.snippet?.thumbnails?.high?.url}
                    alt={videos?.snippet?.title}
                    className="h-[300px] w-[100%] sm:w-[320px] rounded"
                  />
                </div>
              </Link>
              <Link
                to={videos?.id?.videoId ? `/video/${videos?.id?.videoId}` : ""}
              >
                <div className="p-2">
                  <h1 className="w-[40%] md:w-[100%]">
                    {videos?.snippet?.title}
                  </h1>
                </div>
              </Link>
              <Link
                to={
                  videos?.snippet?.channelId
                    ? `/channel/${videos?.snippet?.channelId}`
                    : ""
                }
              >
                <div className="p-2">
                  <h1 className="flex items-center">
                    {videos?.snippet?.channelTitle}{" "}
                    <FaCheck className="ml-3 w-2" />
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ChannelDetails;
