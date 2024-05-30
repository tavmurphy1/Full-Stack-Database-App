import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ episode, fetchEpisodes}) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();

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
