"use server"
import {sql} from "@vercel/postgres";

export default function getMemory({userID}:{userID: string}){
    return sql`
        SELECT * FROM memories
        WHERE userID = ${userID}
    `;
}