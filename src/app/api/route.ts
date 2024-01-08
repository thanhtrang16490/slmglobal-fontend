import { NextResponse } from 'next/server';
export async function GET() {
    return await fetch('https://api.slmglobal.vn/api/blogs')
}