# LAYING THE FOUNDATION

# PART-1
Excution Command -- npx parcel index.html (create a dev build for us and host is on local host)
we have diffrent command for development and production
For Easement we can craete a script so we need not to write "npx parcel index.html" again and again

# HOW TO CREATE SCRIPT
 we can create script in package.json
 we can create script for starting a project in development mode and production mode as well

 in script (in package.json)
  use word "start":"parcel index.html"  -- this will start our project in development mode
   in cmd use -- npm run start or (npm start)

  use word "build":"parcel build index.html" -- this will build our project and open in production mode
   in cmd use -- npm run build

# PART-2
- React Element === DOM Elemnts (h1, body, div, ....)
- const heading = React.createElement("h1", {id:"heading"}, children of heading ) -- this is how we create react elment
- React elment is object when we render this on dom then it becomes a html elment

- rendering elment
- const root = ReactDOM.createRoot(document.getElementById("root"))
- root.render(heading);

# PART-3
- JSX -- Javascript Syntax (jsx and react is seperate from each other)
- jsx is not  html inside js
- it is html like syntax it looks like html, xml
- jsx is just a syntax  
- jsx (transpile via (parcel-babel) before it reaches to the jsx engine bcz js engine only understands ecmascripts)
- React.createElemnt ==> React Elemnt(objects) ==> HTML elemnt when render
- jsx ==> React.createElments ==> React Elmnt(objects) ==> HTML elmnts when renderd
- babel is converting jsx to react.create elmnt (babel comes with parcel)
- if you want to give attributes then write in camelCase
- single line `<h1> </h1>`  for multiple lines it is mandatory to use wrapper `()`



# PART-4  1:0:53
# React Component -- Everything in react is component
 - 1. class based component (old way)
 - 2. functional component (new way)

  React functional components -- just a normal js function, return some pcs of jsx.
  whenever write a functional component write name in UpperCase

# whenever write a functional component write name in UpperCase
  
# Rendering Component  
1. render elemnt -- root.render(Heading)
2. render component -- root.render(<Heading />) 

# Component composition -- compositioning one component in another component  

# PART-5 1:26:41






