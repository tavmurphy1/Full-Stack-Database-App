import { Routes, Route} from 'react-router-dom';
import MoviesDirectorsTable from "../components/MovieDirectors/MoviesDirectorsTable";

function MoviesDirectors() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<MoviesDirectorsTable />} />
            </Routes>

        </div>
    )
}
export default MoviesDirectors;