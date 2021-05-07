import { Pokemon } from "../PokeDefinitions";
import styles from "../styles/PokemonList.module.css";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokelist: Pokemon[];
}

export default function PokemonList({ pokelist }: PokemonListProps) {
  return (
 
    <div className={styles.cardPokemons}>
      <div className={styles.poke}>
        {pokelist.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
   
  );
}
