import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevMovie = location.state.movie;

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
        <button type="button" onClick={() => navigate("/movies")}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;

