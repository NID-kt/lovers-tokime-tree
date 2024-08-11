'use client'; // クライアントコンポーネントとして指定

import Head from "next/head";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // 'next/navigation' から useRouter をインポート
import styles from './page.module.css'; // CSSモジュールをインポート

const Page: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // 'next/navigation' の useRouter を使用

  const handleLogin = async () => {
    setError('');

    // 仮のログインチェック
    if (username === 'user' && password === 'password') {
      router.push('/home'); // ログイン成功時に /home へ遷移
    } else {
      setError('ユーザー名またはパスワードが間違っています'); // エラーメッセージを表示
    }
  };

  return (
    <>
      <Head>
        <link
          href="/fonts/AomemoFont-Regular.otf"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.h1}>恋のトキメ樹</h1>
          <h2 className={styles.h2}>lovers-tokime-tree</h2>
        </div>

        <div className={styles.loginContainer}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button
            onClick={handleLogin}
            className={styles.button}
          >
            ログイン
          </button>
          {error && (
            <p className={styles.error}>{error}</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Page;
