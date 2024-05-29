import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateMovie() {
  const navigate = useNavigate();

  const [genreList, setGenreList] = useState([]);
  const [actorList, setActorList] = useState([]);
  const [directorList, setDirectorList] = useState([]);

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
    movie_length: "",
    movie_total_view: ""
  });

  const [checkboxData, setCheckboxData] = useState({
    genre_name: "",
    actor_name: "",
    director_name: ""
  });
  
  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();
    // Create a new movie object from the formData
    const newMovie = {
      movie_title: formData.movie_title,
      movie_length: formData.movie_length,
      movie_total_view: formData.movie_total_view
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
      console.log(val)
      // Create a new movie genre object from the formData
      const newMovieGenre = {
      movie_title: formData.movie_title,
      genre_name: val,
      };
      console.log(newMovieGenre)

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
    resetCheckboxFields();
  };

  const resetFormFields = () => {
    setFormData({
      movie_title: "",
      movie_length: "",
      movie_total_view: ""
    });
  };

  const resetCheckboxFields = () => {
    setCheckboxData({
      genre_name: "",
      actor_name: "",
      director_name: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setCheckboxData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChangeGenre = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    console.log(value);
    setGenreList(genreList.concat(value));
    }
    else {
      setGenreList(genreList.filter(genre => genre !== value))
    }
  };
  console.log(genreList);

  const handleCheckboxChangeActor = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    console.log(value);
    setActorList(actorList.concat(value));
    }
    else {
      setActorList(actorList.filter(actor => actor !== value))
    }
  };

  const handleCheckboxChangeDirector = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    console.log(value);
    setDirectorList(directorList.concat(value));
    }
    else {
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
        <label htmlFor="movie_total_view">Total Views</label>
        <input
          type="number"
          name="movie_total_view"
          value={formData.movie_total_view}
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
