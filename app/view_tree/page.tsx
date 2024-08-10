"use client";
import { useState } from "react";

export default function ViewTree() {
    const [treeStage, setTreeStage] = useState(0);
    const trees = ["/images/tree_1.png", "/images/tree_2.png", "/images/tree_3.png", "/images/tree_4.png"];

    return (
        <div
            className="flex min-h-screen flex-col items-center justify-center p-24 relative"
            style={{
                backgroundImage: "url('/images/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
            }}>
            <img
                src={trees[treeStage]}
                alt={`Tree ${treeStage + 1}`}
                className="absolute inset-0 w-lvh h-lvh mt-50 mb-0 mr-0 ml-1/2 object-contain z-10"
            />
            <h1 className="z-20 relative">View Tree</h1>
            <p className="z-20 relative">Current tree: {treeStage + 1}</p>
            <button
                onClick={() => setTreeStage((treeStage + 1) % trees.length)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-20 relative">
                Next Tree
            </button>
        </div>
    );
}
