import { Pokemon } from "../PokeDefinitions";
import styles from "../styles/PokemonList.module.css";
import PokemonTypeBadge, { typeColors } from "./PokemonTypeBadge";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className={styles.cardPokemons}>
      <Link
        style={{ textDecoration: 'none' }}
        to={{
          pathname: "/pokemon/" + pokemon.id,
          state: { pokemon }
        }}
      >
      <div className={styles.poke}>
        <div>
          <div
            style={{
              border: `3px solid ${typeColors[pokemon.types[0].type.name]}`,
            }}
            className={styles.pokes}
          >
            <div className={styles.cardPokemon}>
              <div className={styles.namePoke}> {pokemon.name} </div>
              <div className={styles.type}>
                {pokemon.types.map((type, index) => {
                  //<div className={styles.typePoke}>{type.type.name}</div>
                  return <PokemonTypeBadge key={index} type={type.type.name} />;
                })}
              </div>
              <img
                className={styles.imgPoke}
                src={pokemon.sprites.other["official-artwork"].front_default}
              />
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
