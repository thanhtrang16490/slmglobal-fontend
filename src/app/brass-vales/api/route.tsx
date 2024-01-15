import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {

    const url = new URL(request.url);
    // console.log(url);
    const current = url.searchParams.get('current');
    const pageSize = url.searchParams.get('pagesize');
    const res = await fetch(`${process.env.BACKEND_URL}products?filters[category][$eq]=Brass%20Vales%20&%20Taps&populate=feature_image&pagination[page]=${current}&pagination[pageSize]=${pageSize}`);

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await res.json();
    // console.log(data);
    return NextResponse.json(data);
}

