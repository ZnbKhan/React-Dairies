Here is the story I am telling about which is being taught in episode 1 that is inception.
Episode start with basic HTML Code

First Concept is Emmet -- Generate bunch of pre code for you

Second Concept is CDN i.e Content Delivery Network 
  Let me tell you about CDN when your website having Global reach and tries to serve content across globe so, faster delivery of content and services, CDN keeps local copy of content nearer to it's consumer.

Third Concept about cross-origin
  when we want to use resources of other domain then we add crossorigin in our script -- as we add cdn link of react then in script tag there is a cdn link there is cross-origin.
      src="https://unpkg.com/react@18/umd/react.development.js"> 

Fourth Concept we learn about how create elment in react and how we append in the root
   const heading = React.creatElement() -- take three argument 
   first -- tag you want to creat
   second -- {} for adding attributes
   third -- content ar child we want to add
 
  const heading = React.createElement("h1", {id: "heading"}, "Hii I am heading");

  when we want to add many children then  -- create array of elments   
  <div id="parent">
   <div id="child">
    <h1 id="h1">Hii I am h1</h1>
    <h2 id="h2">Hii I am h2</h2>
   </div>
  </div>
  const heading = React.createElement(
    "div", 
    {id:"parent"},
    React.createElement(
        "div",
        {id: "child"}
        [
        React.createElement(
          "h1",
          {id:"h1"},
          "Hello From h1"  
        ),

        React.createElement(
           "h2",
           {id:"h2"},
           "Hello From h2" 
        )
        ])
     )


  when we want to make siblings then add pass siblings as array of elments.


Then I learn about react.render and create root element and appending elemnt in root

Episode 1 Ends with react is a library we can add react in smaller part in a big project
and when we add something in div id, root then we add something in that div that is being replaced by existing code by the react code.

We can add content on before and after the div that is being seen as it is on page.


//That's all Happy Learning with zainy !!

  
   