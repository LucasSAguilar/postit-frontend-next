import TechArea from "../../molecules/TechArea/TechArea";
import styles from "./AboutSystem.module.scss";

const AboutSystem = () => {
  return (
    <div className={styles.infos_container}>
      <section className={styles.containerTechs}>
        <TechArea
          title="Technology Area"
          imageSrc="/assets/icons/database.svg"
          items={["Computers", "Mobile Phones", "AI"]}
          color="#bc00eb"
        />
        <TechArea
          title="Technology Area"
          imageSrc="/assets/icons/database.svg"
          items={["Computers", "Mobile Phones", "AI"]}
          color="#bc00eb"
        />
        <TechArea
          title="Technology Area"
          imageSrc="/assets/icons/database.svg"
          items={["Computers", "Mobile Phones", "AI"]}
          color="#bc00eb"
        />
        <TechArea
          title="Technology Area"
          imageSrc="/assets/icons/database.svg"
          items={["Computers", "Mobile Phones", "AI"]}
          color="#bc00eb"
        />
        <TechArea
          title="Technology Area"
          imageSrc="/assets/icons/database.svg"
          items={["Computers", "Mobile Phones", "AI"]}
          color="#bc00eb"
        />
      </section>

      <div className={styles.containerSocialMedia}>
        <p className={styles.titleSocialMedia}>Acesse minhas redes sociais</p>
        <div className={styles.containerIcons}>
          <a href="#" className={styles.iconLink}>
            <img src="/assets/icons/rs/github.svg" alt="Logo do Github" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/assets/icons/rs/linkedin.svg" alt="Logo do Linkedin" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/assets/icons/rs/web.svg" alt="Logo do meu site" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSystem;
