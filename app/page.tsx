'use client'; // クライアントコンポーネントとして指定

import Head from "next/head";
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="/fonts/AomemoFont-Regular.otf"
          rel="stylesheet"
        />
      </Head>
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
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // 中央揃え
            alignItems: 'center', // 垂直方向に中央揃え
            height: '100px', // 高さを指定
          }}
        >
          <Link href="/home" legacyBehavior>
            <a
              style={{
                fontSize: '24px', // フォントサイズを指定
                fontWeight: 'bold', // フォントの太さを指定
                textDecoration: 'none', // テキストの装飾を削除
                color: 'inherit', // 親要素の色を継承
                padding: '10px 20px', // パディングを追加
                border: '2px solid black', // ボーダーを追加
                borderRadius: '5px', // 角を丸くする
                backgroundColor: '#f0f0f0', // 背景色を追加
              }}
            >
              ログインしてね
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
