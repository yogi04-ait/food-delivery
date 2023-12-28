import { UseSelector, useSelector } from "react-redux";
import FoodItem from "./Utils/FoodItem";
const Cart = ()=>{
    const cartItem = useSelector((store)=>store.cart.items)
    return (
        <>
        <h1>cart items : {cartItem.length}</h1>
        <div className="flex flex-wrap gap-2 ">
        {cartItem.map(item => <FoodItem key={item.id} {...item}/>)}
        </div>
        </>
    )
}

export default Cart;