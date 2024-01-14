const Accordion = ({ viewPackage }) => {
  const { dayOne, dayTwo } = viewPackage;
  return (
    <div className="mt-10  p-4">
      <div className="collapse collapse-arrow  mb-4 bg-base-300">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">{dayOne.title}</div>
        <div className="collapse-content">
          <p>{dayOne.description}</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-300 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">{dayTwo.title}</div>
        <div className="collapse-content">
          <p>{dayTwo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
