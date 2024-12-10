import { LOGO_URL } from "../utilis/constants"; 
import { useState } from "react";
const Header = ()=>{
    const [btnNameReact, setNameReact] = useState("login");
    // let btnName = "Login";
    return(
        <div className="header">
           <div className="logo">
            <img alt="" src={LOGO_URL}/>
           </div>
           <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>cart</li>
                <button className="login"
                onClick={
                    ()=>{
                        if(btnNameReact == "login")
                        setNameReact("logout")   
                        else
                         setNameReact("login")
                    }}
                >{btnNameReact}</button>
            </ul>
           </div>
        </div>
    )
}

export default Header;