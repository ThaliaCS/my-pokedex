import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p>Pokédex</p>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search.." />
          <button className={styles.search}>GO</button>
        </div>
      </div>
    </div>
  );
}
