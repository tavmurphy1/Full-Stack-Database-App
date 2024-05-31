import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TDTableRow = ({ televisionsDirectors }) => {
  // Hook that allows us to navigate programmatically

  return (
    <tr key={televisionsDirectors.television_director_id}>
      <td>{televisionsDirectors.television_director_id}</td>
      <td>{televisionsDirectors.director}</td>
      <td>{televisionsDirectors.television}</td>
    </tr>
  );
};

export default TDTableRow;
