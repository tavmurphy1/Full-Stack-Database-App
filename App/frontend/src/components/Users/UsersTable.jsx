//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of fetch requests and table elements to match our project's mySQL Users table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./UsersTableRow";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "users";
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      alert("Error fetching users from the server.");
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No users found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <TableRow key={user.user_id} user={user} fetchUsers={fetchUsers}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
