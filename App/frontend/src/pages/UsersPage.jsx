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