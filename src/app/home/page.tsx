"use client";

import Image from "next/image";
import AboutSystem from "../../components/organisms/AboutSystem/AboutSystem";
import Messages from "../../components/organisms/Messages/Messages";
import styles from "./Home.module.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/Auth/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const context = useContext(AuthContext);
  const route = useRouter();

  useEffect(() => {
    context.hasCookieLogin() ? null : route.push("/login");
  }, []);

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
