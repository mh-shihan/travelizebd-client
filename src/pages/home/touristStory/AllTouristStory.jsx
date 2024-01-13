import Lottie from "lottie-react";
import SectionTitle from "../../../components/Sectiontitle";
import useLoadingAnimation from "../../../hooks/useLoadingAnimation";
import useTouristStory from "../../../hooks/useTouristStory";
import TouristStoryCard from "../../../components/TouristStoryCard";

const AllTouristStory = () => {
  const loadingAnimation = useLoadingAnimation();
  const [touristStories, isLoading] = useTouristStory();
  return (
    <div className="pt-20 max-w-7xl mx-auto px-1">
      <SectionTitle
        heading="Happy Tourist"
        subheading="Read some"
      ></SectionTitle>
      <div className="bg-[#f6f8f9] p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {isLoading && <Lottie animationData={loadingAnimation}></Lottie>}
          {touristStories.map((touristStory) => (
            <TouristStoryCard
              key={touristStory._id}
              touristStory={touristStory}
            ></TouristStoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTouristStory;
