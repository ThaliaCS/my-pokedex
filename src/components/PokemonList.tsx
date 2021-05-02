import { Pokemon } from '../PokeDefinitions'

interface PokemonListProps{
    pokelist: Pokemon[],
}

export default function PokemonList({pokelist}: PokemonListProps) {
    
    return (
        <div>
            {pokelist.map(pokemon => (
                <div key={pokemon.id}>
                    {pokemon.name}
                    {pokemon.types.map((type) => <div>{type.type.name}</div>)}
                    <img src={pokemon.sprites.other['official-artwork'].front_default} />
                    
                </div>
            ))}
        </div>
    )
}
