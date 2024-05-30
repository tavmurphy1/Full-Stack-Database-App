import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ genre, fetchGenres}) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "genres/" + genre.genre_id;
      const response = await axios.delete(URL);
      // Ensure that the genre was deleted successfully
      if (response.status === 204) {
        alert("Genre deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting genre");
      console.log(err);
    }
    fetchGenres();
  };

  return (
    <tr key={genre.genre_id}>
      <td>{genre.genre_id}</td>
      <td>{genre.genre_name}</td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
