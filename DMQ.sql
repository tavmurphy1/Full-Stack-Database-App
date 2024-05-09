-- Query for add a new character functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

-- get all genres for browse genres page
SELECT genre_id, genre_name FROM `Genres`;

-- get all actors for browse actors page
SELECT actor_id, actor_name FROM `Actors`;

-- get all directors for browse directors page
SELECT director_id, director_name FROM `Directors`;

-- add new genre
INSERT INTO `Genres` (`genre_name`)
VALUES (:genre_nameInput);

-- add new actor
INSERT INTO `Actors` (`actor_name`)
VALUES (:actor_nameInput);

-- add new director
INSERT INTO `Directors` (`director_name`)
VALUES (:genre_nameInput);