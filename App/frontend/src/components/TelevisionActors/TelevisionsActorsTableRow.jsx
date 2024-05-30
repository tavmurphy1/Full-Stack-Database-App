import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ televisionsActors }) => {
  // Hook that allows us to navigate programmatically

  return (
    <tr key={televisionsActors.television_actor_id}>
      <td>{televisionsActors.television_actor_id}</td>
      <td>{televisionsActors.actor}</td>
      <td>{televisionsActors.television}</td>
    </tr>
  );
};

export default TableRow;
