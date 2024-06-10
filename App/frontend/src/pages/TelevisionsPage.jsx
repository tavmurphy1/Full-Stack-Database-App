//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes and imports to match our project's mySQL Televisions table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { Routes, Route, Link } from 'react-router-dom';
import CreateTelevision from "../components/TV/CreateTelevision";
import TelevisionsTable from "../components/TV/TelevisionsTable";
import UpdateTelevision from "../components/TV/UpdateTelevision";

function Televisions() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<TelevisionsTable />} />
            <Route path="/add" element={<CreateTelevision />} />
            <Route path="/edit/:id" element={<UpdateTelevision />} />
            </Routes>

            {<Link to="/televisions/add">Add New TV show</Link>}

        </div>
    )
}
export default Televisions;