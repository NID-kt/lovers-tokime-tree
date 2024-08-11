'use client'; // クライアントコンポーネントとして指定

import Head from "next/head";
import React from 'react';
import Link from 'next/link';

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
      <Link href="view_tree" legacyBehavior>
        <a
          href="#"
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
          href="#"
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
          href="#"
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
          href="#"
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
  backgroundColor: 'rgba(255, 255, 255, 0.4)', // 透明感のある白
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

export default function Home() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  };

  return (
    <>
      <Head>
        <link
          href="/fonts/AomemoFont-Regular.otf"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main
        className="flex min-h-screen flex-col items-center justify-center text-3xl tracking-widest"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "100% 100%", // サイズを変更
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          fontFamily: 'AomemoFont', // フォントを変更
          paddingTop: '100px', // ヘッダー分の余白を追加
        }}
      >
        <div
          className="title text-white drop-shadow-md"
          style={{
            textAlign: 'center', // 中央揃え
            marginBottom: '20px', // 下に余白を追加
            marginTop: '-100px', // 上にずらす
            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)', // テキストに影を追加
          }}
        >
          <h1
            className="text-7xl"
            style={{
              fontWeight: 'bold', // 太字にする
              letterSpacing: '15px', // 文字の幅を開ける
            }}
          >
            恋のトキメ樹
          </h1>
          <h2
            className=""
            style={{
              fontSize: '18px', // フォントサイズを変更
              fontWeight: 'normal', // 通常の太さにする
              letterSpacing: '8px', // 文字の幅を開ける
              marginBottom: '50px', // 下に余白を追加
            }}
          >
            lovers-tokime-tree
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // 中央揃え
            gap: '70px', // ボタン間のスペースを追加
            height: '100px', // 高さを指定
          }}
        >
          <Link href="/view_tree" legacyBehavior>
            <a
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              木を眺める
            </a>
          </Link>
          <Link href="/view_lost_tree" legacyBehavior>
            <a style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              伐採木を見る
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
