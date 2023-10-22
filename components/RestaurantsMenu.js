import { useParams } from "react-router-dom";
import useRestaurant from "./Utils/useRestaurant";
import RestaurantInfo from "./Utils/RestaurantInfo";
import RestaurantMenuList from "./Utils/RestaurantMenuList";
import { MenuShimmer } from "./Shimmer";
// import RestaurantMenuList from "./Utils.js/RestaurantMenuList";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Reading dynamic URL params
  const data = useRestaurant(resId);

  return !data ? (
    <MenuShimmer />
  ) : (
    <div className="min-h-[65.5vh] max-w-4xl m-auto">
      <RestaurantInfo {...data.info} />
      <RestaurantMenuList menu={data.menu} />
    </div>
  );
};

export default RestaurantMenu;
