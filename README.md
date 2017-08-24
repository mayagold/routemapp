[![Stories in Ready](https://badge.waffle.io/mayagold/routemapp.svg?label=ready&title=Ready)](http://waffle.io/mayagold/routemapp)

# routemapp
Maya Goldstein, Samantha Ramos, Lin Lassiter

General Assembly WDIr-Gizmo
August 2017

HEROKU LINK: https://routemapp.herokuapp.com/

***************************************************************

_Description:_ A MEAN Stack application using full CRUD modeling that allows access data entries for motorcycle routes nearby their location. A sessions admin account has access to create, update, and destroy data entries.

Our app utilizes Google Maps API technology to render a map view of the route, which is input via a .gpx file.

***************************************************************

## Epic (MVP):

* Full CRUD: Admin access to create, update and delete content
* MongoDB, Angular, Express, Node
* Independent Git repository at https://github.com/mayagold/routemapp/

***************************************************************

## User Stories:

* As a user I want to upload a profile photo
As a user I want to find a trip route near my location so that I can use enjoy a great local route.
* As a user I want to contribute to the available routes on this site.
* As a user I want to preview a route.
* As a user I want to delete my routes and comments.
* Session sign-on (register/login)
* As an user I want to control adding and deleting my routes/comments.


***************************************************************

## Work Items:

* Google API research and understand location discovery and entry.
* Google API for search available routes near my location (gpx files).
* Index of available routes with comments per route with expansion ellipses...
* Seed trips/routes into MongoDB.
* Update of Trip/Route DB by user with comments (PUT).
* Google API for opening route near location and preview.
* Wireframe of the site.
* Styling of the site page(s).
* Create Session Registration and Login associating user to DB contributions. (DB models (routes&comments - Users/pw))



***************************************************************

## Problems we encountered (and how we solved them):

* Sessions modeling: figuring out how to do this using Angular JS
* Uploading .gpx files to the site via file uploader (we found a way around this by using the file path rather than uploading the file)


***************************************************************

## Wireframing:

![wireframe](/images/wireframe.jpg)

***************************************************************

## Further Goals:

* Allow users to communicate with each other
* Allow users to add comments for trips/routes used.
* Set ranking 'star' of Routes - Favorites.


***************************************************************


![screen capture](/images/screencapture1.png)

![screen capture: filter searchbox](/images/screencapture2.png)
