const Shimmer = () => {
  return (
    <>
      {" "}
      <div className="flex relative  ml-[35%] mb-3 gap-1">
        <input
          type="text"
          placeholder="Search"
          className="outline-none p-2 w-[400px] rounded-xl border border-gray-300"
        />

        <button className="p-2 ml-1 bg-white border-none rounded-full hover:cursor-pointer">
          <i className="fa-solid fa-magnifying-glass hover:text-orange-600 "></i>
        </button>
      </div>
      <div className="flex flex-wrap w-[90%] mx-auto min-h-[65.5vh]">
        {Array(10)
          .fill("")
          .map((_e, index) => (
            <div
              key={index}
              className="min-w-[220px] max-w-[220px] min-h-[244px] bg-white flex flex-col m-2.5 space-y-2.5 transform transition-all duration-200 hover:scale-97 hover:cursor-pointer;
              "
            >
              <div
                className="w-full max-w-[213px] min-w-[213px] min-h-[135px] bg-slate-300 rounded-lg shadow-sm justify-around content-around"
                key={index + 100}
              ></div>
              <div
                className="min-w-[197px] max-w-[197px] min-h-[23px] bg-slate-200 rounded-md"
                key={index + 200}
              ></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
