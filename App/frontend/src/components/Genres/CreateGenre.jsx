import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateGenre() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    genre_name: ""
  });

  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();

    // Create a new genre object from the formData
    const newGenre = {
      genre_name: formData.genre_name
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "genres";
      const response = await axios.post(URL, newGenre);
      if (response.status === 201) {
        alert("Genre was created");
        navigate("/genres");
      } else {
        alert("Error creating genre");
      }
    } catch (error) {
      alert("Error creating genre");
      console.error("Error creating genre:", error);
    }

    // Reset the form fields
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
      genre_name: ""
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
      <h2>Create Genre</h2>
      <form onSubmit={handleSubmit}>
      <>What genre are you adding?</>
      <br></br>
      <br></br>
        <label htmlFor="genre_name">Name</label>
        <input
          type="text"
          name="genre_name"
          defaultValue={formData.genre_name}
          onChange={handleInputChange}
        />

        <button type="submit">Create Genre</button>
      </form>

      <br></br>

    </>
  );
}

export default CreateGenre;
