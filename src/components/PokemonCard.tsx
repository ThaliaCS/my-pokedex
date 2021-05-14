import { useRef, useState } from "react";
import { Pokemon } from "../PokeDefinitions";
import styles from "../styles/PokemonList.module.css";
import PokemonTypeBadge, { typeColors } from "./PokemonTypeBadge";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import loading from "../styles/loading.gif";

interface PokemonCardProps {
  pokemon: Pokemon;
}

interface myCustomProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const [loaded, setLoaded] = useState(false);
  //style={{display: loading ? "block" : "none"}}

  return (
    //<Link to={`/pokemon/${pokemon.id}`}, pokemon >

    <div className={styles.cardPokemons}>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={{
          pathname: "/pokemon/" + pokemon.id,
          state: { pokemon },
        }}
      >
        <div className={styles.poke}>
          <div key={pokemon.id}>
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
                    return (
                      <PokemonTypeBadge key={index} type={type.type.name} />
                    );
                  })}
                </div>

                <div className={styles.imgCards}>
                  {loaded ? null : (
                    <div className={styles.loadingImg}>
                      <img src={loading} />
                    </div>
                  )}
                  <img
                    style={loaded ? {} : { display: "none" }}
                    className={styles.imgPoke}
                    src={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                    onLoad={() => {
                      setLoaded(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

{
  /* <div className={styles.cardPokemons}>
<Link 
style={{textDecoration: 'none', color: 'inherit'}}
  to={{
    
    pathname: "/pokemon/" + pokemon.id,
    state: { pokemon } 
  }}
>
<div className={styles.poke}>
  <div key={pokemon.id}>
    <div
      style={{
        border: `3px solid ${typeColors[pokemon.types[0].type.name]}`,
      }}
      className={styles.pokes}
    >
      <div className={styles.cardPokemon}>
        <div className={styles.namePoke}> {pokemon.name} </div>
        <div className={styles.type}>
          {pokemon.types.map((type) => {
            //<div className={styles.typePoke}>{type.type.name}</div>
            return <PokemonTypeBadge type={type.type.name} />;
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
</div> */
}
