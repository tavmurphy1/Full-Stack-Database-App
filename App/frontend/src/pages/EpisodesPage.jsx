import { Routes, Route, Link } from 'react-router-dom';
import CreateEpisode from "../components/Episodes/CreateEpisode";
import EpisodesTable from "../components/Episodes/EpisodesTable";

function Episodes() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<EpisodesTable />} />
            <Route path="/add" element={<CreateEpisode />} />
            </Routes>

            {<Link to="/episodes/add">Add New Episode</Link>}

        </div>
    )
}
export default Episodes;