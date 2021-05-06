import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Pokemon } from "../PokeDefinitions";
import styles from "../styles/PokemonList.module.css";
import DescriptionPokemon from "./DescriptionPokemon";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokelist: Pokemon[];
}

export default function PokemonList({ pokelist }: PokemonListProps) {
  return (
 
    <div className={styles.cardPokemons}>
      <div className={styles.poke}>
        {pokelist.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
          
        ))}
      
        
      </div>
    </div>
   
  );
}
