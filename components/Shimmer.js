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
              className="min-w-[220px] max-w-[220px] min-h-[244px] bg-white flex flex-col m-2.5 space-y-2.5 transform transition-all duration-200 hover:scale-97 animate-pulse hover:cursor-pointer
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



export const MenuShimmer = () => {
  return (
    <div className="container animate-pulse">
      <div className="flex basis-full h-60 justify-evenly items-center p-8 bg-gray ">
        <img className="h-[144px] w-[230px] bg-bio " />
        <div className="flex flex-col basis-[540px] m-5">
          <h2 className="shimmer-w40"></h2>
          <p className="shimmer-w20"></p>
          <div className="shimmer-w60"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-7 w-[848px]">
          <div className="p-5">
            <h3 className="shimmer-w40"></h3>
            <p className="shimmer-w20"></p>
          </div>
          <div className="menu-items-list  flex flex-col justify-evenly">
            {Array(30)
              .fill("")
              .map((_e, index) => (
                <div
                  className="flex justify-evenly w-[848px] p-2.5 mb-2.5 shadow animate-pulse"
                  key={index}
                >
                  <div className="w-[438px]">
                    <h3 className="shimmer-w40"></h3>
                    <p className="shimmer-w20"> </p>
                    <p className="shimmer-w60"></p>
                  </div>
                  <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                    <img className="w-[118px] h-[96px] bg-bio" />
                    <div className="w-[94px] h-[34px] mt-2.5 bg-bio"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="cart-widget"></div>
      </div>
    </div>
  );
};

export default Shimmer;
