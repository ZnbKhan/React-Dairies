import RestroCard from "./RestroCard";
import { useState } from "react";
import resList from "../utilis/mockData";
import RestroCard from "./RestroCard";

const Body = ()=>{

    const [listofRestaurant, setListofRestaurant] = useState(resList);
    return(
      <div className="body">
        <div className="filters">
            <button 
            className="filter-btn" 
            onClick={()=>{
                const filterList = listofRestaurant.filter((res)=> res.card.card.info.avgRating >4)
                setListofRestaurant(filterList)
            }}
            >
            Top Rated Restaurant
            </button>
        </div>

        <div className="res-container">
            {
                listofRestaurant.map((restaurant)=>(<RestroCard key={restaurant.card.card.info.id} resdata={restaurant}/>))
            }
        </div>
      </div>
    )
}

export default Body;