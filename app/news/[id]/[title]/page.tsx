import { NEWS } from "@/constants/news";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const { id } = await params;
  const found = NEWS.find((each) => `${each.id}` === id);

  if (!found) {
    return {
      title: "News, Activities & Promotions | ข่าวสาร กิจกรรม และโปรโมชั่น",
      description: "ข่าวสารดีๆ เพื่อสุขภาพของคุณ",
    };
  }

  return {
    title: found.title,
    description: found.subTitle,
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = NEWS.find((article) => `${article.id}` === id);
  if (!article) {
    return <div>404</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <div className="container mx-auto md:pt-6 p-3">
        <h1 className="text-center text-xl md:text-2xl font-bold my-6 whitespace-pre">
          {article.title}
        </h1>
        <div
          className="md:px-8 md:pb-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </main>
  );
}
