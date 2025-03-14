import millify from "millify";
const VideoCard = ({ data }) => {
  console.log(data);

  const thumbnail = data.thumbnails[data.thumbnails.length - 1].url;

  return (
    <div>
      {/* resim */}
      <div>
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
          <div className="flex gap-3 items-center">
            {data.stats.views && (
              <p className="font-bold">
                <span>{millify(data.stats.views)}</span>
                <span className="pe-1"> Görüntülenme</span>*
              </p>
            )}

            {data.isLiveNow ? (
              <p className="bg-red-500 py-0.5 px-2 rounded-lg">Canlı</p>
            ) : (
              <p>
                <span>{data.publishedTimeText}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
