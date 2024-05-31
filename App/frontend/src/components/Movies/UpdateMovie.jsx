import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevMovie = location.state.movie;

  const [genreList, setGenreList] = useState([]);
  const [actorList, setActorList] = useState([]);
  const [directorList, setDirectorList] = useState([]);

  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);

  const [movieGenres, setMovieGenres] = useState([]);
  const [movieActors, setMovieActors] = useState([]);
  const [movieDirectors, setMovieDirectors] = useState([]);
  
  let movieGenresIDList = []
  movieGenres.map((val, i) => {
  if (val.movieID === prevMovie.movie_id)
    {movieGenresIDList.push(val.movie_genre_id);}
  })
  let genresIDLength = movieGenresIDList.length
  
  console.log(movieGenresIDList);
  console.log(genresIDLength);

  const [genreCheckboxCount, setGenreCheckboxCount] = useState({checkboxCount: genresIDLength, checkboxValid: false});
  const [actorCheckboxCount, setActorCheckboxCount] = useState({checkboxCount: 0, checkboxValid: false});
  const [directorCheckboxCount, setDirectorCheckboxCount] = useState({checkboxCount: 0, checkboxValid: false});

  const fetchGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "movies" + "/genres";
      const response = await axios.get(URL);
      setGenres(response.data);
    } catch (error) {
      alert("Error fetching genres from the server.");
      console.error("Error fetching genres:", error);
    }
  };

  const fetchActors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "movies" + "/actors";
      const response = await axios.get(URL);
      setActors(response.data);
    } catch (error) {
      alert("Error fetching actors from the server.");
      console.error("Error fetching actors:", error);
    }
  };

  const fetchDirectors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "movies" + "/directors";
      const response = await axios.get(URL);
      setDirectors(response.data);
    } catch (error) {
      alert("Error fetching directors from the server.");
      console.error("Error fetching directors:", error);
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

  const [formData, setFormData] = useState({
    movie_title: prevMovie.movie_title || '',
    movie_length: prevMovie.movie_length || '',
    movie_total_view: prevMovie.movie_total_view || ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function isUpdate(){
    // Check if formData is equal to prevMovie
    if (JSON.stringify(formData) === JSON.stringify({
      movie_title: prevMovie.movie_title || '',
      movie_length: prevMovie.movie_length || '',
      movie_total_view: prevMovie.movie_total_view || ''
    })) {
      alert("No changes made.");
      return false;
    }
    return true
  }

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    // Check if formData is equal to prevMovie
    if (isUpdate()){
      try {
        const URL = import.meta.env.VITE_API_URL + "movies/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating Movie");
        } else {
          alert(response.data.message);
          // Redirect to movies page
          navigate("/movies");
        }
      } catch (err) {
        console.log("Error updating Movie:", err);
      }
    }
  };

  const handleCheckboxChangeGenre = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    setGenreCheckboxCount({checkboxCount: genreCheckboxCount.checkboxCount + 1, checkboxValid: true})
    setGenreList(genreList.concat(value));
    }
    else {
      setGenreCheckboxCount({checkboxCount: genreCheckboxCount.checkboxCount - 1, checkboxValid: true})
      if (genreCheckboxCount.checkboxCount !== movieGenresIDList.length){setGenreCheckboxCount({checkboxCount: genreCheckboxCount.checkboxCount = genreCheckboxCount.checkboxCount, checkboxValid: false})}
      setGenreList(genreList.filter(genre => genre !== value))
    }
  };
  console.log(genreCheckboxCount)
  const handleCheckboxChangeActor = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    setActorCheckboxCount({checkboxCount: actorCheckboxCount.checkboxCount + 1, checkboxValid: true})
    setActorList(actorList.concat(value));
    }
    else {
      setActorCheckboxCount({checkboxCount: actorCheckboxCount.checkboxCount - 1, checkboxValid: true})
      if (actorCheckboxCount.checkboxCount < 2){setActorCheckboxCount({checkboxCount: actorCheckboxCount.checkboxCount = 0, checkboxValid: false})}
      setActorList(actorList.filter(actor => actor !== value))
    }
  };

  const handleCheckboxChangeDirector = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    setDirectorCheckboxCount({checkboxCount: directorCheckboxCount.checkboxCount + 1, checkboxValid: true})
    setDirectorList(directorList.concat(value));
    }
    else {
      setDirectorCheckboxCount({checkboxCount: directorCheckboxCount.checkboxCount - 1, checkboxValid: true})
      if (directorCheckboxCount.checkboxCount < 2){setDirectorCheckboxCount({checkboxCount: directorCheckboxCount.checkboxCount = 0, checkboxValid: false})}
      setDirectorList(directorList.filter(director => director !== value))
    }
  };

  useEffect(() => {
    fetchGenres(), fetchActors(), fetchDirectors(), fetchMovieGenreData(), fetchMovieActorData(), fetchMovieDirectorData();
  }, []);

  function checkedG(name) {
    let temp = 0 
    movieGenres.map((val, i) => {if(prevMovie.movie_id === val.movieID && val.genres === name){temp = true}}); 
    if(temp === true){return (true)}
    return false
  }

  function checkedA(name) {
    let temp = 0 
    movieActors.map((val, i) => {if(prevMovie.movie_id === val.movieID && val.actors === name){temp = true}}); 
    
    if(temp === true){return (true)}
    return false
  }

  function checkedD(name) {
    let temp = 0 
    movieDirectors.map((val, i) => {if(prevMovie.movie_id === val.movieID && val.directors === name){temp = true}}); 
    
    if(temp === true){return (true)}
    return false
  }

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="movie_title"
            onChange={handleInputChange}
            required
            defaultValue={prevMovie.movie_title}
          />
        </div>
        <div>
          <label>Length:</label>
          <input
            type="number"
            name="movie_length"
            onChange={handleInputChange}
            required
            defaultValue={prevMovie.movie_length}
          />
        </div>
        <div>
          <label>Total Views:</label>
          <input
            type="number"
            name="movie_total_view"
            onChange={handleInputChange}
            required
            defaultValue={prevMovie.movie_total_view}
          />
        </div>

        <br></br>
        <br></br>
        <b>Genre(s)</b>
        <br></br>
        <br></br>
              {genres.map((val, i) => (<label key = {val.genre_id}> 
              
                {val.genre_name}
                <input type ="checkbox" name = "genre_name" value={val.genre_name} defaultChecked = {checkedG(val.genre_name)} onChange={handleCheckboxChangeGenre}/>
                </label>)
              )
            }
        <br></br>
        <br></br>
        <b>Actor(s)</b>
        <br></br>
        <br></br>
              {actors.map((val, i) => (<label key = {val.actor_id}> 
                {val.actor_name}
                <input type ="checkbox" name = "actor_name" value={val.actor_name} defaultChecked = {checkedA(val.actor_name)} onChange={handleCheckboxChangeActor}/>
                </label>)
              )
            }
        <br></br>
       <br></br>
        <b>Director(s)</b>
        <br></br>
        <br></br>
              {directors.map((val, i) => (<label key = {val.director_id}> 
                {val.director_name}
                <input type ="checkbox" name = "director_name" value={val.director_name} defaultChecked = {checkedD(val.director_name)} onChange={handleCheckboxChangeDirector}/>
                </label>)
              )
            }
        <br></br>
        <br></br>

        <button type="button" onClick={() => navigate("/movies")}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;

