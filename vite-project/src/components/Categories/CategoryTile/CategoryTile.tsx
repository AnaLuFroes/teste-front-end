import type { ReactNode } from 'react';
import styles from './CategoryTile.module.scss';

interface CategoryTileProps {
  label: string;
  imageSrc?: string;
  icon?: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function CategoryTile({
  label,
  imageSrc,
  icon,
  active = false,
  onClick,
}: CategoryTileProps) {
  return (
    <button
      type="button"
      className={`${styles.catTile} ${active ? styles.active : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      <div className={styles.catBox}>
        {imageSrc ? (
          <img className={styles.catIcon} src={imageSrc} alt={label} />
        ) : (
          <span className={styles.catIconSvg}>{icon}</span>
        )}
      </div>
      <span className={styles.catLabel}>{label}</span>
    </button>
  );
}

export default CategoryTile;
