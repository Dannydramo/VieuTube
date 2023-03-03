import React, { Fragment, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { FetchApi } from "../utils/fetchApi";
import Videos from "../components/Videos";
import { Oval } from "react-loader-spinner";
const VideoDetails = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState();
  const [fetchVideo, setFetchVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, seterrMessage] = useState("");

  useEffect(() => {
    FetchApi(`videos?part=snippet&id=${id}`)
      .then((data) => {
        setVideos(data?.items[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        seterrMessage(err.message);
        console.log(err.message);
        setIsLoading(false);
      });

    FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setFetchVideo(data?.items);
        setIsLoading(false);
      })
      .catch((err) => {
        seterrMessage(err.message);
        console.log(err.message);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Fragment>
      <div className="container">
        <div className="">
          <div className="md:w-full height-full w-[250px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="w-[10%]"
            />
            <h1>{videos?.snippet?.title}</h1>
            <Link to={`/channel/${videos?.snippet?.channelId}`}>
              <p>{videos?.snippet?.channelTitle}</p>
            </Link>
            <p>{videos?.snippet?.description.slice(0, 100)}</p>
          </div>
          <div className="absolute top-[50%] w-[50%] text-center right-[25%] ">
            {errMessage}
          </div>
          <div className="absolute top-[50%] right-[45%] lg:right-[50%]">
            {isLoading && (
              <Oval
                height={50}
                width={50}
                color="#000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#000"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            )}
          </div>
          <div className="grid_temp">
            {!isLoading && <Videos videos={fetchVideo} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoDetails;
