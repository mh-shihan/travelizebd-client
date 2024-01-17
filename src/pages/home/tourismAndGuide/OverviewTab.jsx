import YouTube from "react-youtube";

const OverviewTab = () => {
  const videoId = "rDYdeq3JW_E";
  return (
    <div className="mt-10">
      <YouTube videoId={videoId}></YouTube>
    </div>
  );
};

export default OverviewTab;
