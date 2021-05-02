import axios from 'axios'
import { useEffect, useState } from 'react'
import { Pokemon } from '../App'

interface PokemonListProps{
    pokelist: Pokemon[],
}

export default function PokemonList({pokelist}: PokemonListProps) {
    
    useEffect(() => {
        updatePokeList(pokelist)
        //console.log(updatedPokelist)
    }, [])

    async function updatePokeList(pokeList: Pokemon[]){

        let updatedPokelist: Pokemon[] = []
        pokeList.map(p => {
            fetchPokeInfo(p).then((res)=>{
                console.log("oi")
                updatedPokelist.push({
                    name: p.name,
                    type: res["types"][0]["type"]["name"],
                    sprite: res["sprites"]["front_default"]
                })
            })

            
        })
        console.log(updatedPokelist)
        pokelist = updatedPokelist
    }

    async function fetchPokeInfo(pokemon: Pokemon){
        if (pokemon.url) {
            const res = await axios.get(pokemon.url)
            return res.data
        }
    }

    return (
        <div>
            {pokelist.map(p => (
                <div key={JSON.stringify(p)}>{p.name} {p.sprite} {p.type} </div>
            ))}
        </div>
    )
}
