import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateMovie() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    movie_title: "",
    movie_length: "",
    movie_total_view: ""
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
        navigate("/movies");
      } else {
        alert("Error creating movie");
      }
    } catch (error) {
      alert("Error creating movie");
      console.error("Error creating movie:", error);
    }
    // Reset the form fields
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
      movie_title: "",
      movie_length: "",
      movie_total_view: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
        <button type="submit">Create Movie</button>
      </form>
    </>
  );
}

export default CreateMovie;
