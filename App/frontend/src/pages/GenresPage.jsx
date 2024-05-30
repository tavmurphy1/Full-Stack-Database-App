import { Routes, Route, Link } from 'react-router-dom';
import CreateGenre from "../components/Genres/CreateGenre";
import GenresTable from "../components/Genres/GenresTable";

function Genres() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<GenresTable />} />
            <Route path="/add" element={<CreateGenre />} />
            </Routes>

            {<Link to="/genres/add">Add New Genre</Link>}

        </div>
    )
}
export default Genres;