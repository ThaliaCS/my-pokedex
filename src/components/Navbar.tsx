import { useState } from "react";
import { Pokemon } from "../PokeDefinitions";
import styles from "../styles/Navbar.module.css";
import PokemonCard from "./PokemonCard";


interface SearchProps {
  
  setSearchTerm: (string: string) => void,
  searchTerm: string

}

export default function Navbar({searchTerm, setSearchTerm}: SearchProps) {
 
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p>Pokédex</p>
        <div className={styles.searchBar}>
        <input type="text" placeholder="Search" onChange={(event) => {setSearchTerm(event.target.value)}} />
        </div>
      </div>
    </div>
  );
}
