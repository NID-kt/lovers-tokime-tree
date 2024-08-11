"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../globals.css';
import styles from './background.module.css'; // CSSモジュールをインポート

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

export default function Settings() {
  const [brightness, setBrightness] = useState<number>(() => {
    // 初期値をローカルストレージから取得
    const savedBrightness = localStorage.getItem('brightness');
    return savedBrightness ? Number(savedBrightness) : 100;
  });

  const handleBrightnessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBrightness = Number(event.target.value);
    setBrightness(newBrightness);
    localStorage.setItem('brightness', newBrightness.toString()); // ローカルストレージに保存
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--brightness', `${brightness}%`);
    const globalsCss = document.getElementById('globals-css');
    if (globalsCss) {
      globalsCss.innerHTML = `:root { --brightness: ${brightness}%; }`;
    }
  }, [brightness]);

  useEffect(() => {
    const savedBrightness = localStorage.getItem('brightness');
    if (savedBrightness) {
      document.documentElement.style.setProperty('--brightness', `${savedBrightness}%`);
      const globalsCss = document.getElementById('globals-css');
      if (globalsCss) {
        globalsCss.innerHTML = `:root { --brightness: ${savedBrightness}%; }`;
      }
    }
  }, []);

  const handleDeleteAccount = () => {
    alert('アカウントを削除しました');
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#ff4d4d',
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
  };

  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.form}>
        <h1 className={`${styles.h1} ${styles.fontAomemo}`}>設定</h1>
        <div className={`${styles.settingItem} ${styles.fontAomemo}`}>
          <label className={styles.fontAomemo}>明るさ</label>
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={handleBrightnessChange}
          />
        </div>
        <div className={styles.settingItem} style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={buttonStyle} onClick={handleDeleteAccount}>
            アカウント削除
          </button>
        </div>
      </div>
    </div>
  );
}