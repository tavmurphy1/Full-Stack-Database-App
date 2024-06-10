//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of functions and table elements to match our project's mySQL Actors table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateActor() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    actor_name: ""
  });

  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();

    // Create a new actor object from the formData
    const newActor = {
      actor_name: formData.actor_name
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "actors";
      const response = await axios.post(URL, newActor);
      if (response.status === 201) {
        alert("Actor was created");
        navigate("/actors");
      } else {
        alert("Error creating actor");
      }
    } catch (error) {
      alert("Error creating actor");
      console.error("Error creating actor:", error);
    }

    // Reset the form fields
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
      actor_name: ""
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
      <h2>Create Actor</h2>
      <form onSubmit={handleSubmit}>
      <>Which actor are you adding?</>
      <br></br>
      <br></br>
        <label htmlFor="actor_name">Name</label>
        <input
          type="text"
          name="actor_name"
          defaultValue={formData.actor_name}
          onChange={handleInputChange}
        />

        <button type="submit">Create Actor</button>
      </form>

      <br></br>

    </>
  );
}

export default CreateActor;
