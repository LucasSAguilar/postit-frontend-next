import Image from "next/image";
import AboutSystem from "../components/organisms/AboutSystem/AboutSystem";
import Messages from "../components/organisms/Messages/Messages";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main className={styles.home_page}>
      <Messages />
      <div className={styles.containerDown}>
        <h2 className={styles.text}>Entenda como isso foi feito</h2>
        <Image
          className={styles.arrow}
          src="/assets/icons/arrow.svg"
          alt="Ícone de seta para baixo"
          height={50}
          width={50}
        />
      </div>
      <AboutSystem />
    </main>
  );
}
