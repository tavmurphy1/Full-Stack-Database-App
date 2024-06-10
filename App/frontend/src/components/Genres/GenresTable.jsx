//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of fetch requests and table elements to match our project's mySQL Engagements table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./GenresTableRow";
import axios from "axios";

const GenresTable = () => {
  const [genres, setGenres] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [televisionsGenres, setTelevisionsGenres] = useState([]);

  const fetchGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "genres";
      const response = await axios.get(URL);
      setGenres(response.data);
    } catch (error) {
      alert("Error fetching genres from the server.");
      console.error("Error fetching genres:", error);
    }
  };

  const fetchMoviesGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "moviegenres";
      const response = await axios.get(URL);
      setMoviesGenres(response.data);
    } catch (error) {
      alert("Error fetching movie genres from the server.");
      console.error("Error fetching movie genres:", error);
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

  useEffect(() => {
    fetchGenres(), fetchMoviesGenres(), fetchTelevisionsGenres();
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      {genres.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No genres found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre, i) => (
              <TableRow key={genre.genre_id} genre={genre} fetchGenres={fetchGenres} moviesGenres={moviesGenres} televisionsGenres={televisionsGenres}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GenresTable;
