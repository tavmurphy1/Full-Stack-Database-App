import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ television, fetchTelevisions, fetchTelevisionGenreData, fetchTelevisionActorData, fetchTelevisionDirectorData }) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();
  // Redirect to edit television page
  const handleEdit = () => {
    // We can access the id (and query the tv show) with useParams() in the UpdateTelevision component
    navigate("/televisions/edit/" + television.television_id, { state: { television } });
  };

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisions/" + television.television_id;
      const response = await axios.delete(URL);
      // Ensure that the tv show was deleted successfully
      if (response.status === 204) {
        alert("TV show deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting TV show");
      console.log(err);
    }
    fetchTelevisions();
  };

  return (
    <tr key={television.television_id}>
      <td>{television.television_id}</td>
      <td>{television.television_title}</td>
      <td>{television.television_total_view}</td>
      <td>{fetchTelevisionGenreData}</td>
      <td>{fetchTelevisionActorData}</td>
      <td>{fetchTelevisionDirectorData}</td>
      <td>
        <BiEditAlt onClick={handleEdit} size={25} style={{ cursor: "pointer" }} />
      </td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
