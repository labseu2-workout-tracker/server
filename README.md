# server

Naming Convention = dash-case

Folder structure to have routes folder to have  3 route subfolders (Users, Workouts, Exercises) Each with their own Helper file and Test file

Example folder structure:

routes > 
         exercises >
            exercise-helpers.js
            exercise-routes.js
            exercise-tests.spec.js

         users
         workouts

Individual exercise/workout endpoints to be /exercises/:id   or /workouts/:id