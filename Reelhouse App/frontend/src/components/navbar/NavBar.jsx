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
            <Link to="/movies_genres">Movie Genres</Link>
            <Link to="/movies_actors">Movie Actors</Link>
            <Link to="/movies_directors">Movie Directors</Link>
            <Link to="/televisions_genres">Television Genres</Link>
            <Link to="/televisions_actors">Television Actors</Link>
            <Link to="/televisions_directors">Television Directors</Link>
      </nav>
  );
};

export default Navbar;
