'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import { upload } from '@vercel/blob/client';
import { auth } from "@/auth";
import { addMemory } from "./db";

export default function MakeMemory() {

    const router = useRouter();

    const moods = [
        { name: "bergamot", imageUrl: "/images/fruit_bergamot_yellow.png" },
        { name: "grapes", imageUrl: "/images/fruit_blackberry_black.png" },
        { name: "poison", imageUrl: "/images/fruit_doku_ringo.png" },
        { name: "pineapple", imageUrl: "/images/fruit_pineapple.png" },
        { name: "apple", imageUrl: "/images/fruit_ringo.png" }
    ] as const;

    type MoodName = typeof moods[number]['name'];

    const [selectMood, setSelectMood] = useState<number>(0);
    const [mood, setMood] = useState<MoodName>(moods[selectMood].name); //感情
    const [date, setDate] = useState(new Date().toISOString()); //日付
    const [place, setPlace] = useState(''); //場所
    const [text, setText] = useState(''); //内容
    const [images, setImages] = useState<string[]>([]); //写真

    const { data: session, } = useSession();

    const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const imageFiles = await Promise.all(Array.from(files).map(async file => {
                const blob = await upload(file.name, file, {
                    access: 'public',
                    handleUploadUrl: '/api/upload/image',
                });
                return blob.url;
            }));
            setImages(imageFiles);
        }
    }

    const handleSave = async () => {
        const userID = session?.user?.id;
        if (!userID) {
            return;
        }

        await addMemory({ userID, date, place, mood, text })
        router.back();
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center p-0"
            style={{ backgroundImage: `url(/images/leaf_back.png)`, backgroundSize: 'contain' }}>
            <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h1 className="text-3xl font-bold mb-4 text-center">新しい思い出を果実にしよう!!</h1>
                <div>
                    <h2 className="text-xl font-bold text-center mb-4">果実を選ぶ</h2>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {moods.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setMood(item.name)
                                    setSelectMood(index)
                                }}
                                className={`cursor-pointer border-2 rounded-md p-2 ${selectMood === index ? 'border-indigo-500' : 'border-gray-300'}`}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-10 object-contain"
                                />
                                <p className="text-center mt-2 text-sm font-medium">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">日付と時間:</label>
                        <input
                            type="datetime-local"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">場所:</label>
                        <input
                            type="text"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            placeholder="場所の入力"
                            className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">思い出:</label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="思い出の入力(必須)"
                            className="w-full h-24 px-4 py-2 bg-gray-800 bg-opacity-50 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">画像をアップロード:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFile}
                            multiple
                            className="w-full py-2 text-white bg-indigo-500 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSave}
                        className="w-full px-4 py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium shadow-lg transition duration-200 text-white"
                    >
                        投稿
                    </button>
                </form>
            </div>
        </div>
    );
}
