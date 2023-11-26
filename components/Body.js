import ResturantCard from "./ResturantCard";
import { swiggy_api_URL } from "../constants";
import { useEffect, useState , useRef} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchTxt, ...restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  console.log(resFilterData);
  return resFilterData;
}
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const noOfclicks = useRef(0);
  console.log(noOfclicks.current);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex relative  ml-[35%] mb-3 gap-1">
        <input
          type="text"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          className="outline-none p-2 w-[400px] rounded-xl border border-gray-300"
        />

        <button
          className="p-2 ml-1 bg-white border-none rounded-full hover:cursor-pointer"
          onClick={() => {
            // Need to filter data
            const data = filterData(searchTxt, ...allRestaurants);
            
            //  Set filtered data
            setFilteredRestaurants(data);
          }}
        >
          <i className="fa-solid fa-magnifying-glass hover:text-orange-600 "></i>
        </button>
      </div>
      <div className="flex flex-wrap w-[90%] mx-auto min-h-[65.5vh] ">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <ResturantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
