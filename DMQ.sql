-- Queries for read functionality

-- get all genres for browse users page
SELECT user_id, user_name, user_email, user_country FROM `Users`;

-- get all genres for browse genres page
SELECT genre_id, genre_name FROM `Genres`;

-- get all actors for browse actors page
SELECT actor_id, actor_name FROM `Actors`;

-- get all directors for browse directors page
SELECT director_id, director_name FROM `Directors`;

-- get all episodes and their corresponding television show name for browse episodes page
SELECT episode_id, episode_title, episode_length, Televisions.television_title AS television_name
	FROM Episodes
		INNER JOIN Televisions
        ON television_id_ep = Televisions.television_id;
        
-- get all Engagements and their corresponding user_id and movie or television show name for browse engagements page
SELECT engagement_id, favorite, rating, view, user_id, Movies.movie_title AS movie_title, Televisions.television_title AS television_title
	FROM Engagements
		LEFT JOIN Movies
        ON Engagements.movie_id = Movies.movie_id 
		LEFT JOIN Televisions
        ON Engagements.television_id = Televisions.television_id;
        
-- get all Movies for browse movies page
SELECT Movies.movie_id, movie_title, movie_length, sum(Engagements.view)
	FROM Movies
		INNER JOIN Engagements
        ON Engagements.movie_id = Movies.movie_id
    group by Movies.movie_id
    Order by Movies.movie_id;
	
-- get  associated genres, actors, directors for browsw movies page
SELECT  Genres.genre_name AS `genres(s)`
	FROM Movies_Genres
		INNER JOIN Genres
        ON Genres.genre_id = Movies_Genres.genre_id_mg
        INNER JOIN Movies
		ON Movies.movie_id = Movies_Genres.movie_id_mg
	Order by Movies.movie_id;
    
SELECT Actors.actor_name AS `actor(s)`
FROM Movies_Actors
		INNER JOIN Actors
        ON Actors.actor_id = Movies_Actors.actor_id_ma
        INNER JOIN Movies
		ON Movies.movie_id = Movies_Actors.movie_id_ma
	Order by Movies.movie_id;
    
SELECT Directors.director_name AS `director(s)`
FROM Movies_Directors
		INNER JOIN Directors
        ON Directors.director_id = Movies_Directors.director_id_md
        INNER JOIN Movies
		ON Movies.movie_id = Movies_Directors.movie_id_md
	Order by Movies.movie_id

-- Queries for insert functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

-- add new user
INSERT INTO `Users` (`user_name`, `user_email`, `user_country`)
VALUES (:user_nameInput, :user_emailInput, :user_countryInput);

-- add new genre
INSERT INTO `Genres` (`genre_name`)
VALUES (:genre_nameInput);

-- add new actor
INSERT INTO `Actors` (`actor_name`)
VALUES (:actor_nameInput);

-- add new director
INSERT INTO `Directors` (`director_name`)
VALUES (:director_nameInput);

-- get all television titles to populate the television title dropdown for new episode
SELECT television_title FROM Televisions;

-- add new episode
INSERT INTO `Episodes` (`episode_title`, `episode_length`, `television_id_ep`)
VALUES (:episode_titleInput, :episode_lengthInput, :television_id_from_dropdown_Input,);

-- get all movie titles to populate the movie title dropdown for new engagement
SELECT movie_title FROM Televisions;

-- get all television titles to populate the television title dropdown for new engagement
SELECT television_title FROM Televisions;

-- add new engagement
INSERT INTO `Enagements` (`favorite`, `rating`, `view`, `user_id`, `movie_id`, `television_id`)
VALUES (:engagements_favorite_checkboxInput, :engagements_rating_from_dropdown_Input, :engagements_view_checkboxInput, 
:engagements_user_idInput, :engagements_movie_title_from_dropdownInput, :engagements_television_title_from_dropdownInput);

-- add new movie
INSERT INTO `Movies` (`movie_title`, `movie_length`)
VALUES (:movies_titleInput, :movies_lengthInput);

-- add movie's associated M:N relationships to genres, actors, directors
 INSERT INTO Movies_Genres (movie_id_mg, genre_id_mg) VALUES (:movie_id_from_insert, :genre_id_from_checkboxInput)
 INSERT INTO Movies_Actors (movie_id_ma, actor_id_ma) VALUES (:movie_id_from_dropdown_Input, :actor_id_from_checkboxInput)
 INSERT INTO Movies_Directors (movie_id_md, director_id_md) VALUES (:movie_id_from_dropdown_Input, :director_id_from_checkboxInput);

-- Queries for delete functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

-- delete genre
DELETE FROM `Genres` WHERE genre_id = :genre_ID_selected_from_browse_genres_page

-- delete actor
DELETE FROM `Actors` WHERE actor_id = :actor_ID_selected_from_browse_actors_page

-- delete director
DELETE FROM `Directors` WHERE director_id = :director_ID_selected_from_browse_directors_page

-- delete episode
DELETE FROM `Episodes` WHERE episode_id = :episode_ID_selected_from_browse_episodes_page

-- delete engagement
DELETE FROM `Engagements` WHERE engagement_id = :engagement_ID_selected_from_browse_engagements_page

-- delete movies
DELETE FROM `Movies` WHERE movie_id = :movie_ID_selected_from_browse_movies_page

-- delete televisions
DELETE FROM `Televisions` WHERE television_id = :television_ID_selected_from_browse_televisions_page

-- Queries for update functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

-- update an engagement based on submission of the Update engagement
SELECT engagement_id, favorite, rating, view, user_id, Movies.movie_title AS movie_title, Televisions.television_title AS television_title
	FROM Engagements
		LEFT JOIN Movies
        ON Engagements.movie_id = Movies.movie_id 
		LEFT JOIN Televisions
        ON Engagements.television_id = Televisions.television_id
	WHERE engagement_id = :engagement_ID_selected_from_browse_engagements_page;
    
UPDATE Engagements 
	SET favorite = :engagements_favorite_checkboxInput, 
		rating = :engagements_rating_from_dropdown_Input,
        view = :engagements_view_checkboxInput, 
        user_id = :engagements_user_idInput, 
        movie_title = :engagements_movie_title_from_dropdownInput,
        television_title = :engagements_television_title_from_dropdownInput
	WHERE engagement_id = :engagement_id_from_update_submission
        

