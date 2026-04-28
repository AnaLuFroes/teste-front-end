import FooterLeft from './FooterLeft/FooterLeft';
import FooterCol from './FooterCol/FooterCol';
import FooterBottom from './FooterBottom/FooterBottom';
import styles from './Footer.module.scss';

const INSTITUCIONAL = [
  { label: 'Sobre Nós', href: '#' },
  { label: 'Movimento', href: '#' },
  { label: 'Trabalhe conosco', href: '#' },
];

const AJUDA = [
  { label: 'Suporte', href: '#' },
  { label: 'Fale Conosco', href: '#' },
  { label: 'Perguntas Frequentes', href: '#' },
];

const TERMOS = [
  { label: 'Termos e Condições', href: '#' },
  { label: 'Política de Privacidade', href: '#' },
  { label: 'Troca e Devolução', href: '#' },
];

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <FooterLeft />
        <span className={styles.divider} aria-hidden="true" />
        <div className={styles.cols}>
          <FooterCol title="Institucional" links={INSTITUCIONAL} />
          <FooterCol title="Ajuda" links={AJUDA} />
          <FooterCol title="Termos" links={TERMOS} />
        </div>
      </footer>
      <FooterBottom />
    </>
  );
}

export default Footer;
