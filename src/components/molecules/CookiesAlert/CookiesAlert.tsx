import styles from "./CookiesAlert.module.scss";

interface CookiesAlertProps {
  showComponent: boolean;
  onDismiss: () => void;
}

export default function CookiesAlert({
  showComponent,
  onDismiss,
}: CookiesAlertProps) {
  if (!showComponent) {
    return null;
  }

  return (
    <main className={styles.container}>
      <p className={styles.message}>
        Este site usa cookies para garantir que você obtenha a melhor
        experiência.
      </p>
      <button className={styles.button} onClick={onDismiss}>
        Entendido
      </button>
    </main>
  );
}
