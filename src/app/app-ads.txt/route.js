import { NextResponse } from 'next/server';
// This is for Admob verification

export async function GET() {
    const appAdsTxtContent = `google.com, pub-6754098188036057, DIRECT, f08c47fec0942fa0`;

    return new NextResponse(appAdsTxtContent, {
        headers: {
            'Content-Type': 'text/plain', 
        },
    });
}

export const dynamic = 'force-static';

    