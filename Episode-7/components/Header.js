import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";

const Header = ()=>{
    const [reactBtnName, setReactBtnName] = useState("login");
    return (
        <>
         <div className="header">
            <div className = "logo">
                <img src ={LOGO_URL}/>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <button 
                    className="login"
                    onClick={()=>{
                        reactBtnName === "login"?
                            setReactBtnName("logout"):
                           setReactBtnName("login")
                    }}
                    >{reactBtnName}</button>
                </ul>
            </div>
        </div>  
        
        </>
    )
}

export default Header;