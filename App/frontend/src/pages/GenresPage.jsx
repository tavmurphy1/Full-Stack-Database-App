//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes and imports to match our project's mySQL Genres table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { Routes, Route, Link } from 'react-router-dom';
import CreateGenre from "../components/Genres/CreateGenre";
import GenresTable from "../components/Genres/GenresTable";

function Genres() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<GenresTable />} />
            <Route path="/add" element={<CreateGenre />} />
            </Routes>

            {<Link to="/genres/add">Add New Genre</Link>}

        </div>
    )
}
export default Genres;