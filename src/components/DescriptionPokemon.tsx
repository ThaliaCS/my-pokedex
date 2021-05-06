import { useParams } from "react-router";
import { Pokemon } from "../PokeDefinitions";
import styles from "../styles/PokemonList.module.css";
import PokemonCard from "./PokemonCard";

interface PokemonCardProps {
  pokemon: Pokemon;
}


export default function DescriptionPokemon({ pokemon }: PokemonCardProps) {

  let pokemon = useParams()

  return (

      <div>
        OI {pokemon.name}
      </div>

  );
}
