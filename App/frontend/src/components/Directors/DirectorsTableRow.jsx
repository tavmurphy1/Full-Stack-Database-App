import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ director, fetchDirectors, moviesDirectors, televisionsDirectors}) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();

  const deleteRow = async () => {
    let associated = false;
    moviesDirectors.map((val, i) => {if (val.director === director.director_name)
      {if (associated === false){alert("Error: Cannot delete director because it is associated with a Movie(s). Please delete the associated Movie(s) first."); associated = true;}
      else{
      return associated = true;}
      }
    });

    let associated2 = false;
    televisionsDirectors.map((val, i) => {if (val.director === director.director_name)
      {if (associated2 === false){alert("Error: Cannot delete director because it is associated with a TV show(s). Please delete the associated TV show(s) first."); associated2 = true;}
      else{
      return associated2 = true;}
      }
    });
    
    if ((associated === false) && (associated2 === false)){
    try {
      const URL = import.meta.env.VITE_API_URL + "directors/" + director.director_id;
      const response = await axios.delete(URL);
      // Ensure that the director was deleted successfully
      if (response.status === 204) {
        alert("Director deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting director");
      console.log(err);
    }
    fetchDirectors();
    }
  };

  return (
    <tr key={director.director_id}>
      <td>{director.director_id}</td>
      <td>{director.director_name}</td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
