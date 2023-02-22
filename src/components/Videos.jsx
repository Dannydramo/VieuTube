import { Fragment } from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <Fragment>
      <div className="grid_temp">
        {videos.map((item, idx) => (
          <div key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Videos;
