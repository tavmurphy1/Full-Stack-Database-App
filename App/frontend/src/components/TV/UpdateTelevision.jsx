//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of functions and table elements to match our project's mySQL Televisions table.
// Dynamically created checkboxes have been implemented with our own code. Checkboxes are pre-checked based on old M:M relationships from intersection tables.
// We also wrote our own code to dynamically send multiple PUT requests to update relationships with genres, actors, or directors in intersection tables.
// Users are restricted to select only the same amount of existing genres, actors, or directors in order to update the correct M:M relationships.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateTelevision = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevTelevision = location.state.television;

  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);

  const [genresChecked, setGenresChecked] = useState({
    genres: [],
    checkboxes: []
  });

  const [actorsChecked, setActorsChecked] = useState({
    actors: [],
    checkboxes: []
  });

  const [directorsChecked, setDirectorsChecked] = useState({
    directors: [],
    checkboxes: []
  });

  const [televisionGenresIDList, setTelevisionGenresIDList] = useState([]);
  const [televisionActorsIDList, setTelevisionActorsIDList] = useState([]);
  const [televisionDirectorsIDList, setTelevisionDirectorsIDList] = useState([]);


  const [genreCheckboxCount, setGenreCheckboxCount] = useState();
  const [actorCheckboxCount, setActorCheckboxCount] = useState();
  const [directorCheckboxCount, setDirectorCheckboxCount] = useState();

  const fetchTelevisionGenreIDs = async (response) => {
    let televisionGenresIDList = []
    response.map((val, i) => {
    if (val.televisionID === prevTelevision.television_id)
      {televisionGenresIDList.push(val.television_genre_id);}
    })
    setTelevisionGenresIDList(() => (
      televisionGenresIDList
    ))
  };

  
  let genresList = [];
  const fetchGenreCheckboxes = async (response) => {
    
      response.map( (val, i) => {
      genresList.push(val.genre_name);
    });
    
    setGenresChecked((prevGenresChecked) => ({
      ...prevGenresChecked,
      genres: genresList
    }))
  };

  const fetchGenreCheckboxesBool = async (response) => {
    let checkboxesList = [];
    let checked = 0;
    let countList = 0;
      genresList.map( (val, i) => {
        response.map( (val2, i2) => {
        if(prevTelevision.television_id === val2.televisionID && val2.genres === val)
          {checkboxesList.push(true);
            checked = 1;
            countList += 1;
          }
      
    });
    
    if(checked !== 1){checkboxesList.push(false);}
    else{ checked = 0;};
    });
    
    setGenresChecked((prevGenresChecked) => ({
      ...prevGenresChecked,
      checkboxes: checkboxesList
    }))

    setGenreCheckboxCount(
      countList
    )
  };
  
  const fetchTelevisionActorIDs = async (response) => {
    let televisionActorsIDList = []
    response.map((val, i) => {
    if (val.televisionID === prevTelevision.television_id)
      {televisionActorsIDList.push(val.television_actor_id);}
    })
    setTelevisionActorsIDList(() => (
      televisionActorsIDList
    ))
  };

  
  let actorsList = [];
  const fetchActorsCheckboxes = async (response) => {
    
      response.map( (val, i) => {
      actorsList.push(val.actor_name);
    });
    
    setActorsChecked((prevActorsChecked) => ({
      ...prevActorsChecked,
      actors: actorsList
    }))
  };

  const fetchActorCheckboxesBool = async (response) => {
    let checkboxesList = [];
    let checked = 0;
    let countList = 0;
      actorsList.map( (val, i) => {
        response.map( (val2, i2) => {
        if(prevTelevision.television_id === val2.televisionID && val2.actors === val)
          {checkboxesList.push(true);
            checked = 1;
            countList += 1;
          }
      
    });
    
    if(checked !== 1){checkboxesList.push(false);}
    else{ checked = 0;};
    });
    
    setActorsChecked((prevActorsChecked) => ({
      ...prevActorsChecked,
      checkboxes: checkboxesList
    }))

    setActorCheckboxCount(
      countList
    )
  };
  
  const fetchTelevisionDirectorIDs = async (response) => {
    let televisionDirectorsIDList = []
    response.map((val, i) => {
    if (val.televisionID === prevTelevision.television_id)
      {televisionDirectorsIDList.push(val.television_director_id);}
    })
    setTelevisionDirectorsIDList(() => (
      televisionDirectorsIDList
    ))
  };

  
  let directorsList = [];
  const fetchDirectorCheckboxes = async (response) => {
    
      response.map( (val, i) => {
        directorsList.push(val.director_name);
    });
    
    setDirectorsChecked((prevDirectorsChecked) => ({
      ...prevDirectorsChecked,
      directors: directorsList
    }))
  };

  const fetchDirectorCheckboxesBool = async (response) => {
    let checkboxesList = [];
    let checked = 0;
    let countList = 0;
    directorsList.map( (val, i) => {
        response.map( (val2, i2) => {
        if(prevTelevision.television_id === val2.televisionID && val2.directors === val)
          {checkboxesList.push(true);
            checked = 1;
            countList += 1;
          }
      
    });
    
    if(checked !== 1){checkboxesList.push(false);}
    else{ checked = 0;};
    });
    
    setDirectorsChecked((prevDirectorsChecked) => ({
      ...prevDirectorsChecked,
      checkboxes: checkboxesList
    }))

    setDirectorCheckboxCount(
      countList
    )
  };
  
  const fetchGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisions" + "/genres";
      const response = await axios.get(URL);
      setGenres(response.data);
      fetchGenreCheckboxes(response.data);
    } catch (error) {
      alert("Error fetching genres from the server.");
      console.error("Error fetching genres:", error);
    }
  };

  const fetchActors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisions" + "/actors";
      const response = await axios.get(URL);
      setActors(response.data);
      fetchActorsCheckboxes(response.data);
    } catch (error) {
      alert("Error fetching actors from the server.");
      console.error("Error fetching actors:", error);
    }
  };

  const fetchDirectors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisions" + "/directors";
      const response = await axios.get(URL);
      setDirectors(response.data);
      fetchDirectorCheckboxes(response.data);
    } catch (error) {
      alert("Error fetching directors from the server.");
      console.error("Error fetching directors:", error);
    }
  };

  // Define a function to fetch Televisions_Genres data from the API
  const fetchTelevisionGenreData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'televisions' + '/televisiongenres';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      fetchGenreCheckboxesBool(response.data);
      fetchTelevisionGenreIDs(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching TelevisionGenre data:', error);
      alert('Error fetching TelevisionGenre data from the server.');
    }
  };

  // Define a function to fetch Televisions_Actors data from the API
  const fetchTelevisionActorData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'televisions' + '/televisionactors';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      fetchActorCheckboxesBool(response.data);
      fetchTelevisionActorIDs(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching TelevisionActor data:', error);
      alert('Error fetching TelevisionActor data from the server.');
    }
  };

  // Define a function to fetch Televisions_Directors data from the API
  const fetchTelevisionDirectorData = async () => {
    try {
      // Construct the URL for the API call
      const URL = import.meta.env.VITE_API_URL + 'televisions' + '/televisiondirectors';
      // Use Axios to make the GET request
      const response = await axios.get(URL);
      // Update state with the response data
      fetchDirectorCheckboxesBool(response.data);
      fetchTelevisionDirectorIDs(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching TelevisionDirector data:', error);
      alert('Error fetching TelevisionDirector data from the server.');
    }
  };

  const [formData, setFormData] = useState({
    television_title: prevTelevision.television_title || ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function isUpdate(){
    // Check if formData is equal to prevTelevision
    if (JSON.stringify(formData) === JSON.stringify({
      television_title: prevTelevision.television_title || ''
    })) {
      alert("No changes made to TV show details.");
      return false;
    }
    return true
  }

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    // Check if formData is equal to prevTelevision
    if (genreCheckboxCount !== televisionGenresIDList.length){alert("Error: Must pick same number of genres to update."); return}
    if (actorCheckboxCount !== televisionActorsIDList.length){alert("Error: Must pick same number of actors to update."); return}
    if (directorCheckboxCount !== televisionDirectorsIDList.length){alert("Error: Must pick same number of directors to update."); return}
    
    if (isUpdate()){
      try {
        const URL = import.meta.env.VITE_API_URL + "televisions/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating TV show");
        } else {
          alert(response.data.message);
          if(genreCheckboxCount === televisionGenresIDList.length && actorCheckboxCount === televisionActorsIDList.length && directorCheckboxCount === televisionDirectorsIDList.length){    
            // Redirect to televisions page
            navigate("/televisions");}
        }
      } catch (err) {
        console.log("Error updating TV show:", err);
      }
    }
    
    else{

    await Promise.all(televisionGenresIDList.map(async (val, i) => {

      let genreIdList = [];
      genresChecked.checkboxes.map(async (val2, i2) => {
        if(val2 === true){genreIdList.push(genres[i2].genre_id)}
      });

      let genreData = {
        television_id_tg: prevTelevision.television_id,
        genre_id_tg: genreIdList[i]
      };
      
    try {
      const URL = import.meta.env.VITE_API_URL + "televisions/" + "televisiongenres/" + val;
      const response = await axios.put(URL, genreData);
      if (response.status !== 200) {
        alert("Error updating Television Genre(s)");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log("Error updating Television genre(s):", err);
    }
    }))

  await Promise.all(televisionActorsIDList.map(async (val, i) => {

    let actorIdList = [];
    actorsChecked.checkboxes.map(async (val2, i2) => {
      if(val2 === true){actorIdList.push(actors[i2].actor_id)}
    });

    let actorData = {
      television_id_ta: prevTelevision.television_id,
      actor_id_ta: actorIdList[i]
    };
    
  try {
    const URL = import.meta.env.VITE_API_URL + "televisions/" + "televisionactors/" + val;
    const response = await axios.put(URL, actorData);
    if (response.status !== 200) {
      alert("Error updating Television Actor(s)");
    } else {
      alert(response.data.message);
    }
  } catch (err) {
    console.log("Error updating Television actor(s):", err);
  }
  }))

  await Promise.all(televisionDirectorsIDList.map(async (val, i) => {

  let directorIdList = [];
  directorsChecked.checkboxes.map(async (val2, i2) => {
    if(val2 === true){directorIdList.push(directors[i2].director_id)}
  });

  let directorData = {
    television_id_td: prevTelevision.television_id,
    director_id_td: directorIdList[i]
  };
  
  try {
  const URL = import.meta.env.VITE_API_URL + "televisions/" + "televisiondirectors/" + val;
  const response = await axios.put(URL, directorData);
  if (response.status !== 200) {
    alert("Error updating Television Director(s)");
  } else {
    alert(response.data.message);
    // Redirect to televisions page
    navigate("/televisions");
  }
  } catch (err) {
  console.log("Error updating Television director(s):", err);
  }
  }))

  }
  };

  const handleCheckboxChangeGenre = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    let nextCount = genreCheckboxCount + 1; 
    setGenreCheckboxCount(() => (
      nextCount));

    let checkboxesList = [];
    genresChecked.genres.map( (val, i) => {
      if (val === e.target.value){
        checkboxesList.push(!genresChecked.checkboxes[i]);
      }
      else{
        checkboxesList.push(genresChecked.checkboxes[i])
      };
    });
    setGenresChecked((prevGenresChecked) => ({
      ...prevGenresChecked,
      checkboxes: checkboxesList
    }))
    }
    else {
      let nextCount = genreCheckboxCount - 1; 
      setGenreCheckboxCount(() => (
      nextCount));

      let checkboxesList = [];
      genresChecked.genres.map( (val, i) => {
        if (val === e.target.value){
          checkboxesList.push(!genresChecked.checkboxes[i]);
        }
        else{
          checkboxesList.push(genresChecked.checkboxes[i])
        };
      });
      setGenresChecked((prevGenresChecked) => ({
        ...prevGenresChecked,
        checkboxes: checkboxesList
      }))
    }
  };
  
  const handleCheckboxChangeActor = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    let nextCount = actorCheckboxCount + 1; 
    setActorCheckboxCount(() => (
      nextCount));

    let checkboxesList = [];
    actorsChecked.actors.map( (val, i) => {
      if (val === e.target.value){
        checkboxesList.push(!actorsChecked.checkboxes[i]);
      }
      else{
        checkboxesList.push(actorsChecked.checkboxes[i])
      };
    });
    setActorsChecked((prevActorsChecked) => ({
      ...prevActorsChecked,
      checkboxes: checkboxesList
    }))
    }
    else {
      let nextCount = actorCheckboxCount - 1; 
      setActorCheckboxCount(() => (
      nextCount));

      let checkboxesList = [];
      actorsChecked.actors.map( (val, i) => {
        if (val === e.target.value){
          checkboxesList.push(!actorsChecked.checkboxes[i]);
        }
        else{
          checkboxesList.push(actorsChecked.checkboxes[i])
        };
      });
      setActorsChecked((prevActorsChecked) => ({
        ...prevActorsChecked,
        checkboxes: checkboxesList
      }))
    }
  };

  const handleCheckboxChangeDirector = (e) => {
    const { name, value } = e.target;
    if (e.target.checked){
    let nextCount = directorCheckboxCount + 1;
    setDirectorCheckboxCount(() => (
      nextCount));

    let checkboxesList = [];
    directorsChecked.directors.map( (val, i) => {
      if (val === e.target.value){
        checkboxesList.push(!directorsChecked.checkboxes[i]);
      }
      else{
        checkboxesList.push(directorsChecked.checkboxes[i])
      };
    });
    setDirectorsChecked((prevDirectorsChecked) => ({
      ...prevDirectorsChecked,
      checkboxes: checkboxesList
    }))
    }
    else {
      let nextCount = directorCheckboxCount - 1;
      setDirectorCheckboxCount(() => (
      nextCount));

      let checkboxesList = [];
      directorsChecked.directors.map( (val, i) => {
        if (val === e.target.value){
          checkboxesList.push(!directorsChecked.checkboxes[i]);
        }
        else{
          checkboxesList.push(directorsChecked.checkboxes[i])
        };
      });
      setDirectorsChecked((prevDirectorsChecked) => ({
        ...prevDirectorsChecked,
        checkboxes: checkboxesList
      }))
    }
  };

  useEffect(() => {
    fetchGenres(), fetchActors(), fetchDirectors(), fetchTelevisionGenreData(), fetchTelevisionActorData(), fetchTelevisionDirectorData();
  }, []);

  useEffect(() => {

    if(genresChecked.checkboxes.length === 0){fetchTelevisionGenreData()};
  
  }, []);

  useEffect(() => {

    if(actorsChecked.checkboxes.length === 0){fetchTelevisionActorData()};
  
  }, []);

  useEffect(() => {

    if(directorsChecked.checkboxes.length === 0){fetchTelevisionDirectorData()};
  
  }, []);
  

  return (
    <div>
      <h2>Update TV show</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="television_title"
            onChange={handleInputChange}
            required
            defaultValue={prevTelevision.television_title}
          />
        </div>

        <br></br>
        <br></br>
        <b>Genre(s)</b>
        <br></br>
        <br></br>
              {genres.map((val, i) => (<label key = {val.genre_id}> 
              
                {val.genre_name}
                <input type ="checkbox" name = "genre_name" value={val.genre_name} checked = {genresChecked.checkboxes[i] || ""} onChange={handleCheckboxChangeGenre}/>
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
                <input type ="checkbox" name = "actor_name" value={val.actor_name} checked = {actorsChecked.checkboxes[i] || ""} onChange={handleCheckboxChangeActor}/>
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
                <input type ="checkbox" name = "director_name" value={val.director_name} checked = {directorsChecked.checkboxes[i] || ""} onChange={handleCheckboxChangeDirector}/>
                </label>)
              )
            }
        <br></br>
        <br></br>

        <button type="button" onClick={() => navigate("/televisions")}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateTelevision;

