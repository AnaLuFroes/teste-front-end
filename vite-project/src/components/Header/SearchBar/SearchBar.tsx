import { useState } from 'react';
import SearchIcon from '../../icons/SearchIcon';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [term, setTerm] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <form className={styles.search} role="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="O que você está buscando?"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        aria-label="Buscar produtos"
      />
      <button
        type="submit"
        className={styles.searchIcon}
        aria-label="Buscar"
      >
        <SearchIcon className={styles.icon} />
      </button>
    </form>
  );
}

export default SearchBar;
