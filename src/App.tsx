import { useState, useEffect } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import { getAllPokemons, getPokemon } from "./services/PokemonService";
import { Pokemon, ResponsePokelist, Result } from "./PokeDefinitions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";
import { FaArrowCircleUp } from "react-icons/fa";

function App() {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPreviousUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [detailedPokemons, setDetailedPokemons] = useState<Pokemon[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchPokemons() {
      let response: ResponsePokelist = await getAllPokemons(currentPageUrl);
      setNextPageUrl(response.next);
      setPreviousUrl(response.previous ?? "");
      await fetchDetailedPokemonList(response.results);
      setLoading(false);
    }

    fetchPokemons();
  }, [currentPageUrl]);

  async function fetchDetailedPokemonList(data: Result[]) {
    const detailedPokemons = data.map(
      async (pokemon: { name: string; url: string }) =>
        await getPokemon(pokemon.url)
    );
    const pokemonData = await Promise.all(detailedPokemons);
    console.log(pokemonData);
    setDetailedPokemons(pokemonData);
  }

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  //Back to top button

  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
       <FaArrowCircleUp
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        />
      <Router>
     
        <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <Switch>
          <Route
            exact
            path="/pokemon/:pokemonIndex"
            component={PokemonDetails}
          />
          <Route exact path="/">
            <Pagination
              goToNextPage={goToNextPage}
              goToPrevPage={goToPrevPage}
              hasNext={nextPageUrl ?? null}
              hasPrevious={prevPageUrl ?? null}
            />

            <PokemonList
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              pokelist={detailedPokemons}
            />

            <Pagination
              goToNextPage={goToNextPage}
              goToPrevPage={goToPrevPage}
              hasNext={nextPageUrl ?? null}
              hasPrevious={prevPageUrl ?? null}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
