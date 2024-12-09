# Episode-6 Explore The World:

- Monolith and Microservice Architecture
  Monolith 
   |---------------------|
   | API, UI, AUTH, DB   |   
   | SMS                 |
   |---------------------| 

   -- All are written in same same file and if their is any update then we need to depoly the whole  app

  Microservices
   ----  ----  ---  ----  ---
   API   AUTH  DB   SMS   UI

   These small services combine together to form a full app.
   `seperation of concerns and single responsibility project`

# HOW THESE SERVICES INTEREACT WITH EACH OTHER:
 - All these services talk o each other via `API`

   We have different ports where different services are being depolyed.
   1. :1234 -- UI
   2. :1000 -- BE
   3. :3000 -- SMS

<!-- ########################################################################################## -->
# PART-2  13:13
 - There are 2 ways to call api
  1. App Loads --> API Call(takes 5ms) --> Render UI  -- (Poor UX)
  2. App Loads --> Reder UI --> API calls --> Render UI (always using this this is better approach, gives better UX) see a seklton of app then data loads


<!-- ########################################################################################### -->
# PART-3 20:50  
- useEffect Hook
  `It's a normal js utlity function`
  imported as a named import from react
  it takes two arguments
   1. call back function -- it is being called after components renders
   2. Dependency Array

  If you want something that is being implemented after the page rendered then use, `useEffect`.
  `useEffect(()=>{}, [])` 


  How to by pass cors
   use browser CORS 


    <script type="module" src="./src/App.js"></script> 
     type module helps to acess ES6 features like export and import so we should add type as module when we want to use ES6 features.


# PART-4
 `shimmer Ui` resemble the actual UI

# PART-5
 
