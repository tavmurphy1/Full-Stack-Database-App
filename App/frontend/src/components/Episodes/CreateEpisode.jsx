//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of functions and table elements to match our project's mySQL Episodes table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateEpisode() {
  const navigate = useNavigate();

  const [TVShows, setTVShows] = useState([]);

  const fetchTVShows = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "episodes" + "/tvshows";
      const response = await axios.get(URL);
      setTVShows(response.data);
    } catch (error) {
      alert("Error fetching genres from the server.");
      console.error("Error fetching genres:", error);
    }
  };

  const [formData, setFormData] = useState({
    episode_title: "",
    episode_length: "",
    television_id_ep: "",
  });

  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();

  
    // Create a new episode object from the formData
    const newEpisode = {
      episode_title: formData.episode_title,
      episode_length: formData.episode_length,
      television_id_ep: formData.television_id_ep
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "episodes";
      const response = await axios.post(URL, newEpisode);
      if (response.status === 201) {
        alert("Episode was created");
        navigate("/episodes");
      } else {
        alert("Error creating episode");
      }
    } catch (error) {
      alert("Error creating episode");
      console.error("Error creating episode:", error);
    }

    // Reset the form fields
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
      episode_title: "",
      episode_length: "",
      television_id_ep: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    let id = "";
    TVShows.map((val, i) => {
                if (val.television_title === value){id = val.television_id}
      }
    )
    setFormData((prevData) => ({
      ...prevData,
      [name]: id,
    }));
  };


  useEffect(() => {
    fetchTVShows();
  }, []);

  return (
    <>
      <h2>Create Episode</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="episode_title">Title</label>
        <input
          type="text"
          name="episode_title"
          defaultValue={formData.episode_title}
          onChange={handleInputChange}
        />
        <label htmlFor="episode_length">Length</label>
        <input
          type="number"
          name="episode_length"
          defaultValue={formData.episode_length}
          onChange={handleInputChange}
        />
        
        <br></br>
        <br></br>

        <label>TV Show</label>
              <select name = "television_id_ep" defaultValue={formData.television_id_ep} onChange={handleDropdownChange}>            
              <option>&nbsp;</option>
              {TVShows.map((val, i) => (
                
                <option key = {val.television_id}  >{val.television_title}</option>
                )
              )
            }
            </select>

        <button type="submit">Create Episode</button>
      </form>

      <br></br>

    </>
  );
}

export default CreateEpisode;
