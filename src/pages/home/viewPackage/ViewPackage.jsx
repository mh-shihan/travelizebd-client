import { useLoaderData } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
import ViewPackageCard from "./ViewPackageCard";
import Accordion from "./Accordion";
import BookingForm from "./BookingForm";
import SectionTitle from "../../../components/Sectiontitle";

const ViewPackage = () => {
  const viewPackage = useLoaderData();
  const { photo, price, title, type, gallery, dayOne, dayTwo } = viewPackage;

  //   console.log(viewPackage);
  const photos = gallery.map((photo) => ({
    src: photo,
    width: 600,
    height: 400,
  }));
  return (
    <div className="max-w-7xl mx-auto px-1 py-10">
      <SectionTitle
        heading={`${title}`}
        subheading="View Details"
      ></SectionTitle>
      <div className="bg-[#f6f8f9] p-10">
        <PhotoAlbum layout="rows" photos={photos} />
        <div className="mt-10">
          <ViewPackageCard viewPackage={viewPackage}></ViewPackageCard>
        </div>
        <Accordion viewPackage={viewPackage}></Accordion>
      </div>
      <div>
        <SectionTitle heading="Book Now" subheading="Hurry up"></SectionTitle>
        <BookingForm viewPackage={viewPackage}></BookingForm>
      </div>
      {/* TODO: Tour guide profile page */}
    </div>
  );
};

export default ViewPackage;
