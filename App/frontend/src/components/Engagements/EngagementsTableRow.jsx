import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ engagement, fetchEngagements }) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();
  // Redirect to edit engagement page
  //const handleEdit = () => {
    // We can access the id (and query the engagement) with useParams() in the UpdateEngagement component
    //navigate("/engagements/edit/" + engagement.engagement_id, { state: { engagement } });
  //};

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

  //<td>
  //<BiEditAlt onClick={handleEdit} size={25} style={{ cursor: "pointer" }} />
  //</td>

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
