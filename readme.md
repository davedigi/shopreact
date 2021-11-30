# Shop Fullstack test

A small description about this test and the activities:

The main focus of backend development is to define an API endpoint that returns
the content of a CSV file in JSON format.

The main goal of the frontend development is the creation of a single-page application that
show, following a defined design, the data provided by the aforementioned API.

## Development progress

### Backend

It was developed with nodejs and the express framework.
There is no routes module but only two routes with app.get in index.js

#### Routes

* <http://localhost:5000/>  
    1. --> "Server shop is running" is OK
* <http://localhost:8000/api/flyers?page=3&limit=100>
    1. --> serve the Json response from the ReadStream CSV file Flyers Data
    2. --> filters the data with some conditions and serve at least a number equal to "limit" records

### Frontend

It was developed with javascript and the React Library.

* The design was not developed using a UI framework but only css classes becouse we are in minimal contest.
* You can choose a favorite flyer and remove it from favorites flyers whenever you want (with heart icon).

## Todos

1. If localStorage is not supported, use cookies as a fallback.
2. Use different sized images for flyer cards & fix Flyer box height.
3. Insert others beatiful transition
4. Implement an action that, when I click on the favorite, places me in the flyer box in the container list

## Installation

A step by step guide that will tell you how to get the environment up and running.

### for Backend

* cd shop/BACKEND
* npm install
* npm start
server is now listening at <http://localhost:8000>

### for Frontend

* cd shop
* npm install
* npm run build
* serve -s build
* Launch in browser <http://localhost:5000>
