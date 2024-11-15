import RestroCard from "./RestroCard"
import resList from "../utilis/mockData";
import {useState} from  "react";

const Body = ()=>{
    const [listOfRestaurant, setListofRestaurant] = useState(resList);
   
    return (
        <div className="body" >
          <div className="filters">
            <button 
            className="filter-btn" 
            onClick =
            {
                ()=>{
                    // filter logic here 
                    const filterList = listOfRestaurant.filter((res)=>  res.card.card.info.avgRating >4);
                    setListofRestaurant(filterList)
                }
                
            }
            >Top Rated Restaurant</button>
          </div>

          <div className="res-container">
            {/* restr ocard */}
            {
              listOfRestaurant.map((restaurant)=>(<RestroCard key={restaurant.card.card.info.id} resdata = {restaurant}/>))
            }
          </div>
        </div>
    )
}

export default Body;