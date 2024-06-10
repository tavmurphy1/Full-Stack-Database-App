//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of fetch requests and table elements to match our project's mySQL Movies table.
// Intersection tables were also added to this component, including their fetch requests and table elements.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./MovieTableRow";
import MGTableRow from "./MoviesGenresTableRow";
import MATableRow from "./MoviesActorsTableRow";
import MDTableRow from "./MoviesDirectorsTableRow";
import axios from "axios";

const MoviesTable = () => {
  const [movies, setMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieActors, setMovieActors] = useState([]);
  const [movieDirectors, setMovieDirectors] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [moviesActors, setMoviesActors] = useState([]);
  const [moviesDirectors, setMoviesDirectors] = useState([]);

  const fetchMovies = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "movies";
      const response = await axios.get(URL);
      setMovies(response.data);
    } catch (error) {
      alert("Error fetching movies from the server.");
      console.error("Error fetching movies:", error);
    }
  };

  // Define a function to fetch Movies_Genres data from the API
  const fetchMovieGenreData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'movies' + '/moviegenres';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setMovieGenres(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching MovieGenre data:', error);
      alert('Error fetching MovieGenre data from the server.');
    }
  };

  // Define a function to fetch Movies_Actors data from the API
  const fetchMovieActorData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'movies' + '/movieactors';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setMovieActors(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching MovieActor data:', error);
      alert('Error fetching MovieActor data from the server.');
    }
  };

  // Define a function to fetch Movies_Directors data from the API
  const fetchMovieDirectorData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'movies' + '/moviedirectors';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setMovieDirectors(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching MovieDirector data:', error);
      alert('Error fetching MovieDirector data from the server.');
    }
  };

  const fetchMoviesGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "moviegenres";
      const response = await axios.get(URL);
      setMoviesGenres(response.data);
    } catch (error) {
      alert("Error fetching movie genres from the server.");
      console.error("Error fetching movie genres:", error);
    }
  };

  const fetchMoviesDirectors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "moviedirectors";
      const response = await axios.get(URL);
      setMoviesDirectors(response.data);
    } catch (error) {
      alert("Error fetching movie director from the server.");
      console.error("Error fetching movie director:", error);
    }
  };

  const fetchMoviesActors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "movieactors";
      const response = await axios.get(URL);
      setMoviesActors(response.data);
    } catch (error) {
      alert("Error fetching movie actor from the server.");
      console.error("Error fetching movie actor:", error);
    }
  };

  useEffect(() => {
    fetchMovies(), fetchMovieGenreData(), fetchMovieActorData(), fetchMovieDirectorData(), fetchMoviesGenres(), fetchMoviesDirectors(), fetchMoviesActors();
  }, []);

  let genre = [];
  let movieGenreID = [];
  let genreCounter = 0;
  movieGenres.map((val, i) => {
        
        if (i > 0) {if(val.movieID === movieGenreID[i-1]){
            genre[genreCounter-1] = genre[genreCounter-1] + ', ' + val.genres
            movieGenreID.push(val.movieID)}
            else{
                genre.push(val.genres);
                movieGenreID.push(val.movieID);
                genreCounter += 1
                }
        }
        else {
            genre.push(val.genres)
            movieGenreID.push(val.movieID)
            genreCounter += 1
        }
});

let actor = [];
let movieActorID = [];
let actorCounter = 0;

movieActors.map((val, i) => {
      if (i > 0) {if(val.movieID === movieActorID[i-1]){
          actor[actorCounter-1] = actor[actorCounter-1] + ', ' + val.actors
          movieActorID.push(val.movieID)
          }
          else{
              actor.push(val.actors);
              movieActorID.push(val.movieID);
              actorCounter += 1
              }
      }
      else {
          actor.push(val.actors)
          movieActorID.push(val.movieID)
          actorCounter += 1
      }
});

let director = [];
let movieDirectorID = [];
let directorCounter = 0;

movieDirectors.map((val, i) => {
      if (i > 0) {if(val.movieID === movieDirectorID[i-1]){
          director[directorCounter-1] = director[directorCounter-1] + ', ' + val.directors
          movieDirectorID.push(val.movieID)
          }
          else{
              director.push(val.directors);
              movieDirectorID.push(val.movieID);
              directorCounter += 1
              }
      }
      else {
          director.push(val.directors)
          movieDirectorID.push(val.movieID)
          directorCounter += 1
      }
});

const [toggle, setToggle] = useState(true);

const handleClick = () => {
  setToggle(!toggle);
};

  return (
    <div>
      <h2>Movies</h2>
      {movies.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No movies found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Length</th>
              <th>Total Views</th>
              <th>genre(s)</th>
              <th>actor(s)</th>
              <th>director(s)</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, i) => (
              <TableRow key={movie.movie_id} movie={movie} fetchMovies={fetchMovies} fetchMovieGenreData={genre[i]} fetchMovieActorData={actor[i]} fetchMovieDirectorData={director[i]} fetchMoviesGenres={fetchMoviesGenres} fetchMoviesDirectors={fetchMoviesDirectors} fetchMoviesActors={fetchMoviesActors}/>
            ))}
          </tbody>
        </table>
      )}
      <br></br>
      <button onClick={handleClick} >
          Show Intersection Tables</button>

      {toggle ? <></> : (
      <div>
      <h2>Movie Genres</h2>
      
      {moviesGenres.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No movie genres found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>genre</th>
              <th>movie</th>
            </tr>
          </thead>
          <tbody>
            {moviesGenres.map((moviesGenres, i) => (
              <MGTableRow key={moviesGenres.movie_genre_id} moviesGenres={moviesGenres}/>
            ))}
          </tbody>
        </table>
      )}
        
      <h2>Movie Actors</h2>
      {moviesActors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No movie actors found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>actor</th>
              <th>movie</th>
            </tr>
          </thead>
          <tbody>
            {moviesActors.map((moviesActors, i) => (
              <MATableRow key={moviesActors.movie_actor_id} moviesActors={moviesActors}/>
            ))}
          </tbody>
        </table>
      )}

      <h2>Movie Directors</h2>
      {moviesDirectors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No movie directors found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>director</th>
              <th>movie</th>
            </tr>
          </thead>
          <tbody>
            {moviesDirectors.map((moviesDirectors, i) => (
              <MDTableRow key={moviesDirectors.movie_director_id} moviesDirectors={moviesDirectors}/>
            ))}
          </tbody>
        </table>
      )}
      </div>)}

    </div>
    
  );
};

export default MoviesTable;
