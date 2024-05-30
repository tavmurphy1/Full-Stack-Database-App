import { Routes, Route, Link } from 'react-router-dom';
import CreateActor from "../components/Actors/CreateActor";
import ActorsTable from "../components/Actors/ActorsTable";

function Actors() {

    return(
        <div>

            <Routes>
            <Route path="/" element={<ActorsTable />} />
            <Route path="/add" element={<CreateActor />} />
            </Routes>

            {<Link to="/actors/add">Add New Actor</Link>}

        </div>
    )
}
export default Actors;