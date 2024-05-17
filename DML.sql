-- Authors: CS340 Group 101: Patrick Lim and Tavner Murphy

-- Queries for read functionality

-- get all users for browse users page
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
	
-- get  associated genres, actors, directors for browse movies page
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
	Order by Movies.movie_id;
    
-- get all Television shows for browse televisions page
SELECT Televisions.television_id, television_title, sum(Engagements.view)
	FROM Televisions
		INNER JOIN Engagements
        ON Engagements.television_id = Televisions.television_id
    group by Televisions.television_id
    Order by Televisions.television_id;
	
-- get  associated genres, actors, directors for browse televisions page
SELECT  Genres.genre_name AS `genres(s)`
	FROM Televisions_Genres
		INNER JOIN Genres
        ON Genres.genre_id = Televisions_Genres.genre_id_tg
        INNER JOIN Televisions
		ON Televisions.television_id = Televisions_Genres.television_id_tg
	Order by Televisions.television_id;
    
SELECT Actors.actor_name AS `actor(s)`
FROM Televisions_Actors
		INNER JOIN Actors
        ON Actors.actor_id = Televisions_Actors.actor_id_ta
        INNER JOIN Televisions
		ON Televisions.television_id = Televisions_Actors.television_id_ta
	Order by Televisions.television_id;
    
SELECT Directors.director_name AS `director(s)`
FROM Televisions_Directors
		INNER JOIN Directors
        ON Directors.director_id = Televisions_Directors.director_id_td
        INNER JOIN Televisions
		ON Televisions.television_id = Televisions_Directors.television_id_td
	Order by Televisions.television_id;
    
-- get all movies and genres to browse Movies_Genres page
SELECT movie_genre_id, Genres.genre_name as genre, Movies.movie_title as movie
	FROM Movies_Genres
		INNER JOIN Movies
        ON movie_id_mg = Movies.movie_id
		INNER JOIN Genres
        ON genre_id_mg = Genres.genre_id;
        
-- get all movies and actors to browse Movies_Actors page
SELECT movie_actor_id, Actors.actor_name as actor, Movies.movie_title as movie
	FROM Movies_Actors
		INNER JOIN Movies
        ON movie_id_ma = Movies.movie_id
		INNER JOIN Actors
        ON actor_id_ma = Actors.actor_id;
        
-- get all movies and directors to browse Movies_Directors page
SELECT movie_director_id, Directors.director_name as director, Movies.movie_title as movie
	FROM Movies_Directors
		INNER JOIN Movies
        ON movie_id_md = Movies.movie_id
		INNER JOIN Directors
        ON director_id_md = Directors.director_id;
        
-- get all movies and genres to browse Televisions_Genres page
SELECT television_genre_id, Genres.genre_name as genre, Televisions.television_title as television
	FROM Televisions_Genres
		INNER JOIN Televisions
        ON television_id_tg = Televisions.television_id
		INNER JOIN Genres
        ON genre_id_tg = Genres.genre_id;
        
-- get all movies and actors to browse Televisions_Actors page
SELECT television_actor_id, Actors.actor_name as actor, Televisions.television_title as television
	FROM Televisions_Actors
		INNER JOIN Televisions
        ON television_id_ta = Televisions.television_id
		INNER JOIN Actors
        ON actor_id_ta = Actors.actor_id;
        
-- get all movies and directors to browse Televisions_Directors page
SELECT television_director_id, Directors.director_name as director, Televisions.television_title as television
	FROM Televisions_Directors
		INNER JOIN Televisions
        ON television_id_td = Televisions.television_id
		INNER JOIN Directors
        ON director_id_td = Directors.director_id;

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
INSERT INTO `Engagements` (`favorite`, `rating`, `view`, `user_id`, `movie_id`, `television_id`)
VALUES (:engagements_favorite_checkboxInput, :engagements_rating_from_dropdown_Input, :engagements_view_checkboxInput, 
:engagements_user_id_from_dropdownInput, :engagements_movie_title_from_dropdownInput, :engagements_television_title_from_dropdownInput);

-- add new movie
INSERT INTO `Movies` (`movie_title`, `movie_length`)
VALUES (:movies_titleInput, :movies_lengthInput);

-- add movie's associated M:N relationships to genres, actors, directors
 INSERT INTO Movies_Genres (movie_id_mg, genre_id_mg) VALUES (:movie_id_from_insert_autoincrement, :genre_id_from_checkboxInput)
 INSERT INTO Movies_Actors (movie_id_ma, actor_id_ma) VALUES (:movie_id_from_insert_autoincrement, :actor_id_from_checkboxInput)
 INSERT INTO Movies_Directors (movie_id_md, director_id_md) VALUES (:movie_id_insert_autoincrement, :director_id_from_checkboxInput);
 
 -- add new television
INSERT INTO `Televisions` (`television_title`)
VALUES (:movies_titleInput);

-- add television's associated M:N relationships to genres, actors, directors
 INSERT INTO Televisions_Genres (television_id_tg, genre_id_tg) VALUES (:television_id_from_insert_autoincrement, :genre_id_from_checkboxInput)
 INSERT INTO Televisions_Actors (television_id_ta, actor_id_ta) VALUES (:television_id_from_insert_autoincrement, :actor_id_from_checkboxInput)
 INSERT INTO Televisions_Directors (television_id_td, director_id_td) VALUES (:television_id_from_insert_autoincrement, :director_id_from_checkboxInput);

-- Queries for delete functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

-- delete genre and M:M relationships with Movies and Televisions
DELETE FROM `Genres` WHERE genre_id = :genre_ID_selected_from_browse_genres_page
DELETE FROM `Movies_Genres` WHERE genre_id_mg = :genre_ID_selected_from_browse_genres_page
DELETE FROM `Televisions_Genres` WHERE genre_id_tg = :genre_ID_selected_from_browse_genres_page

-- delete actor and M:M relationships with Movies and Televisions
DELETE FROM `Actors` WHERE actor_id = :actor_ID_selected_from_browse_actors_page
DELETE FROM `Movies_Actors` WHERE genre_id_ma = :actor_ID_selected_from_browse_actors_page
DELETE FROM `Televisions_Actors` WHERE genre_id_ta = :actor_ID_selected_from_browse_actors_page

-- delete director and M:M relationships with Movies and Televisions
DELETE FROM `Directors` WHERE director_id = :director_ID_selected_from_browse_directors_page
DELETE FROM `Movies_Directors` WHERE genre_id_md = :director_ID_selected_from_browse_directors_page
DELETE FROM `Televisions_Directors` WHERE genre_id_td = :director_ID_selected_from_browse_directors_page

-- delete episode
DELETE FROM `Episodes` WHERE episode_id = :episode_ID_selected_from_browse_episodes_page

-- delete engagement
DELETE FROM `Engagements` WHERE engagement_id = :engagement_ID_selected_from_browse_engagements_page

-- delete movies and M:M relationships with Genres, Actors, Directors
DELETE FROM `Movies` WHERE movie_id = :movie_ID_selected_from_browse_movies_page
DELETE FROM `Movies_Genres` WHERE movie_id_mg = :movie_ID_selected_from_browse_movies_page
DELETE FROM `Movies_Actors` WHERE movie_id_ma = :movie_ID_selected_from_browse_movies_page
DELETE FROM `Movies_Directors` WHERE movie_id_md = :movie_ID_selected_from_browse_movies_page

-- delete televisions and M:M relationships with Genres, Actors, Directors
DELETE FROM `Televisions` WHERE television_id = :television_ID_selected_from_browse_televisions_page
DELETE FROM `Televisions_Genres` WHERE television_id_tg = :television_ID_selected_from_browse_televisions_page
DELETE FROM `Televisions_Actors` WHERE television_id_ta = :television_ID_selected_from_browse_televisions_page
DELETE FROM `Televisions_Directors` WHERE television_id_td = :television_ID_selected_from_browse_televisions_page

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
        

