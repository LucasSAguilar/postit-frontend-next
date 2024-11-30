import styles from './PostBox.module.scss';

export default function PostBox (){
  return (
    <article className={styles.article} lang="pt-BR">
      <header className={styles.article__header}>
        <div className={styles.article__line_one}>
          <h2 className={styles.article__title}>Lucas Aguilar</h2>
          <p className={styles.article__role}>Fullstack developer</p>
        </div>
        <time className={styles.article__date} dateTime="2024-05-10">
          10/05/2024
        </time>
      </header>
      <main className={styles.article__content}>
        Olá, isso é uma mensagem de alguém e será usada de exemplo no figma
        e pla pla pla mas enfim bem legal o sistemas!
      </main>
    </article>
  );
};


