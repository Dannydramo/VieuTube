import { Fragment } from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  return (
    <Fragment>
      <div className="">
        <Link to={`/channel/${channel?.id?.channelId}`}>
          <img
            src={channel?.snippet?.thumbnails?.high?.url}
            alt=""
            className="h-[180px] w-[180px] rounded-[50%]"
          />
          <h6 className="m-4 font-bold">{channel?.snippet?.title}</h6>
        </Link>
      </div>
    </Fragment>
  );
};

export default ChannelCard;
