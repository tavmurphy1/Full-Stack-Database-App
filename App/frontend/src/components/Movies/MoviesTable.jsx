import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./MovieTableRow";
import axios from "axios";

const MoviesTable = () => {
  const [movies, setMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieActors, setMovieActors] = useState([]);
  const [movieDirectors, setMovieDirectors] = useState([]);

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

  useEffect(() => {
    fetchMovies(), fetchMovieGenreData(), fetchMovieActorData(), fetchMovieDirectorData();
  }, []);

  let genre = [];
  let movieGenreID = [];
  let genreCounter = 0;
  movieGenres.map((val, i) => {
        
        if (i > 0) {if(val.movieID === movieGenreID[i-1]){
            genre[genreCounter-1] = genre[genreCounter-1] + ', ' + val.genres
            movieGenreID.push(val.movieID)
          console.log(genre[i-1])}
            else{
                genre.push(val.genres);
                console.log(genre)
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
              <TableRow key={movie.movie_id} movie={movie} fetchMovies={fetchMovies} fetchMovieGenreData={genre[i]} fetchMovieActorData={actor[i]} fetchMovieDirectorData={director[i]}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoviesTable;
