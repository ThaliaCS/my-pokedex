import styles from '../styles/PokemonList.module.css';


interface PaginationProps{
    goToNextPage: () => void,
    goToPrevPage: () => void,
    hasNext: string | null,
    hasPrevious: string | null
}
export default function Pagination({goToNextPage, goToPrevPage, hasNext, hasPrevious}: PaginationProps) {
    return (
        <div className={styles.buttons}>
            {hasPrevious && <button onClick={goToPrevPage}>Previous</button>}
            {hasNext && <button onClick={goToNextPage}>Next</button>}
            
        </div>
    )
}
