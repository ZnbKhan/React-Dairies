# Episode-6 Explore The World:

- Monolith and Microservice Architecture
  Monolith 
   |---------------------|
   | API, UI, AUTH, DB   |   
   | SMS                 |
   |---------------------| 

   -- All are written in same same file and if their is any update then we need to depoly the whole  app.

   Microservices
   ----  ----  ---  ----  ---
   API   AUTH  DB   SMS   UI

   These small services combine together to form a full app.
   `seperation of concerns and single responsibility project`