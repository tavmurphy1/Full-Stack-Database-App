import { Routes, Route} from 'react-router-dom';
import TelevisionsGenresTable from "../components/TelevisionGenres/TelevisionsGenresTable";

function TelevisionsGenres() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<TelevisionsGenresTable />} />
            </Routes>

        </div>
    )
}
export default TelevisionsGenres;