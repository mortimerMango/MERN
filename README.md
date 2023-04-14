# MERN
Fullstack MERN application in development mode: MongoDB, Express, React, Node JS

### API Endpoints:
````
GET     /workouts	--> Gets all the workout documents
POST    /workouts	--> Creates a new workout document
GET	/workouts/:id	--> Gets a single workout document
DELETE	/workouts/:id	--> Deletes a single workout
PATCH	/workouts/:id	--> updates a single workout
````

### How to use:
````
<!> Requires Docker
  - Clone this repository into a folder
  - Ensure Docker is running on local machine
  - Use docker cmd: docker-compose up -d
  - Use URL: http://localhost:3000 in browser for [ CLIENT ] (frontend)
  - Use URL: http://localhost:4000 in browser for [ SERVER ] (backend ) and for POSTMAN if testing API
  - Use URL: http://localhost:8081 to view mongo-express documents under `Test`
  - That's it
````
