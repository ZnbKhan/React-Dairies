import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import resList from "../utilis/mockData";
import RestroCard from "./RestroCard";

const Body = ()=>{

    const [listofRestaurant, setListofRestaurant] = useState(resList);

    useEffect(()=>{
        fetchData();
    }, []);

    // calling API using async await
    const fetchData = async ()=>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4713887&lng=77.5074813&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =  await data.json();
        console.log(json)
        }catch(err){
           console.error("Failed to fetch data:", err);
        }
    }
    

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