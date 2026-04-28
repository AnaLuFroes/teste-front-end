import styles from './FooterCol.module.scss';

interface FooterColProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterCol({ title, links }: FooterColProps) {
  return (
    <div className={styles.col}>
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCol;
