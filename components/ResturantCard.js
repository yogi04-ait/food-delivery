import { IMG_CDN_URL } from "../constants";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRatingString,
}) => {
  return (
    <div className="text-left max-w-[220px] min-w-[220px] m-2 hover:scale-95 transition-all duration-300 cursor-pointer ">
      <img
        className="rounded-xl shadow-sm  w-full content-around justify-around"
        src={IMG_CDN_URL + cloudinaryImageId}
      />

      <div className="text-gray-600 font-light p-2 leading-snug ">
        <h3 className="text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap pb-1 font-semibold">
          {name}
        </h3>
        <h4 className="flex gap-1">
          <span className="bg-green-600 rounded-full p-1.5 text-xs flex items-center justify-center text-white">
            <i class="fa-solid fa-star"></i>
          </span>
          {avgRatingString}
        </h4>
        <p className="whitespace-nowrap text-ellipsis overflow-hidden ">
          {cuisines?.join(", ")}
        </p>
        <p className="whitespace-nowrap text-ellipsis overflow-hidden ">
          <i className="fa-solid fa-location-pin orange-600 text-sm"></i>{" "}
          {areaName}
        </p>
      </div>
    </div>
  );
};

export default ResturantCard;
