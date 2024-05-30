import { Routes, Route} from 'react-router-dom';
import TelevisionsActorsTable from "../components/TelevisionActors/TelevisionsActorsTable";

function TelevisionsActors() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<TelevisionsActorsTable />} />
            </Routes>

        </div>
    )
}
export default TelevisionsActors;