import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/Sectiontitle";
import { CommentBoxTextarea } from "./CommentBoxTextarea";
import TextBox from "./TextBox";

const Contact = () => {
  return (
    <div data-aos="fade-left" className="max-w-7xl mx-auto px-1 pt-10">
      <Helmet>
        <title>TravelizeBD | Contact Us</title>
      </Helmet>
      <SectionTitle
        heading={"Contact Us"}
        subheading="Feel free to contact"
      ></SectionTitle>
      <div className="flex flex-col md:flex-row gap-4 shadow-lg p-4 mb-10">
        <div className="w-full md:w-2/5">
          <h2 className="text-3xl font-bold mb-4 text-dark-gray">
            Contact Info
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            We are thrilled to connect with you and assist in planning your
            unforgettable journey through Bangladesh. Whether you have questions
            about our tours, need assistance with booking, or simply want to
            share your travel dreams, our team is here for you.
          </p>
          <p className="text-gray-600 text-sm mb-4">
            If you prefer face-to-face interaction, feel free to visit our
            office. Our team will be delighted to meet you, discuss your travel
            plans, and ensure you have all the information you need.
          </p>
          <div className="text-gray-800">
            <p>The Company Name Inc.</p>
            <p>9870 St Vincent Place,</p>
          </div>
          <div className="text-sm text-gray-700">
            <p>Glasgow, DC 45 Fr 45.</p>
            <p>Telephone: +1 800 603 6035</p>
          </div>
          <p className="text-sm">
            <span>Email: </span>
            <a className="text-blue-600 hover:text-green-400 cursor-pointer">
              mail@travelizebd.com
            </a>
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-dark-gray">
            Contact Form
          </h2>
          <div>
            <TextBox></TextBox>
          </div>

          <div>
            <CommentBoxTextarea></CommentBoxTextarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
