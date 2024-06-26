import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {

    const res = await fetch(`${process.env.BACKEND_URL}productcats?filters[id][$eq]=11&populate=*`, { next: { revalidate: 86400 } });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await res.json();

    return NextResponse.json(data);
}

