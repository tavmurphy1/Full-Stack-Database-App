-- phpMyAdmin SQL Dump
-- version 5.2.1-1.el7.remi
-- https://www.phpmyadmin.net/
-- Authors: CS340 Group 101 Team Binary: Tavner Murphy and Patrick Lim
-- Host: localhost
-- Generation Time: May 02, 2024 at 08:17 PM
-- Server version: 10.6.17-MariaDB-log
-- PHP Version: 8.2.17

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
  `actor_id` int(11) NOT NULL,
  `actor_name` varchar(255) NOT NULL
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
(11, 'Walter Goggins');

-- --------------------------------------------------------

--
-- Table structure for table `Directors`
--

CREATE TABLE `Directors` (
  `director_id` int(11) NOT NULL,
  `director_name` varchar(255) NOT NULL
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
-- Table structure for table `Engagements`
--

CREATE TABLE `Engagements` (
  `engagement_id` int(11) NOT NULL,
  `favorite` tinyint(1) NOT NULL DEFAULT 0,
  `rating` int(11) DEFAULT NULL,
  `view` tinyint(1) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `television_id` int(11) DEFAULT NULL,
  CHECK ('rating' >= 0 and 'rating' <= 10)
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
  `episode_id` int(11) NOT NULL,
  `episode_title` varchar(255) NOT NULL,
  `episode_length` int(11) NOT NULL,
  `television_id_ep` int(11) NOT NULL
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
(7, 'The End', 74, 6);

-- --------------------------------------------------------

--
-- Table structure for table `Genres`
--

CREATE TABLE `Genres` (
  `genre_id` int(11) NOT NULL,
  `genre_name` varchar(255) NOT NULL
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
-- Table structure for table `Movies`
--

CREATE TABLE `Movies` (
  `movie_id` int(11) NOT NULL,
  `movie_title` varchar(255) NOT NULL,
  `movie_length` int(11) NOT NULL,
  `movie_total_view` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Movies`
--

INSERT INTO `Movies` (`movie_id`, `movie_title`, `movie_length`, `movie_total_view`) VALUES
(1, 'The Godfather', 175, 1),
(2, 'Pulp Fiction', 154, 1),
(3, 'The Matrix', 136, 0),
(4, 'Toy Story', 81, 0),
(5, 'The Godfather Part II', 202, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Movies_Actors`
--

CREATE TABLE `Movies_Actors` (
  `movie_actor_id` int(11) NOT NULL,
  `actor_id_ma` int(11) NOT NULL,
  `movie_id_ma` int(11) NOT NULL
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
  `movie_director_id` int(11) NOT NULL,
  `movie_id_md` int(11) NOT NULL,
  `director_id_md` int(11) NOT NULL
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
  `movie_genre_id` int(11) NOT NULL,
  `movie_id_mg` int(11) NOT NULL,
  `genre_id_mg` int(11) NOT NULL
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
-- Table structure for table `Televisions`
--

CREATE TABLE `Televisions` (
  `television_id` int(11) NOT NULL,
  `television_title` varchar(255) NOT NULL,
  `television_total_view` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `Televisions`
--

INSERT INTO `Televisions` (`television_id`, `television_title`, `television_total_view`) VALUES
(1, 'Planet Earth II', 0),
(2, 'Band of Brothers', 0),
(3, 'Chernobyl', 1),
(4, 'The Last Dance', 0),
(5, 'Arcane', 0),
(6, 'Fallout', 0),
(7, 'Westworld', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Televisions_Actors`
--

CREATE TABLE `Televisions_Actors` (
  `television_actor_id` int(11) NOT NULL,
  `actor_id_ta` int(11) NOT NULL,
  `television_id_ta` int(11) NOT NULL
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
(7, 11, 6);

-- --------------------------------------------------------

--
-- Table structure for table `Televisions_Directors`
--

CREATE TABLE `Televisions_Directors` (
  `television_director_id` int(11) NOT NULL,
  `director_id_td` int(11) NOT NULL,
  `television_id_td` int(11) NOT NULL
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
  `television_genre_id` int(11) NOT NULL,
  `genre_id_tg` int(11) NOT NULL,
  `television_id_tg` int(11) NOT NULL
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
(7, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_country` varchar(255) NOT NULL
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Actors`
--
ALTER TABLE `Actors`
  ADD PRIMARY KEY (`actor_id`),
  ADD UNIQUE KEY `actor_id_UNIQUE` (`actor_id`);

--
-- Indexes for table `Directors`
--
ALTER TABLE `Directors`
  ADD PRIMARY KEY (`director_id`),
  ADD UNIQUE KEY `director_id_UNIQUE` (`director_id`);

--
-- Indexes for table `Engagements`
--
ALTER TABLE `Engagements`
  ADD PRIMARY KEY (`engagement_id`),
  ADD UNIQUE KEY `idEngagements_UNIQUE` (`engagement_id`),
  ADD KEY `fk_Engagements_Users_idx` (`user_id`),
  ADD KEY `fk_Engagements_Movies1_idx` (`movie_id`),
  ADD KEY `fk_Engagements_Televisions1_idx` (`television_id`);

--
-- Indexes for table `Episodes`
--
ALTER TABLE `Episodes`
  ADD PRIMARY KEY (`episode_id`),
  ADD UNIQUE KEY `episode_id_UNIQUE` (`episode_id`),
  ADD KEY `fk_Episodes_Televisions1_idx` (`television_id_ep`);

--
-- Indexes for table `Genres`
--
ALTER TABLE `Genres`
  ADD PRIMARY KEY (`genre_id`),
  ADD UNIQUE KEY `genre_id_UNIQUE` (`genre_id`);

--
-- Indexes for table `Movies`
--
ALTER TABLE `Movies`
  ADD PRIMARY KEY (`movie_id`),
  ADD UNIQUE KEY `movie_id_UNIQUE` (`movie_id`);

--
-- Indexes for table `Movies_Actors`
--
ALTER TABLE `MovCHECK ('rating' >= 0 and 'rating' <= 5)ies_Actors`
  ADD PRIMARY KEY (`movie_actor_id`),
  ADD UNIQUE KEY `movie_actor_id_UNIQUE` (`movie_actor_id`),
  ADD KEY `fk_Actors_has_Movies_Movies1_idx` (`movie_id_ma`),
  ADD KEY `fk_Actors_has_Movies_Actors1_idx` (`actor_id_ma`);

--
-- Indexes for table `Movies_Directors`
--
ALTER TABLE `Movies_Directors`
  ADD PRIMARY KEY (`movie_director_id`),
  ADD UNIQUE KEY `movie_director_id_UNIQUE` (`movie_director_id`),
  ADD KEY `fk_Movies_has_Directors_Directors1_idx` (`director_id_md`),
  ADD KEY `fk_Movies_has_Directors_Movies1_idx` (`movie_id_md`);

--
-- Indexes for table `Movies_Genres`
--
ALTER TABLE `Movies_Genres`
  ADD PRIMARY KEY (`movie_genre_id`),
  ADD UNIQUE KEY `movie_genre_id_UNIQUE` (`movie_genre_id`),
  ADD KEY `fk_Movies_has_Genres_Genres1_idx` (`genre_id_mg`),
  ADD KEY `fk_Movies_has_Genres_Movies1_idx` (`movie_id_mg`);

--
-- Indexes for table `Televisions`
--
ALTER TABLE `Televisions`
  ADD PRIMARY KEY (`television_id`),
  ADD UNIQUE KEY `television_id_UNIQUE` (`television_id`);

--
-- Indexes for table `Televisions_Actors`
--
ALTER TABLE `Televisions_Actors`
  ADD PRIMARY KEY (`television_actor_id`),
  ADD UNIQUE KEY `television_actor_id_UNIQUE` (`television_actor_id`),
  ADD KEY `fk_Actors_has_Televisions_Televisions1_idx` (`television_id_ta`),
  ADD KEY `fk_Actors_has_Televisions_Actors1_idx` (`actor_id_ta`);

--
-- Indexes for table `Televisions_Directors`
--
ALTER TABLE `Televisions_Directors`
  ADD PRIMARY KEY (`television_director_id`),
  ADD UNIQUE KEY `television_director_id_UNIQUE` (`television_director_id`),
  ADD KEY `fk_Directors_has_Televisions_Televisions1_idx` (`television_id_td`),
  ADD KEY `fk_Directors_has_Televisions_Directors1_idx` (`director_id_td`);

--
-- Indexes for table `Televisions_Genres`
--
ALTER TABLE `Televisions_Genres`
  ADD PRIMARY KEY (`television_genre_id`),
  ADD UNIQUE KEY `television_genre_id_UNIQUE` (`television_genre_id`),
  ADD KEY `fk_Genres_has_Televisions_Televisions1_idx` (`television_id_tg`),
  ADD KEY `fk_Genres_has_Televisions_Genres1_idx` (`genre_id_tg`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_id_UNIQUE` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Actors`
--
ALTER TABLE `Actors`
  MODIFY `actor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Directors`
--
ALTER TABLE `Directors`
  MODIFY `director_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `Engagements`
--
ALTER TABLE `Engagements`
  MODIFY `engagement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Episodes`
--
ALTER TABLE `Episodes`
  MODIFY `episode_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Genres`
--
ALTER TABLE `Genres`
  MODIFY `genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Movies`
--
ALTER TABLE `Movies`
  MODIFY `movie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Movies_Actors`
--
ALTER TABLE `Movies_Actors`
  MODIFY `movie_actor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Movies_Directors`
--
ALTER TABLE `Movies_Directors`
  MODIFY `movie_director_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Movies_Genres`
--
ALTER TABLE `Movies_Genres`
  MODIFY `movie_genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Televisions`
--
ALTER TABLE `Televisions`
  MODIFY `television_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Televisions_Actors`
--
ALTER TABLE `Televisions_Actors`
  MODIFY `television_actor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Televisions_Directors`
--
ALTER TABLE `Televisions_Directors`
  MODIFY `television_director_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Televisions_Genres`
--
ALTER TABLE `Televisions_Genres`
  MODIFY `television_genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Engagements`
--
ALTER TABLE `Engagements`
  ADD CONSTRAINT `fk_Engagements_Movies1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Engagements_Televisions1` FOREIGN KEY (`television_id`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Engagements_Users` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Episodes`
--
ALTER TABLE `Episodes`
  ADD CONSTRAINT `fk_Episodes_Televisions1` FOREIGN KEY (`television_id_ep`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Movies_Actors`
--
ALTER TABLE `Movies_Actors`
  ADD CONSTRAINT `fk_Actors_has_Movies_Actors1` FOREIGN KEY (`actor_id_ma`) REFERENCES `Actors` (`actor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Actors_has_Movies_Movies1` FOREIGN KEY (`movie_id_ma`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Movies_Directors`
--
ALTER TABLE `Movies_Directors`
  ADD CONSTRAINT `fk_Movies_has_Directors_Directors1` FOREIGN KEY (`director_id_md`) REFERENCES `Directors` (`director_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Movies_has_Directors_Movies1` FOREIGN KEY (`movie_id_md`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Movies_Genres`
--
ALTER TABLE `Movies_Genres`
  ADD CONSTRAINT `fk_Movies_has_Genres_Genres1` FOREIGN KEY (`genre_id_mg`) REFERENCES `Genres` (`genre_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Movies_has_Genres_Movies1` FOREIGN KEY (`movie_id_mg`) REFERENCES `Movies` (`movie_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Televisions_Actors`
--
ALTER TABLE `Televisions_Actors`
  ADD CONSTRAINT `fk_Actors_has_Televisions_Actors1` FOREIGN KEY (`actor_id_ta`) REFERENCES `Actors` (`actor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Actors_has_Televisions_Televisions1` FOREIGN KEY (`television_id_ta`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Televisions_Directors`
--
ALTER TABLE `Televisions_Directors`
  ADD CONSTRAINT `fk_Directors_has_Televisions_Directors1` FOREIGN KEY (`director_id_td`) REFERENCES `Directors` (`director_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Directors_has_Televisions_Televisions1` FOREIGN KEY (`television_id_td`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Televisions_Genres`
--
ALTER TABLE `Televisions_Genres`
  ADD CONSTRAINT `fk_Genres_has_Televisions_Genres1` FOREIGN KEY (`genre_id_tg`) REFERENCES `Genres` (`genre_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Genres_has_Televisions_Televisions1` FOREIGN KEY (`television_id_tg`) REFERENCES `Televisions` (`television_id`) ON DELETE CASCADE ON UPDATE CASCADE;

SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
