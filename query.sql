\c workout_tracker_test




INSERT INTO users (username, password, email, gender, weight, height) VALUES ('highdee1', 'infiltrate', 'highdee1@example.com', 'female', '124', 6.7);
INSERT INTO users (username, password, email, gender, weight, height) VALUES ('macron1', 'infiltrate', 'macron1@example.com', 'male', '80', 5.2);

INSERT INTO workouts (workout_name, workout_description, user_id) VALUES ('Triceps, Biceps and Calves', 'Workout for the muscle of the arm and calves', 1);


INSERT into "workouts-exercises" (exercise_id, workout_id) VALUES (815, 1);
INSERT into "workouts-exercises" (exercise_id, workout_id) VALUES (811, 1);
INSERT into "workouts-exercises" (exercise_id, workout_id) VALUES (838, 1);
INSERT into "workouts-exercises" (exercise_id, workout_id) VALUES (568, 1);
INSERT into "workouts-exercises" (exercise_id, workout_id) VALUES (579, 1);
INSERT into "workouts-exercises" (exercise_id, workout_id) VALUES (611, 1);
INSERT into "workouts-exercises" (exercise_id, workout_id) VALUES (540, 1);
INSERT into "workouts-exercises" (exercise_id, workout_id) VALUES (538, 1);

INSERT INTO sets (workout_exercise_id, reps) values (1, 10);
INSERT INTO sets (workout_exercise_id, reps) values (1, 11);
INSERT INTO sets (workout_exercise_id, reps) values (1, 13);

INSERT INTO sets (workout_exercise_id, reps, weights) values (2, 8, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (2, 10,10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (2, 12, 10);

INSERT INTO sets (workout_exercise_id, reps, weights) values (3, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (3, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (3, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (3, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (3, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (3, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (3, 12, 10);

INSERT INTO sets (workout_exercise_id, reps, weights) values (4, 12, 15);
INSERT INTO sets (workout_exercise_id, reps, weights) values (4, 12, 15);
INSERT INTO sets (workout_exercise_id, reps, weights) values (4, 12, 15);

INSERT INTO sets (workout_exercise_id, reps, weights) values (5, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (5, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (5, 12, 10);

INSERT INTO sets (workout_exercise_id, reps) values (6, 12);
INSERT INTO sets (workout_exercise_id, reps) values (6, 12);
INSERT INTO sets (workout_exercise_id, reps) values (6, 12);
INSERT INTO sets (workout_exercise_id, reps) values (6, 12);
INSERT INTO sets (workout_exercise_id, reps) values (6, 12);
INSERT INTO sets (workout_exercise_id, reps) values (6, 12);
INSERT INTO sets (workout_exercise_id, reps) values (6, 12);

INSERT INTO sets (workout_exercise_id, reps, weights) values (7, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (7, 12, 10);
INSERT INTO sets (workout_exercise_id, reps, weights) values (7, 12, 10);

INSERT INTO sets (workout_exercise_id, reps) values (8, 12);
INSERT INTO sets (workout_exercise_id, reps) values (8, 12);
INSERT INTO sets (workout_exercise_id, reps) values (8, 12);
INSERT INTO sets (workout_exercise_id, reps) values (8, 12);
INSERT INTO sets (workout_exercise_id, reps) values (8, 12);
INSERT INTO sets (workout_exercise_id, reps) values (8, 12);
INSERT INTO sets (workout_exercise_id, reps) values (8, 12);