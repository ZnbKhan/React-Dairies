/** 
   nesting in react
    <div id="parent">
      <div id="child">
        <h1></h1>
      </div
    </div>  
    
    ReactElement(object) => HTML(Browser Understands);
    siblings == make array of children

**/

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    React.createElement(
        "div", 
        {id:"child"}, 
        [
            React.createElement(
            "h1", 
            {}, 
            "Hii I am h1 tag",
            ),
            React.createElement("h2",
            {},
            "Hii I am h2 tag"
           )
            
        ]

        )
    )

    // JSX exist


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    console.log(parent);
    
// root.render(parent)

// const heading = React.createElement(
//       "h1",
//      {id:"heading"}, 
//      "Hello World from React inside it"
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading)

