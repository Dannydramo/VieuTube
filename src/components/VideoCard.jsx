import { Fragment } from "react"
import { Link } from "react-router-dom"
import {FaCheck} from 'react-icons/fa'

const VideoCard =({video : { id: {videoId}, snippet}}) =>{
    return(
        <Fragment>
            <div className="">
                <Link to={videoId ? `/video/${videoId}`: ''} >
                    <div className="">
                        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title}  className="h-[300px] w-[100%] sm:w-[320px] rounded"/>
                       
                    </div>
                </Link>
                <Link to={videoId ? `/video/${videoId}`: ''} >
                    <div className="p-2">
                       <h1>{snippet?.title}</h1>
                       
                    </div>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: ''} >
                    <div className="p-2">
                       <h1 className="flex items-center">{snippet?.channelTitle} <FaCheck className="ml-3 w-2" /></h1>
                       
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default VideoCard