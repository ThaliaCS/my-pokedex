import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Pokemon } from "../PokeDefinitions";
import styles from "../styles/PokemonDetails.module.css";
import PokemonTypeBadge, { typeColors } from "./PokemonTypeBadge";

interface locationState {
  pokemon: Pokemon;
}

export default function PokemonDetails() {
  let location = useLocation<locationState>();
  const { pokemon } = location.state;

  return (
    <div className={styles.superContainer}>
      
    <div key={pokemon.id} className={styles.container}>
      
      <Link to="/" className={styles.link}>
        Voltar
      </Link>
      <div
        style={{
          border: `3px solid ${typeColors[pokemon.types[0].type.name]}`,
        }}
        className={styles.cardPokemon}
      >
          <img
          className={styles.imgPoke}
          src={pokemon.sprites.other["official-artwork"].front_default}
        />
        <div className={styles.descriptionPoke}>
          <div className={styles.namePoke}> {pokemon.name} </div>
          <div className={styles.type}>
            {pokemon.types.map((type) => {
              return <PokemonTypeBadge type={type.type.name} />;
            })}
          </div>
          <div className={styles.height}> Altura: {pokemon.height}</div>
          <div className={styles.weight}> Peso: {pokemon.weight}</div>

          <div className={styles.experience}>
            Experiência base: {pokemon.base_experience}
          </div>
          <div className={styles.weight}> Ordem: {pokemon.order}</div>
         
        </div>

      
      </div>
    </div>
    </div>
  );
}
