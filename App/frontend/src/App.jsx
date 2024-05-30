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
import MoviesGenresPage from "./pages/MoviesGenresPage";
import MoviesActorsPage from "./pages/MoviesActorsPage";
import MoviesDirectorsPage from "./pages/MoviesDirectorsPage";
import TelevisionsGenresPage from "./pages/TelevisionsGenresPage";
import TelevisionsActorsPage from "./pages/TelevisionsActorsPage";
import TelevisionsDirectorsPage from "./pages/TelevisionsDirectorsPage";

import ActorsNewPage from "./pages/ActorsNewPage";
import DirectorsNewPage from "./pages//DirectorsNewPage";
import EngagementsNewPage from "./pages//EngagementsNewPage";
import EpisodesNewPage from "./pages//EpisodesNewPage";
import GenresNewPage from "./pages//GenresNewPage";
import MoviesNewPage from "./pages//MoviesNewPage";
import TelevisionsNewPage from "./pages//TelevisionsNewPage";
import UsersNewPage from "./pages//UsersNewPage";

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
            <Route path="/engagements" element={<EngagementsPage />} />
            <Route path="/users/*" element={<UsersPage />} />
            <Route path="/movies/*" element={<MoviesPage />} />
            <Route path="/televisions/*" element={<TelevisionsPage />} />
            <Route path="/episodes/*" element={<EpisodesPage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/directors" element={<DirectorsPage />} />
            <Route path="/movies_genres" element={<MoviesGenresPage />} />
            <Route path="/movies_actors" element={<MoviesActorsPage />} />
            <Route path="/movies_directors" element={<MoviesDirectorsPage />} />
            <Route path="/televisions_genres" element={<TelevisionsGenresPage />} />
            <Route path="/televisions_actors" element={<TelevisionsActorsPage />} />
            <Route path="/televisions_directors" element={<TelevisionsDirectorsPage />} />
            <Route path="/actors_new" element={<ActorsNewPage />} />
            <Route path="/directors_new" element={<DirectorsNewPage />} />
            <Route path="/engagements_new" element={<EngagementsNewPage />} />
            <Route path="/episodes_new" element={<EpisodesNewPage />} />
            <Route path="/genres_new" element={<GenresNewPage />} />
            <Route path="/movies_new" element={<MoviesNewPage />} />
            <Route path="/televisions_new" element={<TelevisionsNewPage />} />
            <Route path="/users_new" element={<UsersNewPage />} />
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
