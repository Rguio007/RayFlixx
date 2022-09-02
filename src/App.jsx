import { MoviesGrid } from "./Components/MoviesGrid";
import styles from "./Components/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./Pages/MovieDetails";
import { LandingPage } from "./Pages/LandingPage";


export function App() {
    return (
    <Router>
        <header>
            <Link to="/">
                <h1 className={styles.title}>Movies</h1>
            </Link>
        </header>
        <main>
            <Routes>
                <Route path="/movies/:movieId" element={<MovieDetails/>}/>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </main>
    </Router>
    );
}
