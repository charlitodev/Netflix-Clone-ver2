import "./assets/styles/index.css";
import { Navbar } from "./components";
import {
  Hero,
  NewReleases,
  TopTVShows,
  TopMovies,
  PopularMovies,
} from "./views";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewReleases />
      <TopTVShows />
      <TopMovies />
      <PopularMovies />
    </div>
  );
}

export default App;
