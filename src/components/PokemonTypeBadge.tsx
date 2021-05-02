import styles from '../styles/PokemonTypeBadge.module.css';

interface PokemonTypeBadgeProps {
    type: string,
}

//const typeColor;

export default function PokemonTypeBadge({ type }: PokemonTypeBadgeProps) {

    function getColorFromType(type: string){




    }

    return (


        <div className={styles.typePoke}>{type}</div>
        

    );
}