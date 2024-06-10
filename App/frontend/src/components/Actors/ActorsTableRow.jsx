//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of table elements to match our project's mySQL Actors table.
// The restrictions for deleting were added for our own project.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import axios from "axios";
import { BsTrash } from "react-icons/bs";

/* eslint-disable react/prop-types */
const TableRow = ({ actor, fetchActors, moviesActors, televisionsActors}) => {

  const deleteRow = async () => {
    let associated = false;
    moviesActors.map((val, i) => {if (val.actor === actor.actor_name)
      {if (associated === false){alert("Error: Cannot delete actor because it is associated with a Movie(s). Please delete the associated Movie(s) first."); associated = true;}
      else{
      return associated = true;}
      }
    });

    let associated2 = false;
    televisionsActors.map((val, i) => {if (val.actor === actor.actor_name)
      {if (associated2 === false){alert("Error: Cannot delete actor because it is associated with a TV show(s). Please delete the associated TV show(s) first."); associated2 = true;}
      else{
      return associated2 = true;}
      }
    });
    
    if ((associated === false) && (associated2 === false)){
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
    }
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
