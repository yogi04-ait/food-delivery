import { IMG_CDN_URL } from "../constants";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />

      <div className="details">
        <h3>{name}</h3>
        <h4>
          <span className="star">
            <i class="fa-solid fa-star"></i>
          </span>
          {avgRating}
        </h4>
        <p>{cuisines?.join(", ")}</p>
        <p>
          <i class="fa-solid fa-location-pin"></i> {areaName}
        </p>
      </div>
    </div>
  );
};

export default ResturantCard;
