<<<<<<< HEAD:reelhouse-app/frontend/src/App.jsx
/*
Reelhouse App
Copyright 2024 Patrick Lim and Tavner Murphy

# Citation for our 'Reelhouse' React/Vite + Express/Node + MySQL App:
# Date: 05/23/2024
# All code for frontend and backend for this app was adapted from react-starter-app:
# Source URL: http://www.oregonstate.edu/mysource
https://github.com/osu-cs340-ecampus/react-starter-app
# Authors: react-starter-app was developed by Devin Daniels and Zachary Maes 
under the supervision of Dr. Michael Curry and Dr. Danielle Safonte.
*/


=======
//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes and imports to match our project's mySQL tables.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte
>>>>>>> main:App/frontend/src/App.jsx

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EngagementsPage from "./pages/EngagementsPage";
import UsersPage from "./pages/UsersPage";
import MoviesPage from "./pages/MoviesPage";
import TelevisionsPage from "./pages/TelevisionsPage";
import EpisodesPage from "./pages/EpisodesPage";
import GenresPage from "./pages/GenresPage";
import ActorsPage from "./pages/ActorsPage";
import DirectorsPage from "./pages/DirectorsPage";
<<<<<<< HEAD:reelhouse-app/frontend/src/App.jsx
import MoviesGenresPage from "./pages/MoviesGenresPage";
import MoviesActorsPage from "./pages/MoviesActorsPage";
import MoviesDirectorsPage from "./pages/MoviesDirectorsPage";
import TelevisionsGenresPage from "./pages/TelevisionsGenresPage";
import TelevisionsActorsPage from "./pages/TelevisionsActorsPage";
import TelevisionsDirectorsPage from "./pages/TelevisionsDirectorsPage";

import ActorsNewPage from "./pages/ActorsNewPage";
import DirectorsNewPage from "./pages/DirectorsNewPage";
import EngagementsNewPage from "./pages/EngagementsNewPage";
import EpisodesNewPage from "./pages/EpisodesNewPage";
import GenresNewPage from "./pages/GenresNewPage";
import MoviesNewPage from "./pages/MoviesNewPage";
import TelevisionsNewPage from "./pages/TelevisionsNewPage";
import UsersNewPage from "./pages/UsersNewPage";
=======
>>>>>>> main:App/frontend/src/App.jsx

import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <header>
          <h1>Reelhouse</h1>
      </header>
      <Navbar />
      <main>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/engagements/*" element={<EngagementsPage />} />
            <Route path="/users/*" element={<UsersPage />} />
            <Route path="/movies/*" element={<MoviesPage />} />
            <Route path="/televisions/*" element={<TelevisionsPage />} />
            <Route path="/episodes/*" element={<EpisodesPage />} />
            <Route path="/genres/*" element={<GenresPage />} />
            <Route path="/actors/*" element={<ActorsPage />} />
            <Route path="/directors/*" element={<DirectorsPage />} />
          </Routes>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Patrick Lim and Tavner Murphy</p>
    </footer>

    </>
  );
}

export default App;
