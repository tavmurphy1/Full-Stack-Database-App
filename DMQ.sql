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
        ON Engagements.television_id = Televisions.television_id 

-- Query for add a new character functionality with colon : character being used to 
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

-- add new episode
INSERT INTO `Episodes` (`episode_title`, `episode_length`, `television_id_ep`)
VALUES (:episode_titleInput, :episode_lengthInput, :television_id_from_dropdown_Input,);

-- add new engagement
INSERT INTO `Enagements` (`favorite`, `rating`, `view`, `user_id`, `movie_id`, `television_id`)
VALUES (:engagements_favorite_checkboxInput, :engagements_rating_from_dropdown_Input, :engagements_view_checkboxInput, 
:engagements_user_idInput, :engagements_movie_title_from_dropdownInput, :engagements_television_title_from_dropdownInput);

-- Query for delete a new character functionality with colon : character being used to 
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
DELETE FROM `Engagement` WHERE engagement_id = :engagement_ID_selected_from_browse_engagements_page