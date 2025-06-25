import { NextResponse } from 'next/server';
import findVideos from '@/app/utils/find-videos';

export async function GET() {
    const videos = await findVideos();
    return NextResponse.json({ videos });
} 