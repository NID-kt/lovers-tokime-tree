import React from "react";

export default function ViewLostTree() {
    return (
        <div
            className="bg-center h-screen w-full pt-24 grayscale text-center"
            style={{
                backgroundImage: "url('/images/background.jpg')",
                backgroundSize: "100% 100%", // サイズを変更
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                fontFamily: 'AomemoFont', // フォントを変更
                paddingTop: '100px', // ヘッダー分の余白を追加
            }}
        >

            <h1 className="text-8xl">枯れ木コレクション</h1>
        </div>
    );
}
