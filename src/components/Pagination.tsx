
interface PaginationProps{
    goToNextPage: () => void,
    goToPrevPage: () => void,
    hasNext: string | null,
    hasPrevious: string | null
}
export default function Pagination({goToNextPage, goToPrevPage, hasNext, hasPrevious}: PaginationProps) {
    return (
        <div>
            {hasPrevious && <button onClick={goToPrevPage}>Previous</button>}
            {hasNext && <button onClick={goToNextPage}>Next</button>}
            
        </div>
    )
}
