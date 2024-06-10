//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of table elements to match our project's mySQL Users table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import axios from "axios";
import { BsTrash } from "react-icons/bs";

/* eslint-disable react/prop-types */
const TableRow = ({ user, fetchUsers}) => {

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "users/" + user.user_id;
      const response = await axios.delete(URL);
      // Ensure that the user was deleted successfully
      if (response.status === 204) {
        alert("User deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting user");
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
