import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = ()=>{

    const [listofRestaurant, setListofRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    // calling API using async await
    const fetchData = async ()=>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4713887&lng=77.5074813&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =  await data.json();
        console.log(json)  //data we got is object we need to have array so we can apply map on it 
        const restaurant = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurant);
        
        // checking whether I got an Array or not
        if(Array.isArray(restaurant)){
            setListofRestaurant(restaurant);
        }else{
            console.log("Invalid DS: restuarant is not an array")
            setListofRestaurant([]);
        }
        
        }catch(err){
           console.error("Failed to fetch data:", err);
        }
    }
    

    // shimmer Ui
    if(listofRestaurant.length === 0)
        return <Shimmer />

    return(
      <div className="body">
        <div className="filters">
            <button 
            className="filter-btn" 
            onClick={()=>{
                const filterList = listofRestaurant.filter((res)=> res?.info?.avgRating >4)
                setListofRestaurant(filterList)
            }}
            >
            Top Rated Restaurant
            </button>
        </div>

        <div className="res-container">
            {
                listofRestaurant.map((res)=>(<RestroCard key={res?.info?.id} resdata={res}/>))
            }
        </div>
      </div>
    )
}

export default Body;