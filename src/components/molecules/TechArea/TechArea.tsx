import React from 'react';
import styles from './TechArea.module.scss';

interface TechAreaProps {
  color: string;
  title: string;
  imageSrc?: string;
  items: string[];
}

const TechArea: React.FC<TechAreaProps> = ({ color, title, imageSrc, items }) => {
  return (
    <article className={styles.area} style={{ border: `1px solid ${color}` }}>
      <header className={styles.area__header_card}>
        {imageSrc && <img className={styles.area__image} src={imageSrc} alt="Imagem da área" />}
        <h2 className={styles.area__title} style={{ color }}>{title}</h2>
      </header>
      {items.length > 0 && (
        <ul className={styles.area__list}>
          {items.map((item, index) => (
            <li key={index} className={styles.area__list_item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default TechArea;
