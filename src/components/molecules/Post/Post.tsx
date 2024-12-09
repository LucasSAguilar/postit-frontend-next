import IPost from "@/types/PostInterface";
import styles from "./PostBox.module.scss";

export default function PostBox({ ...post }: IPost) {
  const date = new Date(post.createdAt);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Os meses começam em 0
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

  return (
    <article className={styles.article} lang="pt-BR">
      <header className={styles.article__header}>
        <div className={styles.article__line_one}>
          <h2 className={styles.article__title}>{post.name}</h2>
          <p className={styles.article__role}>{post.role}</p>
        </div>
        <time className={styles.article__date} dateTime={formattedDate}>
          {formattedDate}
        </time>
      </header>
      <main className={styles.article__content}>{post.content}</main>
    </article>
  );
}
