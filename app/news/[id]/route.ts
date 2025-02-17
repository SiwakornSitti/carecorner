export const runtime = 'edge';
import { NextRequest, NextResponse } from "next/server";
import { NEWS } from "@/constants/news";

export async function GET(request: NextRequest) {
  const found = NEWS.find(
    (each) => `${each.id}` === request.nextUrl.pathname.split("/").pop()
  );

  if (found) {
    return NextResponse.redirect(
      new URL(
        `/news/${found?.id}/${found.title}`,
        request.url
      )
    );
  }

  return NextResponse.redirect(new URL(`/news`, request.url));
}
