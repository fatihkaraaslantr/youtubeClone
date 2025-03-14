import React, { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import VideoCard from "../../components/VideoCard";

const Feed = () => {
  //!UseState
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(videos);

  //!url deki parametre
  const [params] = useSearchParams();
  const selectedCat = params.get("category");

  //!UseEffect APİ işlemleri
  useEffect(() => {
    const url = !selectedCat
      ? "/home"
      : selectedCat === "trending"
      ? "/trending"
      : `/search?query=${selectedCat} `;

    //api istek at
    api
      .get(url)
      .then((res) => setVideos(res.data.contents))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCat]);

  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar selectedCat={selectedCat} />
      {/* videos */}
      <div className="videos">
        {isLoading ? (
          <h1> yükleniyor</h1>
        ) : error ? (
          <h1>hataa</h1>
        ) : (
          videos.map(
            (video, key) =>
              video.type === "video" && (
                <VideoCard key={key} data={video.video} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
