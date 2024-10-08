import { formatDuration } from "../assets/formatDuration";
import { timeAgo } from "../assets/timeAgo";
import PropTypes from "prop-types"

function VideoCard({ video }) {
    return (
        <div className="w-full">
            <div className="relative mb-2 w-full pt-[56%]">
                <div className="absolute inset-0">
                    <img 
                    src={video?.thumbnail} 
                    alt={video?.title} 
                    className="h-full w-full rounded-xl"
                    />
                </div>
                <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                   {video && formatDuration(video?.duration)} 
                </span>
            </div>
            <div className="flex gap-2">
                <div className="h-10 w-10 shrink-0">
                    <img 
                    src={video?.ownerDetails?.avatar} 
                    alt={video?.ownerDetails?.username}
                    className="h-full w-full rounded-full object-cover" 
                    />
                </div>
                <div className="w-full">
                    <h6 className="mb-1 font-semibold">{video?.title}</h6>
                    <p className="text-sm text-gray-200">
                        {video?.ownerDetails?.username}
                    </p>                   
                    <span className="flex text-sm text-gray-200">
                        {video?.views} views · {timeAgo(video?.createdAt)}
                    </span>

                </div>
            </div>
        </div>
    )
}

VideoCard.propTypes = {
    video: PropTypes.object,
}

export default VideoCard;