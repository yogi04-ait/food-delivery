// import { addItem, removeItem } from "../utils/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_CDN } from "../../constants";
import { useState } from "react";
import { addItem, removeItem } from "./cartSlice";
import { useDispatch } from "react-redux";

const MenuItem = ({ item }) => {
  const { id, name, description, price, imageId } = item;
  const dispatch = useDispatch();


  const [itemCount, setItemCount] = useState(0);

  const handleAddItem = (item) => {
    setItemCount(itemCount + 1);
    dispatch(addItem(item));
    console.log(item);
  };

  const handleRemoveItem = (id) => {
    if(itemCount > 0 ){
      setItemCount(itemCount-1);
      dispatch(removeItem(id))
    }
    
  };

  return (
    <div
      className="flex justify-between p-5 border-b border-gray"
      key={id}
    >
      <div className="flex flex-col ">
        <h3 className="font-normal m-1 block text-lg w-3/5">{name}</h3>
        <p className="mt-1 m-1 text-base font-normal">
          {price > 0 ? "₹ " + item?.price / 100 : " "}{" "}
        </p>
        <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-sm overflow-hidden text-ellipsis mb-1 m-1 block">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        {imageId && (
          <img
            className="w-[110px] h-[103px] rounded-md"
            src={ITEM_IMG_CDN + imageId}
            alt={item?.name}
          />
        )}
        <div className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray rounded-md relative bottom-8">
          <button
            className="text-xl text-gray-count font-semibold rounded-sm"
            onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-base text-green"> {itemCount} </span>
          <button
            className="text-green text-xl"
            onClick={() => handleAddItem(item)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
