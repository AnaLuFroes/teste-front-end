import CrownIcon from '../../icons/CrownIcon';
import styles from './HeaderNav.module.scss';

const NAV_LINKS = [
  { label: 'Todas Categorias', href: '#' },
  { label: 'Supermercado', href: '#' },
  { label: 'Livros', href: '#' },
  { label: 'Moda', href: '#' },
  { label: 'Lançamentos', href: '#' },
  { label: 'Ofertas do dia', href: '#', active: true },
];

function HeaderNav() {
  return (
    <nav className={styles.headerNav} aria-label="Navegação principal">
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={link.active ? styles.active : ''}
        >
          {link.label}
        </a>
      ))}
      <a href="#" className={styles.signature}>
        <CrownIcon className={styles.icon} />
        Assinatura
      </a>
    </nav>
  );
}

export default HeaderNav;
