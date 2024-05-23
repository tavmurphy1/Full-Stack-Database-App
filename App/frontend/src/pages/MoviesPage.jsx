import { React } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';  // import the hooks you are going to use
import axios from 'axios';
import { RiTravestiLine } from 'react-icons/ri';

function Movies() {
      // useState hook to initialize the diagnosticData state variable to store the fetched data
  const [movieData, setMovieData] = useState([]);
  const [movieRelationships, setMovieRelationships] = useState([])

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
  const fetchMovieRelationshipData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'movies' + '/gad';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      setMovieRelationships(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching diagnostic data:', error);
      alert('Error fetching diagnostic data from the server.');
    }
  };

  // useEffect hook to trigger the fetchDiagnosticData function when the component mounts
  useEffect(() => {
    fetchMovieData(), fetchMovieRelationshipData();
  }, []);

  let genre = [];
  
  movieRelationships.map((val) => {
        genre.push(val.genres) 
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
                </tr>
            </thead>
                <tbody>
        
                {movieData.map((val, i) => {
                return <tr><td>{val.movie_id}</td>
                        <td>{val.movie_title}</td>
                        <td>{val.movie_length}</td>
                        <td>{val.movie_total_view}</td>
                        <td>{genre[i]}</td> 
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