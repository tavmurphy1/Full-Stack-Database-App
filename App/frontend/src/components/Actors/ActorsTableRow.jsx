import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ actor, fetchActors}) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "actors/" + actor.actor_id;
      const response = await axios.delete(URL);
      // Ensure that the actor was deleted successfully
      if (response.status === 204) {
        alert("Actor deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting actor");
      console.log(err);
    }
    fetchActors();
  };

  return (
    <tr key={actor.actor_id}>
      <td>{actor.actor_id}</td>
      <td>{actor.actor_name}</td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
