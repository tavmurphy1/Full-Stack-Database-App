import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ moviesDirectors }) => {
  // Hook that allows us to navigate programmatically

  return (
    <tr key={moviesDirectors.movie_director_id}>
      <td>{moviesDirectors.movie_director_id}</td>
      <td>{moviesDirectors.director}</td>
      <td>{moviesDirectors.movie}</td>
    </tr>
  );
};

export default TableRow;
