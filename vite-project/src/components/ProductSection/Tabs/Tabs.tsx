import { useState } from 'react';
import styles from './Tabs.module.scss';

const TABS = [
  { id: 'celular', label: 'celular', transform: 'normal' as const },
  { id: 'acessorios', label: 'acessórios', transform: 'normal' as const },
  { id: 'tablets', label: 'tablets', transform: 'normal' as const },
  { id: 'notebooks', label: 'NOTEBOOKS', transform: 'upper' as const },
  { id: 'tvs', label: 'TVs', transform: 'mixed' as const },
];

function Tabs() {
  const [activeId, setActiveId] = useState<string>('celular');

  return (
    <div className={styles.tabs} role="tablist">
      {TABS.map((tab) => {
        const isActive = activeId === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => setActiveId(tab.id)}
            className={`${styles.tab} ${isActive ? styles.active : ''} ${
              tab.transform === 'upper'
                ? styles.upper
                : tab.transform === 'mixed'
                  ? styles.upperMixed
                  : ''
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
