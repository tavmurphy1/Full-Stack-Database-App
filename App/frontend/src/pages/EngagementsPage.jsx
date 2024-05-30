import { Routes, Route, Link } from 'react-router-dom';
import CreateEngagement from "../components/Engagements/CreateEngagements";
import EngagementsTable from "../components/Engagements/EngagementsTable";
import UpdateEngagement from "../components/Engagements/UpdateEngagement";

function Engagements() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<EngagementsTable />} />
            <Route path="/add" element={<CreateEngagement />} />
            <Route path="/edit/:id" element={<UpdateEngagement />} />
            </Routes>

            {<Link to="/engagements/add">Add New Engagement</Link>}

        </div>
    )
}
export default Engagements;