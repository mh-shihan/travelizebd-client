import PackageCard from "../../../components/PackageCard";
import SectionTitle from "../../../components/Sectiontitle";

const FilteredTourPackages = ({ items, type }) => {
  return (
    <div className="max-w-7xl mx-auto px-1 pt-10">
      <SectionTitle
        heading={`${type} Tour`}
        subheading="Choose Now"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items?.map((item) => (
          <PackageCard key={item._id} tourPackage={item}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default FilteredTourPackages;
