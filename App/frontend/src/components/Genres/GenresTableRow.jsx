import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ genre, fetchGenres, moviesGenres, televisionsGenres}) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();

  const deleteRow = async () => {
    let associated = false;
    moviesGenres.map((val, i) => {if (val.genre === genre.genre_name)
      {if (associated === false){alert("Error: Cannot delete genre because it is associated with a Movie(s). Please delete the associated Movie(s) first."); associated = true;}
      else{
      return associated = true;}
      }
    });

    let associated2 = false;
    televisionsGenres.map((val, i) => {if (val.genre === genre.genre_name)
      {if (associated2 === false){alert("Error: Cannot delete genre because it is associated with a TV show(s). Please delete the associated TV show(s) first."); associated2 = true;}
      else{
      return associated2 = true;}
      }
    });
    
    if ((associated === false) && (associated2 === false)){
    try {
      const URL = import.meta.env.VITE_API_URL + "genres/" + genre.genre_id;
      const response = await axios.delete(URL);
      // Ensure that the genre was deleted successfully
      if (response.status === 204) {
        alert("Genre deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting genre");
      console.log(err);
    }
    fetchGenres();
    }
  };

  return (
    <tr key={genre.genre_id}>
      <td>{genre.genre_id}</td>
      <td>{genre.genre_name}</td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
