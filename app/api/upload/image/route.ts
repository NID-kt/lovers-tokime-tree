import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';

import { auth } from '@/auth';
 
export const GET = auth(async (request) => {
    if (!request.auth) {  
        return Response.json({ message: "Not authenticated" }, { status: 401 })
    }

    const body = (await request.json()) as HandleUploadBody;
 
    try {
      const jsonResponse = await handleUpload({
        body,
        request,
        onBeforeGenerateToken: async (
        ) => {   
          return {
            allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif'],
          };
        },
      });
   
      return NextResponse.json(jsonResponse);
    } catch (error) {
      return NextResponse.json(
        { error: (error as Error).message },
        { status: 400 }, // The webhook will retry 5 times waiting for a 200
      );
    }
})
