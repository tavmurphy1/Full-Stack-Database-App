//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of fetch requests and table elements to match our project's mySQL Engagements table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./EngagementsTableRow";
import axios from "axios";

const EngagementsTable = () => {
  const [engagements, setEngagements] = useState([]);

  const fetchEngagements = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "engagements";
      const response = await axios.get(URL);
      setEngagements(response.data);
    } catch (error) {
      alert("Error fetching engagements from the server.");
      console.error("Error fetching engagements:", error);
    }
  };

  useEffect(() => {
    fetchEngagements();
  }, []);

  return (
    <div>
      <h2>Engagements</h2>
      {engagements.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No engagements found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>favorited</th>
              <th>rating</th>
              <th>viewed</th>
              <th>user_id</th>
              <th>Movie</th>
              <th>TV Show</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {engagements.map((engagement, i) => (
              <TableRow key={engagement.engagement_id} engagement={engagement} fetchEngagements={fetchEngagements}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EngagementsTable;
