import { Routes, Route, Link } from 'react-router-dom';
import CreateDirector from "../components/Directors/CreateDirector";
import DirectorsTable from "../components/Directors/DirectorsTable";

function Directors() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<DirectorsTable />} />
            <Route path="/add" element={<CreateDirector />} />
            </Routes>

            {<Link to="/directors/add">Add New Director</Link>}

        </div>
    )
}
export default Directors;