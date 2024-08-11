'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation"

import { useSession } from "next-auth/react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';  // ここを修正
import 'swiper/css';
import 'swiper/css/navigation';

interface Tree {
    imageUrl: string;
    partner_name: string;
    id: string;
}

export default function ViewLostTree() {

    const router = useRouter();
    const [trees, setTrees] = useState<Tree[]>([]);

    const test_trees: Tree[] = [
        {
            imageUrl: "/images/background.jpg.jpg",
            partner_name: "パートナー1",
            id: "e4045",
        },
        {
            imageUrl: "/images/background.jpg",
            partner_name: "パートナー2",
            id: "e4045",
        },
        {
            imageUrl: "/images/background.jpg",
            partner_name: "パートナー3",
            id: "e4045",
        },
        {
            imageUrl: "/images/background.jpg",
            partner_name: "パートナー4",
            id: "e4045",
        }
    ];

    const { data: session, } = useSession();

    useEffect(() => {
        // const userID = session?.user?.id;
        // if (!userID) {
        //     return;
        // }
        // const fetchTrees = async () => {
        //     const response = await fetch(`/api/memories?userID=${userID}`);  // userIDを適切に指定
        //     const data = await response.json();
        //     setTrees(data);
        // };

        // fetchTrees();
        setTrees(test_trees)
    }, []);

    const handleClick=()=>{
        router.back();
    }

    return (
        <div
            className="h-screen w-full pt-24 grayscale text-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: "url('/images/background.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                fontFamily: 'AomemoFont',
                paddingTop: '100px',
            }}
        >
            <button onClick={handleClick}>戻る</button>
            <h1 className="text-6xl mb-10">伐採コレクション</h1>
            <Swiper
                modules={[Navigation]}  // モジュールの指定
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides={true}
                grabCursor={true}
                className="max-w-4xl"
            >
                {trees.map((tree, index) => (
                    <SwiperSlide key={index}>
                        <Link href={`/details/${tree.id}`}>
                            <div className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                                <Image 
                                    src="/images/dead_tree.png" 
                                    alt={`画像${index}`} 
                                    width={300} 
                                    height={200} 
                                    className="transition-transform duration-300 transform hover:scale-110"
                                />
                                <p className="mt-4 text-2xl transition-transform duration-300 transform hover:scale-105">{`${tree.partner_name}との思い出`}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                {/* カスタムナビゲーションボタン */}
                <div className="swiper-button-next text-white"></div>
                <div className="swiper-button-prev text-white"></div>
            </Swiper>
        </div>
    );
}
