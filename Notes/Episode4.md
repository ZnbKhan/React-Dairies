# CODE IS CHEAP SHOW ME A CODE

BUILDING Food Ordering App
1. Planning
  Eaxct look of App -- UI Mock
  name -- Bites

  COMPONENTS
   Header
     logo
   links
     Home
     About
     Cart
     SignUp/SignIn

  Body
  serachbar -- for serach restro
    restro cards (container)
      image
      title
      star rating
      cusinies
      price for 2
      delivery time

  Footer
     copyright
       some links 
       Adress
       content    

- style attributes -- inline css
  in react style is in form of js object
  const styleCard = {
    backgroundColor: "yellow";
  }`   

  we can pass as attribute `style={styleCard}` 
  or we can write whole css in thei `style = {{backgroundColor:"red"}}` 

Maked a card added styles to it

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


const Body = ()=>{
    return (
        <div className="body">
            <div className="search">search</div>
           <div className="res-container">
             {/* restro card */}
             <RestroCrad />
             <RestroCrad />
           </div>
        </div>
    )
}

const RestroCrad = ()=>{
    return (
        <div className="res-card">
           <img 
           className="res-logo"
           alt="res-logo" 
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6aa38b251b1ee1662961a6dc19e41e95"
           /> 
          <h3>Zauk Biryani</h3>
          <h4>Biryani, North Indian, asian</h4>
          <h4>4.4</h4>
          <h4>38 minutes</h4>

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


# PART 2  59:22
 Making cards dynamic

 # PROPS -- 
 Props called properties that is passed to the component
 props are just normal argument to the function

 const Body = ()=>{
    return (
        <div className="body">
            <div className="search">search</div>
           <div className="res-container">
             {/* restro card */}
             <RestroCrad 
             resName="Zauk Birayni"
             cusinie="North Indian, Biryani, Asian"
             />

             <RestroCrad 
             resName="KFC"
             cusinie="Burger"
             />
             
           </div>
        </div>
    )
}


const RestroCrad = (props)=>{
    console.log(props);
    
    return (
        <div className="res-card">
           <img 
           className="res-logo"
           alt="res-logo" 
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6aa38b251b1ee1662961a6dc19e41e95"
           /> 
          <h3>{props.resName}</h3>
          <h4>{props.cusinie}</h4>
          <h4>4.4</h4>
          <h4>38 minutes</h4>

        </div>
    )
}


- we can also destructue 

 const RestroCrad = (props){
    const {resName, cusinies} = props;
    return (
       .... 
    )
  }

  const RestroCrad = ({resName, cusinie}){
    return (
       .... 
    )
  }

# config driven ui
  our website is driven by Ui
  controlling ui by data

  make an const res object 
  and pass that res object in restrocard as an attribute `<RestroCrad resdata = {resdata}/>`

Take the swiggy Live Api and make array Of List and iterate over that list using map.

Episode End here 



