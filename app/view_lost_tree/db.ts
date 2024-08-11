"use server"
import {sql} from "@vercel/postgres";

import type { Tree } from "./page"

export async function getMemory({userID}:{userID: string}){
    return sql<Tree>`
        SELECT * FROM memories
        WHERE userID = ${userID}
    `;
}