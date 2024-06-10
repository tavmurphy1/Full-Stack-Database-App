//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of table elements to match our project's mySQL Engagements table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import axios from "axios";
import { BsTrash } from "react-icons/bs";

/* eslint-disable react/prop-types */
const TableRow = ({ engagement, fetchEngagements }) => {

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "engagements/" + engagement.engagement_id;
      const response = await axios.delete(URL);
      // Ensure that the engagement was deleted successfully
      if (response.status === 204) {
        alert("Engagement deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting Engagement");
      console.log(err);
    }
    fetchEngagements();
  };

  return (
    <tr key={engagement.engagement_id}>
      <td>{engagement.engagement_id}</td>
      <td>{engagement.favorite}</td>
      <td>{engagement.rating}</td>
      <td>{engagement.view}</td>
      <td>{engagement.user_id}</td>
      <td>{engagement.movie_title}</td>
      <td>{engagement.television_title}</td>

      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
