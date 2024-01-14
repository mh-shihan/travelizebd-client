import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/Sectiontitle";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { FaQuoteLeft, FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const StoryDetails = () => {
  const storyDetail = useLoaderData();
  console.log(storyDetail);
  const shareUrl = "https://www.facebook.com";
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto py-10 ">
      <SectionTitle
        heading={storyDetail.name}
        subheading="Story of"
      ></SectionTitle>
      <div className="bg-[#f6f8f9] px-10 mt-10 pb-10 pt-10 ">
        <div className="space-y-4 flex justify-center flex-col items-center mt-6 shadow-lg p-4 rounded-xl bg-white  ">
          <div className="relative">
            <img
              src={storyDetail.photo}
              className="h-40 w-40 rounded-full "
              alt="tourist-photo"
            />

            <FaQuoteLeft className="text-white text-xl font-extrabold bg-yellow rounded-full w-10 h-10 p-2 absolute top-1 left-28" />
          </div>

          <p className="text-slate-600  text-center">{storyDetail.story}</p>
          <h3 className="font-semibold flex gap-2">
            <FaUser /> Director of
            <span className="text-yellow">Travelism.com</span>
          </h3>
        </div>

        <div className="flex justify-center items-center gap-4 mt-10">
          <h2 className="text-xl text-gray font-medium">Share Now</h2>
          {user?.email ? (
            <button className="hover:transition-all hover:scale-125">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} round={true}></FacebookIcon>
              </FacebookShareButton>
            </button>
          ) : (
            <button disabled className="cursor-none">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} round={true}></FacebookIcon>
              </FacebookShareButton>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
