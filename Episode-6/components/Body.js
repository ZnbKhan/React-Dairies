import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = ()=>{

    const [listofRestaurant, setListofRestaurant] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);

    const [serachText, setSearchText] = useState("");

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
            setFilterRestaurant(restaurant);
        }else{
            console.log("Invalid DS: restuarant is not an array")
            setListofRestaurant([]);
        }
        
        }catch(err){
           console.error("Failed to fetch data:", err);
        }
    }
    

    // shimmer Ui
   return listofRestaurant.length === 0 ? (<Shimmer />):
   (
      <div className="body">

        <div className="filters">
            <div className="search">
                <input type="text" className="serach-box" value={serachText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                    // filter restaurant and and upadte ui
                    const filteredList = listofRestaurant.filter((res)=>res?.info?.name.toLowerCase().includes(serachText.toLowerCase()));
                    setSearchText(" ");
                    setFilterRestaurant(filteredList);
                  }}>search</button>
            </div>
            <button 
            className="filter-btn" 
            onClick={()=>{
                const filterList = listofRestaurant.filter((res)=> res?.info?.avgRating >4)
                setFilterRestaurant(filterList)
            }}
            >
            Top Rated Restaurant
            </button>
        </div>

        <div className="res-container">
            {
                filterRestaurant.map((res)=>(<RestroCard key={res?.info?.id} resdata={res}/>))
            }
        </div>
      </div>
    )
}

export default Body;