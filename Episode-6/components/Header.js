import { LOGO_URL } from "../utilis/constants"; 

const Header = ()=>{
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
            </ul>
           </div>
        </div>
    )
}

export default Header;