import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
  swiggy_menu_api_URL,
} from "../constants";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const { resid } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(swiggy_menu_api_URL + resid);

      const json = await data.json();

      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;

      setRestaurant(restaurantData);
      console.log(restaurant);
    } catch (error) {
      setRestaurant(null);
      console.log(error);
    }
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="Resturant-menu">
      <div className="Res-details">
        <div className="Res-det">
          <p className="Res_name">{restaurant?.name}</p>
          <p className="Res_cusi">{restaurant?.cuisines?.join(", ")}</p>
          <p className="Res_area">{restaurant?.areaName}</p>
        </div>

        <button className="ResRating">
          <span className="ResAvgRating">
            <i className="fa-solid fa-star"></i>
            {restaurant?.avgRatingString}
          </span>
          <hr className="hr" />
          <span className="Res_ToalRating">
            {restaurant?.totalRatingsString}
          </span>
        </button>
      </div>
      <hr className="Line" />
      <div className="ResHeader">
        <span>
          <span className="Rupee">₹</span>
          {restaurant?.costForTwoMessage}
        </span>
      </div>
    </div>
  );
};

export default RestaurantMenu;
