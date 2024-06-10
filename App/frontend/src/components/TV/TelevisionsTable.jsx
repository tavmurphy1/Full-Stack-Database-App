//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of fetch requests and table elements to match our project's mySQL Televisions table.
// Intersection tables were also added to this component, including their fetch requests and table elements.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./TelevisionTableRow";
import TGTableRow from "./TelevisionsGenresTableRow";
import TATableRow from "./TelevisionsActorsTableRow";
import TDTableRow from "./TelevisionsDirectorsTableRow";
import axios from "axios";

const TelevisionsTable = () => {
  const [televisions, setTelevisions] = useState([]);
  const [televisionGenres, setTelevisionGenres] = useState([]);
  const [televisionActors, setTelevisionActors] = useState([]);
  const [televisionDirectors, setTelevisionDirectors] = useState([]);
  const [televisionsActors, setTelevisionsActors] = useState([]);
  const [televisionsGenres, setTelevisionsGenres] = useState([]);
  const [televisionsDirectors, setTelevisionsDirectors] = useState([]);

  const fetchTelevisions = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisions";
      const response = await axios.get(URL);
      setTelevisions(response.data);
    } catch (error) {
      alert("Error fetching TV shows from the server.");
      console.error("Error fetching TV shows:", error);
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
      setTelevisionGenres(response.data);
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
      setTelevisionActors(response.data);
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
      setTelevisionDirectors(response.data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching TelevisionDirector data:', error);
      alert('Error fetching TelevisionDirector data from the server.');
    }
  };

  const fetchTelevisionsActors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisionactors";
      const response = await axios.get(URL);
      setTelevisionsActors(response.data);
    } catch (error) {
      alert("Error fetching television actors from the server.");
      console.error("Error fetching television actors:", error);
    }
  };

  const fetchTelevisionsGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisiongenres";
      const response = await axios.get(URL);
      setTelevisionsGenres(response.data);
    } catch (error) {
      alert("Error fetching television genres from the server.");
      console.error("Error fetching television genres:", error);
    }
  };

  const fetchTelevisionsDirectors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisiondirectors";
      const response = await axios.get(URL);
      setTelevisionsDirectors(response.data);
    } catch (error) {
      alert("Error fetching television directors from the server.");
      console.error("Error fetching television directors:", error);
    }
  };

  useEffect(() => {
    fetchTelevisions(), fetchTelevisionGenreData(), fetchTelevisionActorData(), fetchTelevisionDirectorData(), fetchTelevisionsActors(), fetchTelevisionsGenres(), fetchTelevisionsDirectors();
  }, []);

  let genre = [];
  let televisionGenreID = [];
  let genreCounter = 0;
  televisionGenres.map((val, i) => {
        
        if (i > 0) {if(val.televisionID === televisionGenreID[i-1]){
            genre[genreCounter-1] = genre[genreCounter-1] + ', ' + val.genres
            televisionGenreID.push(val.televisionID)}
            else{
                genre.push(val.genres);
                televisionGenreID.push(val.televisionID);
                genreCounter += 1
                }
        }
        else {
            genre.push(val.genres)
            televisionGenreID.push(val.televisionID)
            genreCounter += 1
        }
});

let actor = [];
let televisionActorID = [];
let actorCounter = 0;

televisionActors.map((val, i) => {
      if (i > 0) {if(val.televisionID === televisionActorID[i-1]){
          actor[actorCounter-1] = actor[actorCounter-1] + ', ' + val.actors
          televisionActorID.push(val.televisionID)
          }
          else{
              actor.push(val.actors);
              televisionActorID.push(val.televisionID);
              actorCounter += 1
              }
      }
      else {
          actor.push(val.actors)
          televisionActorID.push(val.televisionID)
          actorCounter += 1
      }
});

let director = [];
let televisionDirectorID = [];
let directorCounter = 0;

televisionDirectors.map((val, i) => {
      if (i > 0) {if(val.televisionID === televisionDirectorID[i-1]){
          director[directorCounter-1] = director[directorCounter-1] + ', ' + val.directors
          televisionDirectorID.push(val.televisionID)
          }
          else{
              director.push(val.directors);
              televisionDirectorID.push(val.televisionID);
              directorCounter += 1
              }
      }
      else {
          director.push(val.directors)
          televisionDirectorID.push(val.televisionID)
          directorCounter += 1
      }
});

const [toggle, setToggle] = useState(true);

const handleClick = () => {
  setToggle(!toggle);
};

  return (
    <div>
      <h2>TV Shows</h2>
      {televisions.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No TV shows found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Total Views</th>
              <th>genre(s)</th>
              <th>actor(s)</th>
              <th>director(s)</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {televisions.map((television, i) => (
              <TableRow key={television.television_id} television={television} fetchTelevisions={fetchTelevisions} fetchTelevisionGenreData={genre[i]} 
fetchTelevisionActorData={actor[i]} fetchTelevisionDirectorData={director[i]} fetchTelevisionsGenres={fetchTelevisionsGenres} fetchTelevisionsDirectors={fetchTelevisionsDirectors} fetchTelevisionsActors={fetchTelevisionsActors}/>
            ))}
          </tbody>
        </table>
      )}

      <br></br>
      <button onClick={handleClick} >
          Show Intersection Tables</button>
      {toggle ? <></> : (
      <div>

      <h2>Television Genres</h2>
      {televisionsGenres.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No television genres found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>genre</th>
              <th>TV show</th>
            </tr>
          </thead>
          <tbody>
            {televisionsGenres.map((televisionsGenres, i) => (
              <TGTableRow key={televisionsGenres.television_genre_id} televisionsGenres={televisionsGenres}/>
            ))}
          </tbody>
        </table>
      )}

      <h2>Television Actors</h2>
      {televisionsActors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No television actors found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>actor</th>
              <th>TV show</th>
            </tr>
          </thead>
          <tbody>
            {televisionsActors.map((televisionsActors, i) => (
              <TATableRow key={televisionsActors.television_actor_id} televisionsActors={televisionsActors}/>
            ))}
          </tbody>
        </table>
      )}

      <h2>Television Directors</h2>
      {televisionsDirectors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No television directors found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>director</th>
              <th>TV show</th>
            </tr>
          </thead>
          <tbody>
            {televisionsDirectors.map((televisionsDirectors, i) => (
              <TDTableRow key={televisionsDirectors.television_director_id} televisionsDirectors={televisionsDirectors}/>
            ))}
          </tbody>
        </table>
      )}
      </div>)}

    </div>
  );
};

export default TelevisionsTable;
