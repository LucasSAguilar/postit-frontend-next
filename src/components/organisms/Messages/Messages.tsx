"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Messages.module.scss";
import PostBox from "../../molecules/Post/Post";
import { useRouter } from "next/navigation";
import IPost from "@/types/PostInterface";
import collectAllPosts from "@/lib/api/posts/collectAllPosts";

const Messages: React.FC = () => {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const route = useRouter();

  const definePosts = async () => {
    const data = await collectAllPosts();
    console.log(data);

    if (data.success) {
      const dados = data.posts;
      setPosts(dados);
    } else {
      console.log("Erro ao buscar posts:", data.message);
      setPosts([]);
    }
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
      <button
        className={styles.button_exit}
        onClick={() => route.push("/login")}
      >
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
          <div>Nenhum post encontrado</div>
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
