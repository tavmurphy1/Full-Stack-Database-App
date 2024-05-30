import { Routes, Route} from 'react-router-dom';
import MoviesGenresTable from "../components/MovieGenres/MoviesGenresTable";

function MoviesGenres() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<MoviesGenresTable />} />
            </Routes>

        </div>
    )
}
export default MoviesGenres;