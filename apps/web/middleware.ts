import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    console.log("hello")
    return NextResponse.next();
}