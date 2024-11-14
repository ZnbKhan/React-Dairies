import React from "react"
import ReactDOM from "react-dom/client";

// React Element === DOM Elemnts (h1, body, div, ....)
// const heading = React.createElement("h1", {id:"heading"}, children of heading ) -- this is how we create react elment
// React elment is object when we render this on dom then it becomes a html elment

// rendering elment
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

// JSX -- Javascript Syntax (jsx and react is seperate from each other)
// jsx is not  html inside js
// it is html like syntax it looks like html, xml
// jsx is just a syntax  
// jsx (transpile via (parcel-babel) before it reaches to the jsx engine bcz js engine only understands ecmascripts)
// React.createElemnt ==> React Elemnt(objects) ==> HTML elemnt when render
// jsx ==> React.createElments ==> React Elmnt(objects) ==> HTML elmnts when renderd
// babel is converting jsx to react.create elmnt (babel comes with parcel)

const heading = React.createElement("h1", {className:"head"}, "Nmaste from React create elment");

const hsxHeading = <h1 id="heading" className="head">Namste React using JSX</h1>


// React Component -- Everything in react is component
// 1. class based component (old way)
// 2. functional component (new way)

// React functional components -- just a normal js function, return some pcs of jsx.
// whenever write a functional component write name in UpperCase
// rendering Component -- 
// render elemnt -- root.render(Heading)
// render component -- root.render(<Heading />) 
// Component composition -- compositioning one component in another component

// React Elemnt
const heding  = (<h1>Namste from react elemnt</h1>);

// React Component
const Heading = ()=>{
    return <h1>Nmaste React from Component</h1>
}

const Headings = () => <h1>Namste React from component </h1>

const Headingss = () => (
<h1>Namste React from compone</h1>
);
// All three are same

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />)
