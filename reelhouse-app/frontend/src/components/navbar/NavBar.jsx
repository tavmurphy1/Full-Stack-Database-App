//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of links to match our project's mySQL tables.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

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
