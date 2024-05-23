import { React } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';  // import the hooks you are going to use
import axios from 'axios';
import { RiTravestiLine } from 'react-icons/ri';

function Movies() {
      // useState hook to initialize the diagnosticData state variable to store the fetched data
  const [movieData, setMovieData] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieActors, setMovieActors] = useState([]);
  const [movieDirectors, setMovieDirectors] = useState([]);

  // Define a function to fetch diagnostic data from the API
  const fetchMovieData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'movies';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setMovieData(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching diagnostic data:', error);
      alert('Error fetching diagnostic data from the server.');
    }
  };

  // Define a function to fetch diagnostic data from the API
  const fetchMovieGenreData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'movies' + '/genres';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setMovieGenres(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching diagnostic data:', error);
      alert('Error fetching diagnostic data from the server.');
    }
  };

  // Define a function to fetch diagnostic data from the API
  const fetchMovieActorData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'movies' + '/actors';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setMovieActors(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching diagnostic data:', error);
      alert('Error fetching diagnostic data from the server.');
    }
  };

  // Define a function to fetch diagnostic data from the API
  const fetchMovieDirectorData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'movies' + '/directors';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setMovieDirectors(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching diagnostic data:', error);
      alert('Error fetching diagnostic data from the server.');
    }
  };

  // useEffect hook to trigger the fetchDiagnosticData function when the component mounts
  useEffect(() => {
    fetchMovieData(), fetchMovieGenreData(), fetchMovieActorData(), fetchMovieDirectorData();
  }, []);

  let genre = [];
  let movieGenreID = [];
  
  movieGenres.map((val, i) => {
        if (i > 0) {if(val.movieID === movieGenreID[i-1]){
            genre[i-1] = genre[i-1] + ', ' + val.genres}
            else{
                genre.push(val.genres);
                movieGenreID.push(val.movieID);
                }
        }
        else {
            genre.push(val.genres)
            movieGenreID.push(val.movieID)
        }
});

let actor = [];
let movieActorID = [];

movieActors.map((val, i) => {
      if (i > 0) {if(val.movieID === movieActorID[i-1]){
          actor[i-1] = actor[i-1] + ', ' + val.actors}
          else{
              actor.push(val.actors);
              movieActorID.push(val.movieID);
              }
      }
      else {
          actor.push(val.actors)
          movieActorID.push(val.movieID)
      }
});

let director = [];
let movieDirectorID = [];

movieDirectors.map((val, i) => {
      if (i > 0) {if(val.movieID === movieDirectorID[i-1]){
          director[i-1] = director[i-1] + ', ' + val.directors}
          else{
              director.push(val.directors);
              movieDirectorID.push(val.movieID);
              }
      }
      else {
          director.push(val.directors)
          movieDirectorID.push(val.movieID)
      }
});


    return(
        <>
            <h2>Movies</h2>
            
            <table id="movies">
            <thead>
                <tr>
                    <th>movie_id</th>
                    <th>Movie</th>
                    <th>Length</th>
                    <th>Total Views</th> 
                    <th>genre(s)</th>
                    <th>actor(s)</th>
                    <th>director(s)</th>
                </tr>
            </thead>
                <tbody>
        
                {movieData.map((val, i) => {
                return <tr><td>{val.movie_id}</td>
                        <td>{val.movie_title}</td>
                        <td>{val.movie_length}</td>
                        <td>{val.movie_total_view}</td>
                        <td>{genre[i]}</td>
                        <td>{actor[i]}</td>
                        <td>{director[i]}</td>
                        </tr>
            })}
            
            
                </tbody>
            </table>
            
            <article>
                <table id="movies">
                    <thead>
                        <tr>
                            <th>movie_id</th>
                            <th>Movie</th>
                            <th>Length</th>
                            <th>Total Views</th>
                            <th>genre(s)</th>
                            <th>actor(s)</th>
                            <th>director(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>The Godfather</td>
                            <td>175</td>
                            <td>0</td>
                            <td>
                                drama
                                <br/>
                                crime
                            </td>
                            <td>Al Pacino</td>
                            <td>Francis Ford Coppola</td>
                        </tr>
                    </tbody>
                </table>
                
            </article>
            <Link to="/movies_new">Add New Movie</Link>

        </>
    )
}
export default Movies;