import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const MATableRow = ({ moviesActors }) => {
  // Hook that allows us to navigate programmatically

  return (
    <tr key={moviesActors.movie_actor_id}>
      <td>{moviesActors.movie_actor_id}</td>
      <td>{moviesActors.actor}</td>
      <td>{moviesActors.movie}</td>
    </tr>
  );
};

export default MATableRow;
