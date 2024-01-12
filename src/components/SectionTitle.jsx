const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="mt-24 mb-10">
      <h4 className="text-yellow text-xl text-center">-- {subheading} --</h4>
      <h2 className="text-gray mt-2 text-4xl font-extrabold text-center uppercase">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
