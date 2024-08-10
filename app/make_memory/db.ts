"use server"
import { sql } from "@vercel/postgres";



export async function addMemory({ userID, date, place, mood, text} : { userID: string, date: string, place: string, mood: string, text: string })
{
    return sql`
        INSERT INTO memories (userID, date, place, mood, text)
        VALUES (${userID}, ${date}, ${place}, ${mood}, ${text})
    `;
}

// export function addImage({ memoryID, userID, imageUrl } : { memoryID: string, userID: string, imageUrl: string })
// {
//     return sql`
//         INSERT INTO images (memoryID, userID, imageUrl)
//         VALUES (${memoryID}, ${userID}, ${imageUrl})
//     `;
// }
