import React, {useState, useEffect} from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Navbar from './components/Navbar';
import axios, { Canceler } from 'axios';
import Pagination from './components/Pagination';

export interface Pokemon{

  name:string,
  url?: string,
  type?: string,
  sprite?: string,

}

function App() {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPreviousPage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true)
    let cancel: Canceler
    axios.get(currentPageUrl).then((res) => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPage(res.data.previous)
      const pokemons: Pokemon[] = res.data.results.map((p: Pokemon) => p)
      setPokemon(pokemons) 
    })


  }, [currentPageUrl])

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
      <PokemonList pokelist={pokemon}/>

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
