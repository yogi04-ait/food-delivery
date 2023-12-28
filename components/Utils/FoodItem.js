import { IMG_CDN_URL } from "../../constants"
const FoodItem = ({name, imageId, price}) =>{
return(
    <div className="flex max-w-6xl text-sm">
        <img className="w-24" src={IMG_CDN_URL+imageId}/>
        <h2 className="font-bold text-xl"></h2>
        <h4>Rupees: {price/100}</h4>
    </div>

)
}

export default FoodItem