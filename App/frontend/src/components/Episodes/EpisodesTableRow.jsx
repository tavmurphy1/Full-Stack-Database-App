//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of table elements to match our project's mySQL Engagements table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import axios from "axios";
import { BsTrash } from "react-icons/bs";

/* eslint-disable react/prop-types */
const TableRow = ({ episode, fetchEpisodes}) => {

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "episodes/" + episode.episode_id;
      const response = await axios.delete(URL);
      // Ensure that the episode was deleted successfully
      if (response.status === 204) {
        alert("Episode deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting episode");
      console.log(err);
    }
    fetchEpisodes();
  };

  return (
    <tr key={episode.episode_id}>
      <td>{episode.episode_id}</td>
      <td>{episode.episode_title}</td>
      <td>{episode.episode_length}</td>
      <td>{episode.television_name}</td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
