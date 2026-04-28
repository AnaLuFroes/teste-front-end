import { useState } from 'react';
import CategoryTile from './CategoryTile/CategoryTile';
import HealthIcon from '../icons/HealthIcon';
import SportIcon from '../icons/SportIcon';
import FashionIcon from '../icons/FashionIcon';
import styles from './Categories.module.scss';

interface Category {
  id: string;
  label: string;
  imageSrc?: string;
  icon?: React.ReactNode;
}

const CATEGORIES: Category[] = [
  {
    id: 'tecnologia',
    label: 'Tecnologia',
    imageSrc: '/assets/cat-tecnologia.png',
  },
  {
    id: 'supermercado',
    label: 'Supermercado',
    imageSrc: '/assets/cat-supermercado.png',
  },
  { id: 'bebidas', label: 'Bebidas', imageSrc: '/assets/cat-bebidas.png' },
  {
    id: 'ferramentas',
    label: 'Ferramentas',
    imageSrc: '/assets/cat-ferramentas.png',
  },
  { id: 'saude', label: 'Saúde', icon: <HealthIcon /> },
  {
    id: 'esportes',
    label: 'Esportes e Fitness',
    icon: <SportIcon />,
  },
  { id: 'moda', label: 'Moda', icon: <FashionIcon /> },
];

function Categories() {
  const [activeId, setActiveId] = useState<string>('tecnologia');

  return (
    <section
      className={styles.categories}
      aria-label="Categorias de produtos"
    >
      {CATEGORIES.map((cat) => (
        <CategoryTile
          key={cat.id}
          label={cat.label}
          imageSrc={cat.imageSrc}
          icon={cat.icon}
          active={activeId === cat.id}
          onClick={() => setActiveId(cat.id)}
        />
      ))}
    </section>
  );
}

export default Categories;
