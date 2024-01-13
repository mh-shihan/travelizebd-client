import Lottie from "lottie-react";
import SectionTitle from "../../../components/Sectiontitle";
import TouristStoryCard from "../../../components/TouristStoryCard";
import useLoadingAnimation from "../../../hooks/useLoadingAnimation";
import useTouristStory from "../../../hooks/useTouristStory";

const TouristStory = () => {
  const loadingAnimation = useLoadingAnimation();
  const [touristStories, isLoading] = useTouristStory();
  return (
    <div className="pt-20">
      <SectionTitle
        heading="Happy Tourist"
        subheading="Read some"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#f6f8f9] p-10">
        {isLoading && <Lottie animationData={loadingAnimation}></Lottie>}
        {touristStories.slice(0, 4).map((touristStory) => (
          <TouristStoryCard
            key={touristStory._id}
            touristStory={touristStory}
          ></TouristStoryCard>
        ))}
      </div>
    </div>
  );
};

export default TouristStory;
