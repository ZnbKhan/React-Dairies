# LET'S GET HOOKED

- Everything react can we can do using HTML CSS JS
  React makes developer life easier

# PART-1
  - 

   Hard coded data should be seperate files like utils, config 
   and make file like constant.js

   Ways to Export/Import Data
    1. Default Export/Import - only one  file is imported/exported
       Default Import `not uses {}` -- `export default Component` and `import Component from path`
        
    2. Named Export/Import - more than one file is being imported/exported
       just put `export const CDN_URL` we can import `import {Component} from path`

       named imported is imported in `{}`


# PART-2  50:36
- HOOKS
  
  start work on button of top rated resturant 
  if rating is more than 4 then do filter

  Event Handlers
  Added a event listner onClick on a button 
  Onclick(()=>{}) -- takes an call back function

  1:01:48  very Important
  We have 2 layer
   1. UI layer
   2. Data Layer

  List of restaurant I chnanges using filter on list of restaurant, but my UI won't updated
  HOW D I UPADTE MY UI?

  React is fast and effiecient in DOM Manipulation
  Data layer and UI layer make consistent with each other.

  right now listOfRestaunrant is normal js variable
  `we should make super powerful react variable called a state variable`

  HOW WE CREATE STATE VARIBALE 
   For creating state variable we can use `HOOKS`
   `HOOKS`-- React Hook is a noraml js function which is given to us by the react 
   `HOOKS` -- Hooks are utility (just normal js function) function given by react to us.
   How to use -- we can import via named import
   
   Two impotant hooks are: (99% times use these hooks)
   1. useState()
   2. useEffect()

   `useState()` -- Generate super powerful variables in react
                   use to create state variable
                   changes the state of variable

                   create a variable
                   when we call a useState() - it's gives a state variable
                   `const [listOfRestaurant] = useState(we can pass default value here, like [], {}, null);` 
                   -- beaves like normal variable.
                   -- we can't modify this restaurant for modification we have second parameter in array call `setListofRestaurant()` used to update the list
                   this is same as `let listOfResstauarnt= [];`

                   whenever a state variable changes react will re-render the component.
                   
                   Core Logic of React -- Re rendring of component
  
# THEORY  01:45:11

- RECONCILIATION ALGORITHM (React Fiber)(came in Recat 16)
   React uses reconciliation algorithm 
   we have DOM (Like tree)

            res-container(15 restro-card)
            suppose ui chnages from filtering from 15 to 3 card
            react creates virtual DOM (reprsentaion of actual DOM, it's an object) of res-container(15 cards).
- DIFF Algorithm 
  Finds out the difference between updated virtual DOM and previous virtual DOM, and update the actual DOM.            


<!-- ############################### -->
 const arr = useState(reslist);
 destructuring of array
 const [listofRestaurant, setListofRestaurant] = arr;

 arr[0] = listofRestaurant;
 arr[1] = setListofRestaurant;

 