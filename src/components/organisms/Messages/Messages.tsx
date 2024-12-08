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
import insertNewPost from "@/lib/api/posts/insertNewPost";

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

  const sendPost = async () => {
    try {
      const post: IPost = {
        content: message,
        name: context.user.name,
        role: context.user.role,
        createdAt: new Date().toISOString(),
      };
      const response = await insertNewPost(post);
      if (!response.ok) {
        console.log(response.message || "Erro ao enviar post");
        return;
      }
      setMessage("");
      definePosts();
    } catch (error: any) {
      console.log(error.message || "Não foi possível enviar o post");
    }
  };

  useEffect(() => {
    definePosts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
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
        <button className={styles.messageButton} onClick={() => sendPost()}>
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
