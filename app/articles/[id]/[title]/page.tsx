import { ARTICLES } from "@/constants/articles";

export default async function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = ARTICLES.find((article) => `${article.id}` === id);
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
