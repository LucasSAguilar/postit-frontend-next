"use client"

import Image from "next/image";
import styles from "./login.module.scss";
import { useRouter } from "next/navigation";

export default function Login() {

  const route = useRouter();

  const handleLogin = () => {
    route.push("/home");
  }

  return (
    <main className={styles.login_main}>
      <section className={styles.login_section}>
        <form className={styles.login_form}>
          <Image
            className={styles.login_logo}
            src="/assets/logo_postit.webp"
            alt="Logo"
            width={100}
            height={100}
          />
          <p className={styles.login_description}>
            PostIt Up é um mural de mensagens interativo, criado para demonstrar
            habilidades em desenvolvimento fullstack e exemplificar um deploy
            gratuito. Basta informar seu nome e função para participar, sem
            necessidade de criar uma conta.
          </p>

          <div className={styles.input_group}>
            <label htmlFor="name" className={styles.input_label}>
              Nome
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className={styles.input_field}
              placeholder="Insira seu nome"
              required
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="role" className={styles.input_label}>
              Função
            </label>
            <input
              type="role"
              id="role"
              name="role"
              className={styles.input_field}
              placeholder="Ex: Desenvolvedor Frontend"
              required
            />
          </div>

          <button type="button" onClick={handleLogin} className={styles.submit_button}>
            Entrar
          </button>
        </form>

        <p className={styles.social_media_text}>Acesse minhas redes sociais</p>

        <div className={styles.social_media_links}>
          <Image
            className={styles.social_icon}
            src="/assets/icons/rs/linkedin.svg"
            alt="Ícone do Linkedin"
            width={10}
            height={10}

          />
          <Image
            className={styles.social_icon}
            src="/assets/icons/rs/github.svg"
            alt="Ícone do Github"
            width={10}
height={10}
          />
          <Image
            className={styles.social_icon}
            src="/assets/icons/rs/web.svg"
            alt="Ícone do meu portfólio"
            width={10}
height={10}
          />
        </div>
      </section>
    </main>
  );
}
