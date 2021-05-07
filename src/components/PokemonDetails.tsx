import { useEffect } from "react";
import { useLocation } from "react-router";
import { Pokemon } from "../PokeDefinitions";

interface locationState {
  pokemon: Pokemon
}

export default function PokemonDetails() {

  const location = useLocation<locationState>();

  const { pokemon } = location.state;

  useEffect(() => {
    console.log(pokemon)
  }, [])

  return (

      <div>
        {pokemon.id}
        {pokemon.name}
        <img src={pokemon.sprites.front_default} />
      </div>

  );
}
