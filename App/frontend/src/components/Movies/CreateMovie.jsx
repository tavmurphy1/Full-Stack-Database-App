//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of functions and table elements to match our project's mySQL Movies table.
// Dynamically created checkboxes have been implemented with our own code. Restrictions have been coded so that users have to select at least 1 genre, actor, and director to associate with a movie.
// We also wrote our own code to dynamically send multiple POST requests to create relationships with genres, actors, or directors in intersection tables.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateMovie() {
  const navigate = useNavigate();

  const [genreList, setGenreList] = useState([]);
  const [actorList, setActorList] = useState([]);
  const [directorList, setDirectorList] = useState([]);

  const [genreCheckboxCount, setGenreCheckboxCount] = useState({checkboxCount: 0, checkboxValid: false});
  const [actorCheckboxCount, setActorCheckboxCount] = useState({checkboxCount: 0, checkboxValid: false});
  const [directorCheckboxCount, setDirectorCheckboxCount] = useState({checkboxCount: 0, checkboxValid: false});

  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);

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

  const [formData, setFormData] = useState({
    movie_title: "",
    movie_length: ""
  });
  
  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();

    if(genreCheckboxCount.checkboxValid === true && actorCheckboxCount.checkboxValid === true && directorCheckboxCount.checkboxValid === true )
      {

    // Create a new movie object from the formData
    const newMovie = {
      movie_title: formData.movie_title,
      movie_length: formData.movie_length
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "movies";
      const response = await axios.post(URL, newMovie);
      if (response.status === 201) {
        alert("Movie was created");
      } else {
        alert("Error creating movie");
      }
    } catch (error) {
      alert("Error creating movie");
      console.error("Error creating movie:", error);
    }

    await Promise.all(genreList.map(async (val, i) => {
    try {
      // Create a new movie genre object from the formData
      const newMovieGenre = {
      movie_title: formData.movie_title,
      genre_name: val,
      };

      const URL = import.meta.env.VITE_API_URL + "movies" + "/moviegenre";
      const response = await axios.post(URL, newMovieGenre);
      if (response.status === 201) {
        alert("Movie Genre was created");
      } else {
        alert("Error creating movie genre");
      }
    } catch (error) {
      alert("Error creating movie genre");
      console.error("Error creating movie genre:", error);
      }
    }))

    await Promise.all(actorList.map(async (val, i) => {
    try {
      // Create a new movie actor object from the formData
      const newMovieActor = {
      movie_title: formData.movie_title,
      actor_name: val,
      };

      const URL = import.meta.env.VITE_API_URL + "movies" + "/movieactor";
      const response = await axios.post(URL, newMovieActor);
      if (response.status === 201) {
        alert("Movie Actor was created");
      } else {
        alert("Error creating movie actor");
      }
    } catch (error) {
      alert("Error creating movie actor");
      console.error("Error creating movie actor:", error);
      }
    }))

    await Promise.all(directorList.map(async (val, i) => {
    try {
      // Create a new movie director object from the formData
      const newMovieDirector = {
      movie_title: formData.movie_title,
      director_name: val,
      };

      const URL = import.meta.env.VITE_API_URL + "movies" + "/moviedirector";
      const response = await axios.post(URL, newMovieDirector);
      if (response.status === 201) {
        alert("Movie Director was created");
        navigate("/movies");
      } else {
        alert("Error creating movie director");
      }
    } catch (error) {
      alert("Error creating movie director");
      console.error("Error creating movie director:", error);
      }
    }))

    // Reset the form fields
    resetFormFields();
  }
    else{alert("Please check at least 1 box for genre, actor, and director");}
  };

  const resetFormFields = () => {
    setFormData({
      movie_title: "",
      movie_length: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChangeGenre = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    setGenreCheckboxCount({checkboxCount: genreCheckboxCount.checkboxCount + 1, checkboxValid: true})
    setGenreList(genreList.concat(value));
    }
    else {
      setGenreCheckboxCount({checkboxCount: genreCheckboxCount.checkboxCount - 1, checkboxValid: true})
      if (genreCheckboxCount.checkboxCount < 2){setGenreCheckboxCount({checkboxCount: genreCheckboxCount.checkboxCount = 0, checkboxValid: false})}
      setGenreList(genreList.filter(genre => genre !== value))
    }
  };

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
    fetchGenres(), fetchActors(), fetchDirectors();
  }, []);


  return (
    <>
      <h2>Create Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie_title">Title</label>
        <input
          type="text"
          name="movie_title"
          defaultValue={formData.movie_title}
          onChange={handleInputChange}
        />
        <label htmlFor="movie_length">Length</label>
        <input
          type="number"
          name="movie_length"
          defaultValue={formData.movie_length}
          onChange={handleInputChange}
        />
        
        <br></br>
        <br></br>
        <b>Genre(s)</b>
        <br></br>
        <br></br>
              {genres.map((val, i) => (<label key = {val.genre_id}> 
                {val.genre_name}
                <input type ="checkbox" name = "genre_name" value={val.genre_name} onChange={handleCheckboxChangeGenre}/>
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
                <input type ="checkbox" name = "actor_name" value={val.actor_name} onChange={handleCheckboxChangeActor}/>
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
                <input type ="checkbox" name = "director_name" value={val.director_name} onChange={handleCheckboxChangeDirector}/>
                </label>)
              )
            }
        <br></br>
        <br></br>
        <button type="submit">Create Movie</button>
      </form>
    </>
  );
}

export default CreateMovie;
