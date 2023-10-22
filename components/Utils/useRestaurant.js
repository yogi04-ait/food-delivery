import { swiggy_menu_api_URL } from "../../constants";
import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    try {
      // Live Data
      const response = await fetch(swiggy_menu_api_URL + resId);
      const res_data = await response.json();
      const menuItem =
        res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;

      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

      const nestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
      const menu = menuItem.map((item) => {
        if (
          item.card.card["@type"] === itemCategory ||
          item.card.card["@type"] === nestedItemCategory
        ) {
          return item?.card?.card;
        }
      });

      const modifiedData = {
        info: res_data?.data.cards[0]?.card?.card?.info,
        menu: menu.filter((value) => value != undefined),
      };

      setRestaurant(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  return restaurant;
};

export default useRestaurant;
