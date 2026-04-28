import TopUtility from './TopUtility/TopUtility';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNav from './HeaderNav/HeaderNav';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <TopUtility />
      <HeaderMain />
      <HeaderNav />
    </header>
  );
}

export default Header;
