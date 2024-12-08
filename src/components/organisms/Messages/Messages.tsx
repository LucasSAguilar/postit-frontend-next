"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Messages.module.scss";
import PostBox from "../../molecules/Post/Post";
import { useRouter } from "next/navigation";
import IPost from "@/types/PostInterface";
import collectAllPosts from "@/lib/api/posts/collectAllPosts";
import { AuthContext } from "@/contexts/Auth/AuthContext";
import Cookie from "js-cookie";

const Messages: React.FC = () => {
  const [message, setMessage] = useState("");
  const [aviso, setAviso] = useState("Nenhum post encontrado");
  const [posts, setPosts] = useState<IPost[]>([]);
  const route = useRouter();
  const context = useContext(AuthContext);

  const definePosts = async () => {
    try {
      const data = await collectAllPosts();
      setPosts(data.posts);
      if (!data.ok) {
        setAviso(data.message || "Ocorreu um erro ao procurar pelos posts.");
      }
    } catch (error: any) {
      setAviso(error.message || "Ocorreu um erro ao procurar pelos posts.");
      setPosts([]);
    }
  };

  const doLogout = () => {
    Cookie.remove("token");
    context.setIsLogged(false);
    route.push("/login");
  };

  useEffect(() => {
    definePosts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <main className={styles.containerMessages}>
      <button className={styles.button_exit} onClick={() => doLogout()}>
        Encerrar sessão
      </button>
      <Image
        className={styles.postitLogo}
        src="/assets/logo_postit.webp"
        alt="Logo do Postit"
        width={70}
        height={70}
      />
      <div className={styles.listPost}>
        {posts.length > 0 ? (
          posts.map((post) => <PostBox key={post._id} {...post} />)
        ) : (
          <div>{aviso}</div>
        )}
      </div>

      <div className={styles.containerSendMessage}>
        <textarea
          className={styles.messageInput}
          value={message}
          onChange={handleChange}
          placeholder="Insira sua mensagem"
          maxLength={150}
          minLength={1}
        ></textarea>
        <button className={styles.messageButton} onClick={handleSendMessage}>
          <Image
            className={styles.sendLogo}
            src="/assets/logo_postit.webp"
            alt="Logo do Postit"
            width={50}
            height={50}
          />
        </button>
      </div>
    </main>
  );
};

export default Messages;
