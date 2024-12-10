import {CDN_URL} from "../utilis/constants"
const RestroCard = (props)=>{
    const {resdata} = props;
    console.log(resdata)
    const{
        cloudinaryImageId,
        name,
        costForTwo,
        cusinies,
        avgRating
    } = resdata?.info;
    return (
        <>
         <div className="res-card">
            <img 
            className="res-logo"
            alt="res logo" 
            src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cusinies}</h4>
            <h4>{avgRating}</h4>
         </div>
        </>
    )
}

export default RestroCard;