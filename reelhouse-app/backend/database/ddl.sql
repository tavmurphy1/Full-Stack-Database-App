-- Authors: CS340 Group 101 Team Binary: Tavner Murphy and Patrick Lim
-- Step 6 DDL

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs340_limpa`
--

-- --------------------------------------------------------

--
-- Table structure for table `Actors`
--

CREATE TABLE `Actors` (
  `actor_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `actor_name` varchar(255) NOT NULL,
  PRIMARY KEY (`actor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Actors`
--

INSERT INTO `Actors` (`actor_id`, `actor_name`) VALUES
(1, 'David Attenborough'),
(2, 'Ron Livingston'),
(3, 'Emily Watson'),
(4, 'Michael Watson'),
(5, 'Ella Purnell'),
(6, 'Al Pacino'),
(7, 'John Travolta'),
(8, 'Keanu Reeves'),
(9, 'Tom Hanks'),
(10, 'Tim Allen'),
(11, 'Walter Goggins'),
(12, 'Evan Rachel Wood');

-- --------------------------------------------------------

--
-- Table structure for table `Directors`
--

CREATE TABLE `Directors` (
  `director_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `director_name` varchar(255) NOT NULL,
  PRIMARY KEY (`director_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Directors`
--

INSERT INTO `Directors` (`director_id`, `director_name`) VALUES
(1, 'Francis Ford Coppola'),
(2, 'Quentin Tarantino'),
(3, 'John Lasseter'),
(4, 'Lana Wachowski'),
(5, 'Justin Anderson'),
(6, 'John Renck'),
(7, 'David Frankel'),
(8, 'Pascal Charrue'),
(9, 'Jason Hehir'),
(10, 'Jonathan Nolan'),
(11, 'Lilly Wachowski'),
(12, 'Arnaud Delord');

-- --------------------------------------------------------

--
-- Table structure for table `Movies`
--

CREATE TABLE `Movies` (
  `movie_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `movie_title` varchar(255) NOT NULL,
  `movie_length` int(11) NOT NULL,
  `movie_total_view` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`movie_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Movies`
--

INSERT INTO `Movies` (`movie_id`, `movie_title`, `movie_length`, `movie_total_view`) VALUES
(1, 'The Godfather', 175, 2),
(2, 'Pulp Fiction', 154, 1),
(3, 'The Matrix', 136, 0),
(4, 'Toy Story', 81, 0),
(5, 'The Godfather Part II', 202, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Televisions`
--

CREATE TABLE `Televisions` (
  `television_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `television_title` varchar(255) NOT NULL,
  `television_total_view` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`television_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Televisions`
--

INSERT INTO `Televisions` (`television_id`, `television_title`, `television_total_view`) VALUES
(1, 'Planet Earth II', 2),
(2, 'Band of Brothers', 0),
(3, 'Chernobyl', 1),
(4, 'The Last Dance', 0),
(5, 'Arcane', 0),
(6, 'Fallout', 0),
(7, 'Westworld', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_country` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`user_id`, `user_name`, `user_email`, `user_country`) VALUES
(1, 'Jason Williams', 'jwill@gmail.com', 'United States'),
(2, 'Amanda Moore', 'amoore@gmail.com', 'United States'),
(3, 'Sally Sosa', 'ssosa@gmail.com', 'Mexico'),
(4, 'Michael Scott', 'mscott@gmail.com', 'Canada'),
(5, 'Linus Graves', 'lgraves@gmail.com', 'France');

-- --------------------------------------------------------

--
-- Table structure for table `Engagements`
--

CREATE TABLE `Engagements` (
  `engagement_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `favorite` tinyint(1) NOT NULL DEFAULT 0,
  `rating` int(11) DEFAULT NULL CHECK (`rating` >= 0 and `rating` <= 10),
  `view` tinyint(1) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `television_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`engagement_id`),
  FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`television_id`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Engagements`
--

INSERT INTO `Engagements` (`engagement_id`, `favorite`, `rating`, `view`, `user_id`, `movie_id`, `television_id`) VALUES
(1, 0, NULL, 1, 1, 1, NULL),
(2, 0, NULL, 1, 1, NULL, 1),
(3, 0, NULL, 1, 2, 1, NULL),
(4, 0, NULL, 1, 3, NULL, 1),
(5, 0, NULL, 1, 3, NULL, NULL),
(6, 0, NULL, 1, 5, 2, NULL),
(7, 0, NULL, 1, 5, NULL, 3),
(8, 0, 4, 0, 5, NULL, 3),
(9, 1, NULL, 0, 5, 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Episodes`
--

CREATE TABLE `Episodes` (
  `episode_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `episode_title` varchar(255) NOT NULL,
  `episode_length` int(11) NOT NULL,
  `television_id_ep` int(11) NOT NULL,
  PRIMARY KEY (`episode_id`),
  FOREIGN KEY (`television_id_ep`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Episodes`
--

INSERT INTO `Episodes` (`episode_id`, `episode_title`, `episode_length`, `television_id_ep`) VALUES
(1, 'Islands', 51, 1),
(2, 'Mountains', 49, 1),
(3, 'Currahee', 70, 2),
(4, 'Please Remain Calm', 58, 3),
(5, 'Episode I', 50, 4),
(6, 'Welcome to the Playground', 43, 5),
(7, 'The End', 74, 6),
(8, 'The Original', 68, 7);

-- --------------------------------------------------------

--
-- Table structure for table `Genres`
--

CREATE TABLE `Genres` (
  `genre_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `genre_name` varchar(255) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Genres`
--

INSERT INTO `Genres` (`genre_id`, `genre_name`) VALUES
(1, 'action'),
(2, 'documentary'),
(3, 'drama'),
(4, 'animation'),
(5, 'crime');



-- --------------------------------------------------------

--
-- Table structure for table `Movies_Actors`
--

CREATE TABLE `Movies_Actors` (
  `movie_actor_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `actor_id_ma` int(11) NOT NULL,
  `movie_id_ma` int(11) NOT NULL,
  PRIMARY KEY (`movie_actor_id`),
  FOREIGN KEY (`actor_id_ma`) REFERENCES `Actors` (`actor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`movie_id_ma`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Movies_Actors`
--

INSERT INTO `Movies_Actors` (`movie_actor_id`, `actor_id_ma`, `movie_id_ma`) VALUES
(1, 6, 1),
(2, 7, 2),
(3, 8, 3),
(4, 9, 4),
(5, 6, 5),
(6, 10, 4);

-- --------------------------------------------------------

--
-- Table structure for table `Movies_Directors`
--

CREATE TABLE `Movies_Directors` (
  `movie_director_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `movie_id_md` int(11) NOT NULL,
  `director_id_md` int(11) NOT NULL,
  PRIMARY KEY (`movie_director_id`),
  FOREIGN KEY (`director_id_md`) REFERENCES `Directors` (`director_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`movie_id_md`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Movies_Directors`
--

INSERT INTO `Movies_Directors` (`movie_director_id`, `movie_id_md`, `director_id_md`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 4),
(4, 4, 3),
(5, 5, 1),
(6, 3, 11);

-- --------------------------------------------------------

--
-- Table structure for table `Movies_Genres`
--

CREATE TABLE `Movies_Genres` (
  `movie_genre_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `movie_id_mg` int(11) NOT NULL,
  `genre_id_mg` int(11) NOT NULL,
  PRIMARY KEY (`movie_genre_id`),
  FOREIGN KEY (`genre_id_mg`) REFERENCES `Genres` (`genre_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`movie_id_mg`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Movies_Genres`
--

INSERT INTO `Movies_Genres` (`movie_genre_id`, `movie_id_mg`, `genre_id_mg`) VALUES
(1, 1, 3),
(2, 2, 1),
(3, 3, 1),
(4, 4, 4),
(5, 5, 3),
(6, 1, 5);



-- --------------------------------------------------------

--
-- Table structure for table `Televisions_Actors`
--

CREATE TABLE `Televisions_Actors` (
  `television_actor_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `actor_id_ta` int(11) NOT NULL,
  `television_id_ta` int(11) NOT NULL,
  PRIMARY KEY (`television_actor_id`),
  FOREIGN KEY (`actor_id_ta`) REFERENCES `Actors` (`actor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`television_id_ta`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Televisions_Actors`
--

INSERT INTO `Televisions_Actors` (`television_actor_id`, `actor_id_ta`, `television_id_ta`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 5, 6),
(7, 11, 6),
(8, 12, 7);

-- --------------------------------------------------------

--
-- Table structure for table `Televisions_Directors`
--

CREATE TABLE `Televisions_Directors` (
  `television_director_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `director_id_td` int(11) NOT NULL,
  `television_id_td` int(11) NOT NULL,
  PRIMARY KEY (`television_director_id`),
  FOREIGN KEY (`director_id_td`) REFERENCES `Directors` (`director_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`television_id_td`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Televisions_Directors`
--

INSERT INTO `Televisions_Directors` (`television_director_id`, `director_id_td`, `television_id_td`) VALUES
(1, 5, 1),
(2, 6, 2),
(3, 7, 3),
(4, 9, 4),
(5, 8, 5),
(6, 10, 6),
(7, 12, 5),
(8, 10, 7);

-- --------------------------------------------------------

--
-- Table structure for table `Televisions_Genres`
--

CREATE TABLE `Televisions_Genres` (
  `television_genre_id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `genre_id_tg` int(11) NOT NULL,
  `television_id_tg` int(11) NOT NULL,
  PRIMARY KEY (`television_genre_id`),
  FOREIGN KEY (`genre_id_tg`) REFERENCES `Genres` (`genre_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`television_id_tg`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Televisions_Genres`
--

INSERT INTO `Televisions_Genres` (`television_genre_id`, `genre_id_tg`, `television_id_tg`) VALUES
(1, 2, 1),
(2, 3, 2),
(3, 3, 3),
(4, 2, 4),
(5, 4, 5),
(6, 1, 6),
(7, 1, 5),
(8, 3, 7);


SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
