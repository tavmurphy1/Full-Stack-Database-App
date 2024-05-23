import { Routes, Route, Link } from "react-router-dom";
import CreateMovie from "../components/Movies/CreateMovie";
import MoviesTable from "../components/Movies/MoviesTable";
import UpdateMovie from "../components/Movies/UpdateMovie";

function MoviesPage() {
  return (
    <div>
      <h1>Movies Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/movies">Movies Table</Link>
          </li>
          <li>
            <Link to="/movies/add">Add Movie</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MoviesTable />} />
        <Route path="/add" element={<CreateMovie />} />
        <Route path="/edit/:id" element={<UpdateMovie />} />
      </Routes>
    </div>
  );
}

export default MoviesPage;
