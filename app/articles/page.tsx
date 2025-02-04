import { ARTICLES } from "@/constants/articles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function Articles() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <div className="container mx-auto p-3 md:pt-6">
        <h1 className="text-center text-2xl font-bold mb-6 text-stork">
          Articles | บทความ
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl card-shadow w-72 overflow-hidden flex flex-col"
            >
              <Link href={`/articles/${article.id}/${article.title}`}>
                <div className="flex h-64 items-center justify-center bg-black overflow-hidden">
                  <div>
                    <Image
                      width={200}
                      height={250}
                      src={article.cover}
                      alt={article.title}
                      className="w-full hover:scale-125 duration-300 ease-in h-auto"
                    />
                  </div>
                </div>
              </Link>
              <div className="w-72 p-3 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="font-semibold text-lg">{article.title}</h2>
                  <p className="py-2 mb-2">{article.subTitle}</p>
                </div>

                <div className="flex justify-between items-center">
                  <p>{article.date}</p>
                  <Link href={`/articles/${article.id}/${article.title}`}>
                    <Button className="text-white font-bold" color="warning">
                      อ่านเพิ่มเติม
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
