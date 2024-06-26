import { useState } from "react";
import CakeComponent from "../components/CakeComponent.jsx";


const CakeContainer = () => {

    const [cakeArr, setCakeArr] = useState([
        {
            cakeName: "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter",
                "sugar",
                    "self-raising flour",
                "baking powder",
                "milk"
            ],
            price: 5,
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: [
                "eggs",
                "oil",
                "dried fruit",
                    "sugar",
                "self-raising flour",
                "strong tea",
            ],
            price: 2,
            rating: 3
        },
        {
            cakeName: "Carrot Cake",
            ingredients: [
                    "carrots",
                    "walnuts",
                "oil",
                    "cream cheese",
                    "flour",
                "sugar",
            ],
            price: 8,
            rating: 5
        }
    ])

    const [victoriaSpongeObj,teaLoafObj,carrotCakeObj] = cakeArr

    console.log(victoriaSpongeObj);
    return (
        <>
            <CakeComponent name={victoriaSpongeObj.cakeName} ingredients = {victoriaSpongeObj.ingredients} price={victoriaSpongeObj.price} rating={victoriaSpongeObj.rating}/>
            <CakeComponent name={teaLoafObj.cakeName} ingredients = {teaLoafObj.ingredients} price={teaLoafObj.price} rating={teaLoafObj.rating}/>
            <CakeComponent name={carrotCakeObj.cakeName} ingredients = {carrotCakeObj.ingredients} price={carrotCakeObj.price} rating={carrotCakeObj.rating}/>
            
        </>
    )

}

export default CakeContainer;