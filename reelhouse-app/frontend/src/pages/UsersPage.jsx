//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes and imports to match our project's mySQL Users table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { Routes, Route, Link } from 'react-router-dom';
import CreateUser from "../components/Users/CreateUser";
import UsersTable from "../components/Users/UsersTable";

function Users() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<UsersTable />} />
            <Route path="/add" element={<CreateUser />} />
            </Routes>

            {<Link to="/users/add">Add New User</Link>}

        </div>
    )
}
export default Users;