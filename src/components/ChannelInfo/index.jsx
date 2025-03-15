import { useEffect, useState } from "react";
import api from "../../utils/api";

const ChannelInfo = ({ id }) => {
  const [channelInfo, setChannelInfo] = useState(null);

  useEffect(() => {
    api.get(`/channel/details/?id=${id}`).then((res) => setChannelInfo(res));
  }, []);

  return (
    <div>
      <h1>channelınfo</h1>
    </div>
  );
};

export default ChannelInfo;
