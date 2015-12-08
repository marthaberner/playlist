# Playlist Quarter One Assessment 


## Objective: 
Following the general design of the mockups, you will be making a playlist app that allows you to pull album images and artist names from an api, select the albums to add from the list, and then submitting your album selections via a POST request to an external api.

## Scope: 
This assessment is one whole project divided into several 'modules'. Each module isolates certain aspects of the job that can be tracked in your pivotal tracker. Your first job is to create user stories for each of the tasks in your current module.  For this exercise, you can be both the owner and the assignee of each task.

## Functionality Walkthrough
A user comes to the splash page. The splash page has 3 album covers to the right that are pulled randomly from the API.  When the user clicks the 'select tracks' button, they are taken to the playlist page.  The playlist page has a scrolling div that contains all of the album covers in the api. 

## REPO: 
https://github.com/gSchool/playlist

## Getting Credit: 
There's a pull request target for every single stage of the project. When finished with that stage, deploy current working code base to firebase and submit a pull request to the designated target. 
 

## General Notes 

* Behind the scenes, when each album cover is appended to the scrolling div in the dom, the containing div is given a unique id that comes from the object in the api.  

* A sample album object should look like this (a few of them are included in the github repo)  :  {"id": 5, title: "Ghost in the Machine", artist: "The Police", cover_art: "ghost_in_the_machine.jpg"} .  

* The album div, when added, COULD look like this:
``` <div class="album_container" id="album5"><img src="images/ghost_in_the_machine.jpg" /></div> ```

* When the user clicks on an album container div, the album is added to the album list. 

## Design Notes  
- The font used for the titles on both pages ( for example "track bin" and "click an album to add its tracks to the bin" ) is Avenir. Font matching is NOT required, but the Avenir font is included in the repo. Look up "how to use any font with CSS3" and you'll find some good resources .
- Note that the railroad track image is NOT opaque.  Unless you edit it with an image editor, you should use CSS opacity to achieve 19% opacity so it can match the mockup
- Remember that we can use z-index to place certain images "above" others .  This may help when you're placing random album covers over the railroad tracks. 
- Scrolling divs can have scrollbars that are hidden unless you need them. You should be able to look this up. 

## Mockups: 
SPLASH PAGE: 
(3 album images need to be randomly selected from API) 
![](https://raw.githubusercontent.com/Nmuta/playlist/master/mockups/splash_page.png)

PLAYLIST PAGE: 
![](https://raw.githubusercontent.com/Nmuta/playlist/master/mockups/playlist_page.png)

## APIs: 
A user will hit this api to get all of the albums: 
https://lit-fortress-6467.herokuapp.com/object

A user will send a POST request to this api to send the playlist when completed. https://lit-fortress-6467.herokuapp.com/post


## Stretch 1: 
Create a new API ( it can be a json file posted to a static deployment target)  that contains YOUR personal favorite albums and accopmanying images. 

## Stretch 2: 
Building on stretch one, create new functionality where a user can click on an album and get all of the tracks on that album, and then the user is able to add only certain tracks from that album.  This will require a modification to the album object that is being served through the API. See mockup: 
![](https://raw.githubusercontent.com/gSchool/playlist/master/mockups/playlist_stretch2.fw.png) 



# MODULES: 
Add the following stories to the Pivotal Tracker, complete the work, deploy to firebase, and submit a pull request to https://github.com/gSchool/playlist_module_[module_number] 
For example, if you just completed module 3, submit a pull request to https://github.com/gSchool/playlist_module_3


## Module 1: STRUCTURE AND CSS

* As a user, when I visit the spash page, I should see a page whose general layout matches the design mockup [excluding dynamic content] 

* As a user, when I visit the splash page, I should see a railroad track with 19% opacity on the right hand side. 

* As a user, when I visit the playlist page, I should see a page whose general layout matches the design mockup [excluding dynamic content] 

* As a user, when I click "choose tracks" on the splash page, it takes me to the playlist page. 


## Module 2: APIs
* As a developer, when I submit a get request on the home page [https://lit-fortress-6467.herokuapp.com/object ] , I receive data and I am able to choose 3 random album image URLs from the data received. 

* As a developer, when I submit a get request on the playlist page [ https://lit-fortress-6467.herokuapp.com/object ] , I receive data and I am able to get all of the data . 

* As a developer, in a sandbox environment, I am able to make a POST request to the [ https://lit-fortress-6467.herokuapp.com/post ] receive a response, and log data from the response. 

## Module 3: DOM Manipulation v1

* As a user, when I visit the home page, I see 3 random album covers vertically stacked according to the specs shown in the mockup. 

* As a user, when I visit the playlist page, I see a div populated with all of the albums in the album list retrieved from the API. 

## Module 4: DOM Manipulation v2

* As a developer, when I iterate through the album results, I wrap each image in a div with a unique id that matches the id of each image object, and I append that div to the playlist div, OR I do something else that acheives the same result. 


## Module 5: Accumulate and POST

* As a developer, when my playlist is completed, I have accumulated all of the album (or track ) names in a collection
* As a developer, when I send my collection via POST request to the POST API: https://lit-fortress-6467.herokuapp.com/post , I receive and log a response to the console. 










