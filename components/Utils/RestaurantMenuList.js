import React from "react";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantMenuList = ({ menu }) => {
  return (
    <div>
      <div>
        {Object.keys(menu).map((itemKey, index) => {
          return (
            <div key={index}>
              {menu[itemKey].categories ? (
                <RestaurantNestedItemCategory nestedCategory={menu[itemKey]} />
              ) : (
                <RestaurantItemCategory itemCategory={menu[itemKey]} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
