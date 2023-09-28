import ResturantCard from "./ResturantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Need to filter data
            const data = filterData(searchTxt, restaurants);

            //  Set filtered data
            setRestaurants(data);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="resturant-list">
        {restaurants.map((restaurant) => {
          return (
            <ResturantCard key={restaurant?.data?.id} {...restaurant?.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
