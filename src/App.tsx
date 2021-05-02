import {useState, useEffect} from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import { getAllPokemons, getPokemon } from './services/PokemonService';
import { Pokemon, ResponsePokelist, Result } from './PokeDefinitions'

function App() {

  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPreviousUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [detailedPokemons, setDetailedPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {

    setLoading(true)
    async function fetchPokemons() {
      let response: ResponsePokelist = await getAllPokemons(currentPageUrl)
      setNextPageUrl(response.next);
      setPreviousUrl(response.previous ?? "");
      await fetchDetailedPokemonList(response.results);
      setLoading(false)
    }

    fetchPokemons();

  }, [currentPageUrl])

  async function fetchDetailedPokemonList(data: Result[]) {

    const detailedPokemons = data.map( async (pokemon: {name: string, url: string}) => await getPokemon(pokemon.url));
    const pokemonData = await Promise.all(detailedPokemons)
    console.log(pokemonData)
    setDetailedPokemons(pokemonData)

  }


  function goToNextPage(){
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage(){
    setCurrentPageUrl(prevPageUrl);
  }

  if(loading) return <p>"Loading..."</p>


  return (
      <> 
        <Navbar/>
        <PokemonList pokelist={detailedPokemons}/>

        <Pagination 
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          hasNext = {nextPageUrl ?? null}
          hasPrevious = {prevPageUrl ?? null}
        />
      </>
  );
}

export default App;
