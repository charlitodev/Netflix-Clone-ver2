import "./assets/styles/index.css";
import { Navbar, Footer } from "./components";
import {
  Hero,
  NewReleases,
  PopularOnNetflix,
  TopMovies,
  TopTVShows,
} from "./views";
import { ContextFunction } from "./context/contextConfig";

function App() {
  return (
    <div className="App">
      <ContextFunction>
        <Navbar />
        <Hero />
        <NewReleases />
        <TopMovies />
        <TopTVShows />
        <PopularOnNetflix />
        <Footer />
      </ContextFunction>
    </div>
  );
}

export default App;
