import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav>
            <Link to="/">Home</Link>
            <Link to="/engagements">Engagements</Link>
            <Link to="/users">Users</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/televisions">Television</Link>
            <Link to="/episodes">Episodes</Link>
            <Link to="/genres">Genres</Link>
            <Link to="/actors">Actors</Link>
            <Link to="/directors">Directors</Link>

      </nav>
  );
};

export default Navbar;
