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
 - All these services talk o each other via API

   We have different ports where different services are being depolyed.
   :1234 -- UI
   :1000 -- BE
   :3000 -- SMS

<!-- ########################################################################################## -->
# PART-2  13:13
 - There are 2 ways to call api
  1. App Loads --> API Call(takes 5ms) --> Render UI  -- (Poor UX)
  2. App Loads --> Reder UI --> API calls --> Render UI (always using this this is better approach, gives better UX) see a seklton of app then data loads


<!-- ########################################################################################### -->
# PART-3 20:50  
- 


