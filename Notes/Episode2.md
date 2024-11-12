Episode start with to know about difference between git and git-hub

Production Code

NPM -- Doesn't stand for Node Package Manager 
      standard repo for packages, All the libraries and utlity you need comes from npm and npm manages them for you 
      Just package manager, manages all the packages we installed in our system and sometime this packages are also known as dependency.

# npm init
jest

pacakage.json is an configuration for npm
sometime called dependency
Now we have package.json we can install dependecies in our project

Most Important package in our project is "bundler" 
# webpack
# vite
# parcel
these are bundlers, they bundles you app and optimise it, so it can ship to the production
All bundlers are same do same thing but uses different algorithm

using parcel 
get parcel in our app 
if u want  to have any pacakge or dependency in your app we uses the same command 
# "npm install package-name" -- npm install -D pacakge-name
we can also give a parameter or flag like "-D"

We can have 2 types of dependencies 
# Dev Dependcies -- uses only in development phase
# Normal Dependencies -- uses in both dev and production phase

 
^ -- caret -- if ^ is writeen before version of package it automatically upadtes when there is minor updates in a package
~ -- tilde  -- if ~ it will update the major version of package
# if don't put any of them then it's version is still

# pacakge.json -- 
It's a configuration for npm it keeps a track of what packages installed in our app
# package-lock.json -- 
it keeps a track of exact version which is being installed

# node-modules -- 
contain all code we fetch from npm 
fetching all code from npm 
colection of dependencies
                
# transitive dependency -- 
parcel is adependncy for our prjoect and pracel have their own dependency then their dependency have their own dependency.

# .gitignore 
 if we don't want to push some files on git then put that files in .gitignore folder
  /node_modules

package.json and pacakge-lock.json should be put on git along with your project
Because if you have these 2 files then you can creat node_modules 
just do npm install for re-creating for node_modules

# whatever you can regeneatre don't put that on git

# ---------------------------------------------------------------
# PART 2 -- 1:04:57

building app using parcel -- npx parcel entry-point (index.html)

just like we have npm we also have npx 
npm means installing the pacakge
npx means executing the pacakge

cdn links are not prefred way to bring react in project -- it's an expensive 
easy way is not have inside the pacakge.json

we can install react as a pacakge
# npm install react

install react dom also
# npm install react-dom 

<script type="module" src="./App.js"></script> -- added type="module"

# parcel
 - Dev Build
 - Hot Module Replacement (HMR)
 - Local Server
 - File Watching Algorithm -- writen in c++
 - caching things for you -- faster builds
 - image optimisation -- most expensive things in browser is to upload images
 - Minification
 - Bundling
 - Compress
 - consistent hashing
 - code splitting
 - Diffrential Bundling -- to support old brwoser
 - Diagonistic
 - Error Handling
 - HTTPs
 - Tree Shaking Algorithm  -- remove unused code for you
 - Different dev and production build

 production build
 # npx parcel build entry point (index.html)
 if error then go to package.json and remove "main": "App.js"

dist and parcel can be regenerated so need not push in git
we can generate dist and parcel via building it

# BrowserList -- 
  where you can find browser nad their configuration