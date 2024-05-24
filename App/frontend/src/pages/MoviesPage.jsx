import { Routes, Route, Link } from 'react-router-dom';
import CreateMovie from "../components/Movies/CreateMovie";
import MoviesTable from "../components/Movies/MoviesTable";
import UpdateMovie from "../components/Movies/UpdateMovie";

function Movies() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<MoviesTable />} />
            <Route path="/add" element={<CreateMovie />} />
            <Route path="/edit/:id" element={<UpdateMovie />} />
            </Routes>

            <Link to="/movies/add">Add New Movie</Link>

        </div>
    )
}
export default Movies;