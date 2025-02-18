import { NEWS } from "@/constants/news";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | ข่าวสาร",
  description: "ข่าวสารดีๆ เพื่อสุขภาพของคุณ",
};

export default function Articles() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <div className="container mx-auto p-3 md:pt-6">
        <h1 className="text-center text-2xl font-bold mb-6 text-stork">
        News, Activities & Promotions | ข่าวสาร กิจกรรม และโปรโมชั่น
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {NEWS.map((each) => (
            <div
              key={each.id}
              className="bg-white rounded-xl card-shadow w-72 overflow-hidden flex flex-col"
            >
              <Link href={`/news/${each.id}/${each.title}`}>
                <div className="flex h-64 items-center justify-center bg-black overflow-hidden">
                  <div>
                    <Image
                      width={200}
                      height={250}
                      src={each.cover}
                      alt={each.title}
                      className="w-full hover:scale-125 duration-300 ease-in h-auto"
                    />
                  </div>
                </div>
              </Link>
              <div className="w-72 p-3 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="font-bold text-lg">{each.title}</h2>
                  <p className="py-2 mb-2">{each.subTitle}</p>
                </div>

                <div className="flex justify-between items-center">
                  <p>{each.date}</p>
                    <Button as={Link} href={`/news/${each.id}/${each.title}`} className="text-white font-bold" color="warning">
                      อ่านเพิ่มเติม
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
