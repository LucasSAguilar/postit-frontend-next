import TechArea from "../../molecules/TechArea/TechArea";
import styles from "./AboutSystem.module.scss";
import Image from "next/image";

const AboutSystem = () => {
  return (
    <div className={styles.infos_container}>
      <section className={styles.containerTechs}>
        <TechArea
          title="Banco de dados"
          imageSrc="/assets/icons/database.svg"
          items={["MongoDB", "NoSQL", "MongoDB Compass", "MongoDB Atlas", "Mongoose"]}
          color="#ea3ef7"
        />
        <TechArea
          title="Back-end"
          imageSrc="/assets/icons/console.svg"
          items={["NodeJS", "NestJS", "Typescript", "Express", "JWT", "Class Validator", "Class Transformer", "Docker"]}
          color="#75f94c"
        />
        <TechArea
          title="Front-end"
          imageSrc="/assets/icons/screen.svg"
          items={["Next", "Typescript", "React", "SCSS", "Axios", "Styled Components", "Atomic Design"]}
          color="#8b2cf5"
        />
        <TechArea
          title="Devops"
          imageSrc="/assets/icons/devops.svg"
          items={["Render", "Vercel", "Git"]}
          color="#f29d38"
        />
        <TechArea
          title="Ferramentas"
          imageSrc="/assets/icons/tools.svg"
          items={["VSCode", "Insomnia", "Postman", "Figma", "Trello", "Notion"]}
          color="#73fbfd"
        />
      </section>

      <div className={styles.containerSocialMedia}>
        <p className={styles.titleSocialMedia}>Acesse minhas redes sociais</p>
        <div className={styles.containerIcons}>
          <a
            href="https://www.linkedin.com/in/lucasaguilardesenvolvedor/"
            className={styles.iconLink}
          >
            <Image
              height={30}
              width={30}
              src="/assets/icons/rs/linkedin.svg"
              alt="Logo do Linkedin"
            />
          </a>
          <a
            href="https://github.com/LucasSAguilar"
            className={styles.iconLink}
          >
            <Image
              height={30}
              width={30}
              src="/assets/icons/rs/github.svg"
              alt="Logo do Github"
            />
          </a>

          <a
            href="https://lucasdesenvolvedor.vercel.app"
            className={styles.iconLink}
          >
            <Image
              height={30}
              width={30}
              src="/assets/icons/rs/web.svg"
              alt="Logo do meu site"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSystem;
