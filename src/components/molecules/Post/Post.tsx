import IPost from '@/types/PostInterface';
import styles from './PostBox.module.scss';

export default function PostBox ({...post}: IPost) {


  return (
    <article className={styles.article} lang="pt-BR">
      <header className={styles.article__header}>
        <div className={styles.article__line_one}>
          <h2 className={styles.article__title}>{post.name}</h2>
          <p className={styles.article__role}>{post.role}</p>
        </div>
        <time className={styles.article__date} dateTime="2024-05-10">
          {post.createdAt}
        </time>
      </header>
      <main className={styles.article__content}>
        {post.content}
      </main>
    </article>
  );
};


