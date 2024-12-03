"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./Messages.module.scss";
import PostBox from "../../molecules/Post/Post";
import { AuthContext } from "@/app/contexts/Auth/AuthContext";

const Messages: React.FC = () => {
  const [message, setMessage] = useState("");

  const { testarContext }: any = useContext(AuthContext);

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
      <button className={styles.button_exit}>Encerrar sessão</button>
      <Image
        className={styles.postitLogo}
        src="/assets/logo_postit.webp"
        alt="Logo do Postit"
        width={70}
        height={70}
      />
      <div className={styles.listPost}>
        <PostBox />
        <PostBox />
        <PostBox />
        <PostBox />
        <PostBox />
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
