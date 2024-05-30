import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ moviesGenres }) => {
  // Hook that allows us to navigate programmatically

  return (
    <tr key={moviesGenres.movie_genre_id}>
      <td>{moviesGenres.movie_genre_id}</td>
      <td>{moviesGenres.genre}</td>
      <td>{moviesGenres.movie}</td>
    </tr>
  );
};

export default TableRow;
