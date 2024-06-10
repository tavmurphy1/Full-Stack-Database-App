//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of functions and table elements to match our project's mySQL Engagements table.
// Fetch requests have been customized in order to create dropdown lists for Users, Movies, and TV Shows.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateEngagement() {
  const navigate = useNavigate();

  const [Users, setUsers] = useState([]);
  const [Movies, setMovies] = useState([]);
  const [TVShows, setTVShows] = useState([]);

  const fetchUsers = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "engagements" + "/users";
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      alert("Error fetching users from the server.");
      console.error("Error fetching users:", error);
    }
  };
  
  const fetchMovies = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "engagements" + "/movies";
      const response = await axios.get(URL);
      setMovies(response.data);
    } catch (error) {
      alert("Error fetching movies from the server.");
      console.error("Error fetching movies:", error);
    }
  };

  const fetchTVShows = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "engagements" + "/tvshows";
      const response = await axios.get(URL);
      setTVShows(response.data);
    } catch (error) {
      alert("Error fetching TV shows from the server.");
      console.error("Error fetching TV shows:", error);
    }
  };

  const [formData, setFormData] = useState({
    favorite: 0,
    rating: "",
    view: 0,
    user_id: "",
    movie_id: "",
    television_id: ""
  });
  
  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();

    // Create a new engagement object from the formData
    const newEngagement = {
      favorite: formData.favorite,
      rating: formData.rating,
      view: formData.view,
      user_id: formData.user_id,
      movie_id: formData.movie_id,
      television_id: formData.television_id
    };

    if(newEngagement.movie_id !== "" && newEngagement.television_id !== ""){
      alert("Cannot select both a movie and TV show.");
    }
      else{
    if(newEngagement.user_id === ""){
      alert("Must select a user.")}
    else{
    try {
      const URL = import.meta.env.VITE_API_URL + "engagements";
      const response = await axios.post(URL, newEngagement);
      if (response.status === 201) {
        alert("Engagement was created");
        navigate("/engagements");
      } else {
        alert("Error creating engagement");
      }
    } catch (error) {
      alert("Error creating engagement");
      console.error("Error creating engagement:", error);
    }
  }
    // Reset the form fields
    resetFormFields();
  }
  };

  const resetFormFields = () => {
    setFormData({
      favorite: 0,
      rating: "",
      view: 0,
      user_id: "",
      movie_id: "",
      television_id: ""
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
      setFormData((prevData) => ({
        ...prevData,
        [name]: 1,
      }));
    }
    else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
   
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownChangeUser = (e) => {
    const { name, value } = e.target;
    let id = "";
    Users.map((val, i) => {
                if (val.user_name === value){id = val.user_id}
      }
    )
    setFormData((prevData) => ({
      ...prevData,
      [name]: id,
    }));
  };

  const handleDropdownChangeMovie = (e) => {
    const { name, value } = e.target;
    let id = "";
    Movies.map((val, i) => {
                if (val.movie_title === value){id = val.movie_id}
      }
    )
    setFormData((prevData) => ({
      ...prevData,
      [name]: id,
    }));
  };

  const handleDropdownChangeTVShow = (e) => {
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
    fetchUsers(), fetchMovies(), fetchTVShows();
  }, []);


  let ratingList = [0,1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <h2>Create Engagement</h2>
      <form onSubmit={handleSubmit}>

        <label>Favorited?</label>
        <input type ="checkbox" name = "favorite" value={0} onChange={handleCheckboxChange}/>

        <label>Rating</label>
              <select name = "rating" defaultValue={formData.rating} onChange={handleDropdownChange}>            
              <option>&nbsp;</option>
              {ratingList.map((val, i) => (
                
                <option key = {val}  >{val}</option>
                )
              )
            }
            </select>

        <label>Viewed?</label>
        <input type ="checkbox" name = "view" value={0} onChange={handleCheckboxChange}/>

        <label>User_ID</label>
              <select name = "user_id" defaultValue={formData.user_id} onChange={handleDropdownChangeUser}>            
              <option>&nbsp;</option>
              {Users.map((val, i) => (
                
                <option key = {val.user_id}  >{val.user_name}</option>
                )
              )
            }
            </select>

        <label>Movie</label>
              <select name = "movie_id" defaultValue={formData.movie_id} onChange={handleDropdownChangeMovie}>            
              <option>&nbsp;</option>
              {Movies.map((val, i) => (
                
                <option key = {val.movie_id}  >{val.movie_title}</option>
                )
              )
            }
            </select>

        <label>TV Show</label>
              <select name = "television_id" defaultValue={formData.television_id} onChange={handleDropdownChangeTVShow}>            
              <option>&nbsp;</option>
              {TVShows.map((val, i) => (
                
                <option key = {val.television_id}  >{val.television_title}</option>
                )
              )
            }
            </select>

        <br></br>
        <br></br>
        <button type="submit">Create Engagement</button>
      </form>
    </>
  );
}

export default CreateEngagement;
