import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="/>
            </div>

            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    {/* <li>Contact Us</li> */}
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const resList = [
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "967785",
"name": "Baap Of Rolls",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/3/d86f3460-69a0-4e97-97e2-0a6cad6ea35b_967785.jpg",
"locality": "Greater Noida",
"areaName": "Greater Noida",
"costForTwo": "₹199 for two",
"cuisines": [
"Beverages",
"Snacks"
],
"avgRating": 4.1,
"parentId": "14310",
"avgRatingString": "4.1",
"totalRatingsString": "45",
"promoted": true,
"adTrackingId": "cid=21243530~p=0~adgrpid=21243530#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=967785~eid=8ea2bdb1-3108-4ab0-9165-798f4d822fc5~srvts=1731606311851~collid=83645",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 1,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "1.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-11-15 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
"freedelMessage": "FREE DELIVERY",
"badgeType": "BADGE_TYPE_ONE_LITE"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "21243530"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=967785&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "965316",
"name": "HANDI PUNJAB DI",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/28/1885b9d1-09a5-46b8-8884-73ed1a6df5d4_965316.JPG",
"locality": "Greater Noida",
"areaName": "Greater Noida",
"costForTwo": "₹500 for two",
"cuisines": [
"Chinese"
],
"avgRating": 4.5,
"parentId": "14160",
"avgRatingString": "4.5",
"totalRatingsString": "31",
"promoted": true,
"adTrackingId": "cid=21294276~p=1~adgrpid=21294276#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=965316~eid=ceef1035-5ce7-4d98-88c6-439af3866d89~srvts=1731606311851~collid=83645",
"sla": {
"deliveryTime": 42,
"lastMileTravel": 1.2,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "1.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-11-14 23:58:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
"freedelMessage": "FREE DELIVERY",
"badgeType": "BADGE_TYPE_ONE_LITE"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "21294276"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=965316&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "906703",
"name": "The Food Factory",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/8772caf1-4092-4e98-bb4b-ebad7edb5c52_906703.jpg",
"locality": "Beta I",
"areaName": "Greater Noida",
"costForTwo": "₹300 for two",
"cuisines": [
"Chinese",
"Beverages",
"Snacks"
],
"avgRating": 3.2,
"parentId": "7338",
"avgRatingString": "3.2",
"totalRatingsString": "13",
"promoted": true,
"adTrackingId": "cid=21335399~p=2~adgrpid=21335399#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=906703~eid=d21d8e9c-e538-423a-bc34-50e14ddf7d0d~srvts=1731606311851~collid=83645",
"sla": {
"deliveryTime": 37,
"lastMileTravel": 1,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "1.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-11-15 05:29:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "UPTO ₹40",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
"freedelMessage": "FREE DELIVERY",
"badgeType": "BADGE_TYPE_ONE_LITE"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "21335399"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=906703&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "507922",
"name": "Punjab Di Rasoi",
"cloudinaryImageId": "k1lo9zb0q5icxiqqqwjq",
"locality": "Delta 1",
"areaName": "Greater Noida",
"costForTwo": "₹199 for two",
"cuisines": [
"North Indian",
"Chinese",
"Indian",
"Continental"
],
"avgRating": 4.3,
"veg": true,
"parentId": "161981",
"avgRatingString": "4.3",
"totalRatingsString": "1.5K+",
"promoted": true,
"adTrackingId": "cid=21424072~p=3~adgrpid=21424072#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=507922~eid=b5a5e4d8-d905-4fc5-8cef-5fb901fe1efe~srvts=1731606311851~collid=83645",
"sla": {
"deliveryTime": 49,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-11-14 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
"freedelMessage": "FREE DELIVERY",
"badgeType": "BADGE_TYPE_ONE_LITE"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "21424072"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=507922&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "919117",
"name": "Bikaner Sweets & Snacks",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/03764255-af81-49b9-bae7-1a35da05e2a7_919117.JPG",
"locality": "Sector Alpha II",
"areaName": "Greater Noida",
"costForTwo": "₹300 for two",
"cuisines": [
"Sweets",
"Snacks"
],
"avgRating": 4.1,
"veg": true,
"parentId": "45899",
"avgRatingString": "4.1",
"totalRatingsString": "5",
"promoted": true,
"adTrackingId": "cid=21335571~p=4~adgrpid=21335571#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=919117~eid=6776f68d-8f89-4d79-a007-908e227db88f~srvts=1731606311851~collid=83645",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 1.9,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "1.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-11-14 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "UPTO ₹50",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
"freedelMessage": "FREE DELIVERY",
"badgeType": "BADGE_TYPE_ONE_LITE"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "21335571"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=919117&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "239613",
"name": "Behrouz Biryani",
"cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
"locality": "UPSIDC",
"areaName": "Surajpur Site 4",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"North Indian",
"Kebabs",
"Mughlai",
"Beverages",
"Desserts"
],
"avgRating": 4.2,
"parentId": "1803",
"avgRatingString": "4.2",
"totalRatingsString": "1.4K+",
"promoted": true,
"adTrackingId": "cid=21427452~p=5~adgrpid=21427452#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=239613~eid=277b5abe-c6bf-4c03-bbe4-7fc10cde70ac~srvts=1731606311851~collid=83645",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 4,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "4.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-11-14 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png",
"description": "Delivery!"
}
]
},
"select": true,
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹95",
"logoCtx": {
"text": "BENEFITS"
}
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
},
"freedelMessage": "FREE DELIVERY",
"badgeType": "BADGE_TYPE_ONE_LITE"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "21427452"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=239613&source=collection&query=North%20Indian",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
}
];

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">search</div>
           <div className="res-container">
             {/* restro card */}
             {
                resList.map((restaurant)=> ( <RestroCrad key={restaurant.card.card.info.id} resdata = {restaurant}/>))
             }
             
           </div>
        </div>
    )
}

const RestroCrad = (props)=>{
    const {resdata} = props;
    const {
        name, 
        cusinies, 
        cuisines,
        costForTwo,
        avgRating,
        cloudinaryImageId
    } = resdata?.card?.card?.info;
    
    return (
        <div className="res-card">
           <img 
           className="res-logo"
           alt="res-logo" 
           src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
           /> 
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{avgRating} Stars</h4>

        </div>
    )
}


const AppLayout = ()=>{
    return (
        <div className="app">
           <Header />
           <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)