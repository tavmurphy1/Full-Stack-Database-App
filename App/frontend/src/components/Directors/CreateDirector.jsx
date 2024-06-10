//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of functions and table elements to match our project's mySQL DIrectors table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateDirector() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    director_name: ""
  });

  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();

    // Create a new director object from the formData
    const newDirector = {
      director_name: formData.director_name
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "directors";
      const response = await axios.post(URL, newDirector);
      if (response.status === 201) {
        alert("Director was created");
        navigate("/directors");
      } else {
        alert("Error creating director");
      }
    } catch (error) {
      alert("Error creating director");
      console.error("Error creating director:", error);
    }

    // Reset the form fields
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
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

  return (
    <>
      <h2>Create Director</h2>
      <form onSubmit={handleSubmit}>
      <>Which director are you adding?</>
      <br></br>
      <br></br>
        <label htmlFor="director_name">Name</label>
        <input
          type="text"
          name="director_name"
          defaultValue={formData.director_name}
          onChange={handleInputChange}
        />

        <button type="submit">Create Director</button>
      </form>

      <br></br>

    </>
  );
}

export default CreateDirector;
