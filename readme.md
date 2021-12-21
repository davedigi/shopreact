# Portfolio Fullstack test

A small description about this test and the activities:

The main focus of backend development is to define an API endpoint that returns
the content of a CSV file in JSON format.

The main goal of the frontend development is the creation of a single-page application that
show, following a defined design, the data provided by the aforementioned API.

## Development progress

1. At the moment i'm using localstorage as favorite's persistment.
2. At the moment i'm not using different size images for cards & fix card box height.

### Backend

It was developed with nodejs and the express framework.
There is no routes module but only two routes with app.get in index.js

#### Routes

* <http://localhost:5000/>  
    1. --> "Server projects is running" is OK
* <http://localhost:5000/api/projects?page=3&limit=100>
    1. --> serve the Json response from the ReadStream CSV file Projects Data
    2. --> filters the data with some conditions and serve at least a number equal to "limit" records

### Frontend

It was developed with javascript and the React Library.
It's also compatibility with IE11 browser.

* The design, in this first version, was not developed using a UI framework but only css classes because we are in minimal contest.
* You can choose a favorite project and remove it from favorites projects whenever you want (with heart icon).

## Todos

1. Create environment params in backend & frontend
2. Insert others beatiful transition
3. Implement an action that, when I click on the favorite, places me in the card box in the container list

## Installation

A step by step guide that will tell you how to get the environment up and running.

### for Backend

* cd projects/BACKEND
* npm install
* npm start
server is now listening at <http://localhost:8000>

### for Frontend

* cd projects
* npm install
* npm run build
* serve -s build
* Launch in browser <http://localhost:5000>
