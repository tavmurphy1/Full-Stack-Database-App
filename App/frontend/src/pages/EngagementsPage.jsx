//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes and imports to match our project's mySQL Engagements table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { Routes, Route, Link } from 'react-router-dom';
import CreateEngagement from "../components/Engagements/CreateEngagements";
import EngagementsTable from "../components/Engagements/EngagementsTable";

function Engagements() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<EngagementsTable />} />
            <Route path="/add" element={<CreateEngagement />} />
            </Routes>

            {<Link to="/engagements/add">Add New Engagement</Link>}

        </div>
    )
}
export default Engagements;