import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ director, fetchDirectors}) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "directors/" + director.director_id;
      const response = await axios.delete(URL);
      // Ensure that the director was deleted successfully
      if (response.status === 204) {
        alert("Director deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting director");
      console.log(err);
    }
    fetchDirectors();
  };

  return (
    <tr key={director.director_id}>
      <td>{director.director_id}</td>
      <td>{director.director_name}</td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
