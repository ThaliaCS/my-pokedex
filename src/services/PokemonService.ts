import { Pokemon } from './../PokeDefinitions';
import axios from 'axios';
import { ResponsePokelist } from '../PokeDefinitions';

export async function getAllPokemons(url: string): Promise<ResponsePokelist> {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => resolve(res.data)).catch(error => reject(error.message))
  })
}

export async function getPokemon(url: string): Promise<Pokemon> {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => resolve(res.data))
  })
}
