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