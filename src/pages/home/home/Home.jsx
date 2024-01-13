import SectionTitle from "../../../components/Sectiontitle";
import Banner from "../banner/Banner";
import TourTypes from "../tourTypes/TourTypes";
import TourismAndGuide from "../tourismAndGuide/TourismAndGuide";
import TouristStory from "../touristStory/TouristStory";

const Home = () => {
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>
      <main className="max-w-7xl mx-auto px-1">
        <section>
          <SectionTitle
            subheading="Guided Adventures"
            heading="Explore with Experts"
          ></SectionTitle>
          <TourismAndGuide></TourismAndGuide>
        </section>
        <section>
          <TourTypes></TourTypes>
        </section>
        <section>
          <TouristStory></TouristStory>
        </section>
      </main>
    </div>
  );
};

export default Home;
