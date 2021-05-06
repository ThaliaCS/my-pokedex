import styles from '../styles/PokemonTypeBadge.module.css';

interface PokemonTypeBadgeProps {
    type: string,
}

//type PokeTypes = Record<'dark' | 'fire' | 'water' | 'normal'| 'flying' | 'bug'| 'electric' | 'fairy' | 'fighting' 
                      //    |'poison' | 'ghost'| 'grass' | 'ground' |'ice'| 'psychie'| 'rock' | 'steel' | 'dragon' , string>

type PokeTypes = Record<string, string>

export const typeColors: PokeTypes = {
    
    dark: '#705848',
    normal: '#A8A878',
    fire: '#F08030',
    flying: '#A890F0',
    bug: '#A8B820',
    dragon: '#7038F8',
    electric: '#F8D030',
    fairy: '#EE99AC',
    fighting: '#C03028',
    poison: '#A040A0',
    ghost: '#705898',
    grass: '#78C850',
    ground: '#E0C068',
    ice: '#98D8D8',
    psychic: '#F85888',
    rock: '#B8A038',
    steel: '#B8B8D0',
    water: '#6890F0'
}
  

export default function PokemonTypeBadge({ type }: PokemonTypeBadgeProps) {

    return (

        <div style={{backgroundColor: typeColors[type]}} className={styles.typePoke}>
            
            {type}

        </div>
    );
}