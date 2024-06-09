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
