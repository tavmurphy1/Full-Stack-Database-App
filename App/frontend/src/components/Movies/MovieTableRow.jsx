import axios from "axios";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableRow = ({ movie, fetchMovies, fetchMovieGenreData, fetchMovieActorData, fetchMovieDirectorData }) => {
  // Hook that allows us to navigate programmatically
  const navigate = useNavigate();
  // Redirect to edit movie page
  const handleEdit = () => {
    // We can access the id (and query the movie) with useParams() in the UpdateMovie component
    navigate("/movies/edit/" + movie.movie_id, { state: { movie } });
  };

  const deleteRow = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "movies/" + movie.movie_id;
      const response = await axios.delete(URL);
      // Ensure that the movie was deleted successfully
      if (response.status === 204) {
        alert("Movie deleted successfully");
      }
    } catch (err) {
      alert(err.response.data.error || "Error deleting movie");
      console.log(err);
    }
    fetchMovies();
  };

  return (
    <tr key={movie.movie_id}>
      <td>{movie.movie_id}</td>
      <td>{movie.movie_title}</td>
      <td>{movie.movie_length}</td>
      <td>{movie.movie_total_view}</td>
      <td>{fetchMovieGenreData}</td>
      <td>{fetchMovieActorData}</td>
      <td>{fetchMovieDirectorData}</td>
      <td>
        <BiEditAlt onClick={handleEdit} size={25} style={{ cursor: "pointer" }} />
      </td>
      <td>
        <BsTrash onClick={deleteRow} size={25} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default TableRow;
