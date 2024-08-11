"use client";


import { useState, FormEvent } from 'react';
import Link from 'next/link';
import styles from './background.module.css';
import '../globals.css';

const Header: React.FC = () => (
  <header
    className="flex items-center justify-between w-full px-8 py-4 bg-opacity-80 bg-black fixed top-0 left-0 right-0 z-50"
    style={{
      backdropFilter: 'blur(10px)', // 背景をぼかす
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // 影を追加
      fontFamily: 'AomemoFont', // フォントを統一
      backgroundColor: 'rgba(255, 255, 255, 0.35)', // 透明感のある白
      border: '1px solid rgba(255, 255, 255, 0.3)', // 少し目立つボーダー
      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)', // テキストに影を追加
      fontWeight: 'bold', // 太字にする
      fontSize: '20px', // テキストサイズ
    }}
  >
    <Link href="/home" legacyBehavior>
      <a className="hover:text-gray-300 transition duration-300 text-white text-3xl">
        ♡
      </a>
    </Link>
    <nav className="flex items-center space-x-8 text-white">
      <a
        href="/home"
        className="hover:text-gray-300 transition duration-300"
        style={{
          textDecoration: 'none',
          fontSize: '18px',
        }}
      >
        ホーム
      </a>
      <Link href="/view_tree" legacyBehavior>
        <a
          className="hover:text-gray-300 transition duration-300"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          木を眺める
        </a>
      </Link>
      <Link href="/view_lost_tree" legacyBehavior>
        <a
          className="hover:text-gray-300 transition duration-300"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          伐採木を見る
        </a>
      </Link>
      <Link href="/setting" legacyBehavior>
        <a
          className="hover:text-gray-300 transition duration-300"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          設定
        </a>
      </Link>
      <Link href="/" legacyBehavior>
        <a
          className="hover:text-gray-300 transition duration-300"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          ログアウト
        </a>
      </Link>
    </nav>
  </header>
);

const buttonStyle: React.CSSProperties = {
  width: '200px',
  border: '1px solid rgba(255, 255, 255, 0.1)', // 少し目立つボーダー
  borderRadius: '12px', // 丸みを持たせる
  padding: '10px 20px', // ボタンの内側の余白
  fontSize: '20px', // テキストサイズ
  color: 'white', // 優しい色
  textAlign: 'center', // テキストを中央に配置
  cursor: 'pointer', // マウスオーバー時にカーソルを変更
  marginBottom: '40px', // ボタン間のスペースを追加
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // ホバー時のエフェクト
  fontFamily: 'AomemoFont', // フォントを変更
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.6)', // テキストに影を追加
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // 影を追加
  fontWeight: 'bold', // 太字にする
  backgroundColor: '#00807a', 
  marginTop: '20px',
};

export default function MakeTree() {
  const [treeName, setTreeName] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`木の名前は: ${treeName}`);
  };

  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.form}>
        <h1 className={styles.h1}>トキメ樹に名前を付けよう！</h1>
        <form onSubmit={handleSubmit}>
          <label className={styles.inputContainer}>
            名前<br></br>
            <input
              type="text"
              value={treeName}
              onChange={(e) => setTreeName(e.target.value)}
              className={styles.input}
            />
          </label>
          <div className={styles.buttonContainer}>
            <button type="submit" style={buttonStyle}>作成</button>
          </div>
        </form>
      </div>
    </div>
  );
}