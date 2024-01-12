import PackageCard from "../../components/PackageCard";
import SectionTitle from "../../components/Sectiontitle";
import useAllPackages from "../../hooks/useAllPackages";

const AllPackages = () => {
  const [allPackages, isLoading] = useAllPackages();

  return (
    <div className="pt-10 max-w-7xl mx-auto px-1">
      <SectionTitle heading="All Packages" subheading="See All"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-10">
        {allPackages.map((allPackage) => (
          <PackageCard
            key={allPackage._id}
            tourPackage={allPackage}
          ></PackageCard>
        ))}
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg text-center text-2xl"></span>
        </div>
      )}
    </div>
  );
};

export default AllPackages;
