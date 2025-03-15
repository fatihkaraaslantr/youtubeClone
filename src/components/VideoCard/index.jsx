import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";
const VideoCard = ({ data }) => {
  //video resmi state'i
  const [isHover, setIsHover] = useState(false);

  console.log(data);

  //video card hover olunursa..
  const thumbnail =
    isHover && data.movingThumbnails
      ? data.movingThumbnails[data.movingThumbnails.length - 1].url
      : data.thumbnails[data.thumbnails.length - 1].url;

  const movingThumbnails =
    data.movingThumbnails &&
    data.movingThumbnails[data.movingThumbnails.length - 1].url;

  return (
    //!video card yapısı
    <Link to={`/watch?v=${data.videoId}`} className="cursor-pointer">
      {/* resim */}
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          className="rounded-lg w-full h-full "
          src={thumbnail}
          alt="video-image"
        />
      </div>
      {/* detay */}
      <div className="mt-4 flex gap-4">
        <img
          className="size-14 rounded-full"
          src={data.author.avatar[0].url}
          alt="channel-picture"
        />
        <div>
          <h4 className="line-clamp-2 font-bold">{data.title}</h4>
          <p>{data.author.title}</p>
          <div className="flex gap-3 items-center mt-2">
            {data.stats.views && (
              <p className="font-bold">
                <span>{millify(data.stats.views)}</span>
                <span className="pe-1"> Görüntülenme</span>*
              </p>
            )}

            {data.isLiveNow ? (
              <p className="bg-red-500 py-0.5 px-2 rounded-lg mt-2">Canlı</p>
            ) : (
              <p>
                <span>{data.publishedTimeText}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
