import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import styles from './HeaderMain.module.scss';

function HeaderMain() {
  return (
    <div className={styles.headerMain}>
      <Logo />
      <SearchBar />
      <HeaderIcons />
    </div>
  );
}

export default HeaderMain;
