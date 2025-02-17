export const runtime = 'edge';
import { NextRequest, NextResponse } from "next/server";
import { ARTICLES } from "@/constants/articles";

export async function GET(request: NextRequest) {
  const article = ARTICLES.find(
    (article) => `${article.id}` === request.nextUrl.pathname.split("/").pop()
  );

  if (article) {
    return NextResponse.redirect(
      new URL(
        `/articles/${article?.id}/${article.title}`,
        request.url
      )
    );
  }

  return NextResponse.redirect(new URL(`/articles`, request.url));
}
