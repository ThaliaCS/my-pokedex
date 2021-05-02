import { Pokemon } from '../PokeDefinitions'
import styles from '../styles/PokemonList.module.css';

interface PokemonCardProps {
    pokemon: Pokemon,
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {

    return (

        <div className={styles.cardPokemons}>
            <div className={styles.poke}>
                <div key={pokemon.id}>
                    <div className={styles.pokes}>
                        <div className={styles.cardPokemon}>
                            <div className={styles.namePoke}> {pokemon.name} </div>
                            <div className={styles.type}>
                                {pokemon.types.map((type) => <div className={styles.typePoke}>{type.type.name}</div>)}
                            </div>
                            <img className={styles.imgPoke} src={pokemon.sprites.other['official-artwork'].front_default} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}