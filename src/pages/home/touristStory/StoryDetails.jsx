import { useLoaderData } from "react-router-dom";
import TouristStoryCard from "../../../components/TouristStoryCard";
import SectionTitle from "../../../components/Sectiontitle";
import CommonBtn from "../../../components/CommonBtn";

const StoryDetails = () => {
  const storyDetail = useLoaderData();
  console.log(storyDetail);
  return (
    <div className="max-w-5xl mx-auto py-10 ">
      <SectionTitle
        heading={storyDetail.name}
        subheading="Story of"
      ></SectionTitle>
      <div className="bg-[#f6f8f9] px-10 mt-10 pb-10 pt-10 ">
        <TouristStoryCard touristStory={storyDetail}></TouristStoryCard>
        <CommonBtn btnTitle="Shear"></CommonBtn>
      </div>
    </div>
  );
};

export default StoryDetails;
