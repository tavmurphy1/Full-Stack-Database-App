//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of fetch requests and table elements to match our project's mySQL Episodes table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./EpisodesTableRow";
import axios from "axios";

const EpisodesTable = () => {
  const [episodes, setEpisodes] = useState([]);

  const fetchEpisodes = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "episodes";
      const response = await axios.get(URL);
      setEpisodes(response.data);
    } catch (error) {
      alert("Error fetching episodes from the server.");
      console.error("Error fetching episodes:", error);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return (
    <div>
      <h2>Episodes</h2>
      {episodes.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No episodes found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Episode</th>
              <th>Length</th>
              <th>TV Show</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, i) => (
              <TableRow key={episode.episode_id} episode={episode} fetchEpisodes={fetchEpisodes}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EpisodesTable;
