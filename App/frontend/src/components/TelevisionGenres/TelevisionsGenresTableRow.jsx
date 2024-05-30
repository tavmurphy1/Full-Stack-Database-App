import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ televisionsGenres }) => {
  // Hook that allows us to navigate programmatically

  return (
    <tr key={televisionsGenres.television_genre_id}>
      <td>{televisionsGenres.television_genre_id}</td>
      <td>{televisionsGenres.genre}</td>
      <td>{televisionsGenres.television}</td>
    </tr>
  );
};

export default TableRow;
