import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import ChannelInfo from "../../components/ChannelInfo";

const Detail = () => {
  //searchParams kurulumu
  const [searchParams] = useSearchParams();

  //video state
  const [video, setVideo] = useState(null);

  //url deki v parametresinin karşılığı
  const id = searchParams.get("v");

  //!useEffect
  useEffect(() => {
    api.get(`/video/details/?id=${id}`).then((res) => setVideo(res.data));
  }, []);

  return (
    <div className="detail-page h-screen overflow-auto">
      <div className="page-content">
        {/* video içeriği */}
        <div>
          {/* video */}
          <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height={"100%"}
              width={"100%"}
              controls
            />
          </div>
          {/* info */}
          <div>
            {/* title */}
            <h1 className="my-3 text-xl font-bold line-clamp-2">
              {video?.title}
            </h1>
            {/* channel */}
            <ChannelInfo id={video?.author.channelId} />
          </div>
        </div>
        {/* önerilen videolar */}
        <div className="bg-yellow-300">
          <h1>önerilen videolar</h1>
        </div>
      </div>
    </div>
  );
};

export default Detail;
