import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ user, fetchUsers}) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "users/" + user.user_id;
      const response = await axios.delete(URL);
      // Ensure that the user was deleted successfully
      if (response.status === 204) {
        alert("User deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting usere");
      console.log(err);
    }
    fetchUsers();
  };

  return (
    <tr key={user.user_id}>
      <td>{user.user_id}</td>
      <td>{user.user_name}</td>
      <td>{user.user_email}</td>
      <td>{user.user_country}</td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
