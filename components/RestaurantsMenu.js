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
    <div className="min-h-[73vh] w-3/5 mx-auto">
      <div className="flex justify-between pt-2 pb-5 pr-[2px] pl-[2px] ">
        <div className="Res-det">
          <p className="text-xl font-semibold text-gray-800 mb-2 capitalize">
            {restaurant?.name}
          </p>
          <p className="text-base text-gray-500 overflow-hidden mb-1 whitespace-nowrap">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <p className="text-base text-gray-500">{restaurant?.areaName}</p>
        </div>

        <button className="border border-gray-300 shadow-sm rounded-md text-center p-2 w-24 flex flex-col space-y-2.5 justify-between bg-white">
          <span className="text-green-600 flex justify-start space-x-1.5">
            <i className="fa-solid fa-star"></i>
            {restaurant?.avgRatingString}
          </span>
          <hr className="bg-gray-400 h-0.5 border-none outline-none" />

          <span className="text-xs text-gray-500 font-semibold">
            {restaurant?.totalRatingsString}
          </span>
        </button>
      </div>
      <hr className="border-b border-transparent border-dashed border-gray-300" />
      <div className="py-5 px-0.5 font-black text-gray-700">
        <span>
          <span className="mr-[10px] border border-black inline-flex items-center justify-center py-[0.2px] px-[8px] rounded-full w-auto text-center font-medium text-lg">
            ₹
          </span>
          {restaurant?.costForTwoMessage}
        </span>
      </div>
    </div>
  );
};

export default RestaurantMenu;
