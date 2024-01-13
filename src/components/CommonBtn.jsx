const CommonBtn = ({ btnTitle }) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <button className="btn btn-outline bg-yellow border-yellow text-lg  text-base-100">
        {btnTitle}
      </button>
    </div>
  );
};

export default CommonBtn;
