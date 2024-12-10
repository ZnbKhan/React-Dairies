import RestroCard from "./RestroCard";
import {useState, useEffect} from "react";
const Body = ()=>{

    const [listofRestaurant, setListofRestaurant] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [serachText, setSearchText] = useState("");
    // calling API 
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
      try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4713887&lng=77.5074813&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurant = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if(Array.isArray(restaurant)){
            setListofRestaurant(restaurant);
            setFilterRestaurant(restaurant);
        }
        
      }catch(err){
        console.log("Failed to fetch data:", err)
        setListofRestaurant([]);
        setFilterRestaurant([]);
      }
    }

    return (
        <>
        <div className="body">
         <div className="filters">
          <div className="serach-bar">
             <input type="text" value={serachText} onChange={(e)=>{setSearchText(e.target.value)}}/>
             <button onClick={()=>{
              // logic for filter on basis of name
              const FilteredList = listofRestaurant.filter((res)=> res?.info?.name.toLowerCase().includes(serachText.toLowerCase()));
              setSearchText(" ");
              setFilterRestaurant(FilteredList);
             }}>serach</button>
          </div>
          <button
          className="filter-btn"
          onClick={()=>{
            const filterList = listofRestaurant.filter((res)=> res.info.avgRating >4)
            setFilterRestaurant(filterList);
          }}
          >Top Rated Restaurant</button>
         </div>

         <div className="res-container">
            {
              filterRestaurant.map((restaurant)=>(<RestroCard key={restaurant.info.id} resdata = {restaurant}/>))
            }
         </div>
        </div>
        </>
    )
}

export default Body;