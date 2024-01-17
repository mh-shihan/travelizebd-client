import SectionTitle from "../../components/Sectiontitle";
import AboutIconCollection from "./AboutIconCollection";
import about from "../../assets/about/about.jpg";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div className="pt-10 max-w-7xl mx-auto px-1">
      <Helmet>
        <title>TravelizeBD | About Us</title>
      </Helmet>
      <SectionTitle
        heading="About Us"
        subheading="Read about us"
      ></SectionTitle>
      <div
        data-aos="fade-left"
        className="flex flex-col-reverse lg:flex-row gap-10 mt-10"
      >
        <div>
          <h3 className="text-4xl text-gray font-extrabold mb-4">
            Welcome to TravelizeBD
          </h3>
          <h4 className="text-2xl text-gray font-medium mb-4">
            Explore the Beauty of Bangladesh with Us
          </h4>
          <p className="text-colo text-justify">
            At TravelizeBD, we believe that every journey is an opportunity for
            discovery, and Bangladesh, with its rich cultural tapestry and
            breathtaking landscapes, offers a myriad of experiences waiting to
            be explored. We are your gateway to unlocking the wonders of this
            incredible country.
          </p>
          <AboutIconCollection></AboutIconCollection>
          <button className="mt-10 btn bg-yellow  text text-base-100 px-8">
            Read More
          </button>
        </div>
        <img src={about} alt="" />
      </div>
    </div>
  );
};

export default About;
