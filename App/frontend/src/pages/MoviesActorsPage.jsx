import { Routes, Route} from 'react-router-dom';
import MoviesActorsTable from "../components/MovieActors/MoviesActorsTable";

function MoviesActors() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<MoviesActorsTable />} />
            </Routes>

        </div>
    )
}
export default MoviesActors;