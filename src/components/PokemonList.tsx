
import { useState } from "react";
import { Pokemon } from "../PokeDefinitions";
import styles from "../styles/PokemonList.module.css";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokelist: Pokemon[];
  setSearchTerm: (string: string) => void,
  searchTerm: string

}

export default function PokemonList({ pokelist, searchTerm, setSearchTerm }: PokemonListProps) {

  return (
    <div className={styles.cardPokemons}>
      
      <div  className={styles.poke}>
        {pokelist.filter((val) => {

          if(searchTerm === ""){
            return val;
          }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
          }

        }).map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
          
        ))}
      
        
      </div>
    </div>
   
  );
}
