import { Routes, Route} from 'react-router-dom';
import TelevisionsDirectorsTable from "../components/TelevisionDirectors/TelevisionsDirectorsTable";

function TelevisionsDirectors() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<TelevisionsDirectorsTable />} />
            </Routes>

        </div>
    )
}
export default TelevisionsDirectors;