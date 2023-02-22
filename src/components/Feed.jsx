import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { FetchApi } from "../utils/fetchApi";
import { Oval } from "react-loader-spinner";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, seterrMessage] = useState("");

  useEffect(() => {
    FetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        seterrMessage(err.message);
        console.log(err.message);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  return (
    <Fragment>
      <div className="container h-[95vh]">
        <div className="">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="">
          <div className="my-4 font-bold text-2xl">
            {selectedCategory} <span>Videos</span>
          </div>
          <div className="absolute top-[50%] right-[45%] lg:right-[50%]">{errMessage}</div>
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
          {!isLoading && <Videos videos={videos} />}
        </div>
      </div>
    </Fragment>
  );
};

export default Feed;
