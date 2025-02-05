import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export type ArticlesProps = {
  className?: string;
  data: {
    id: string | number;
    image: string;
    title: string;
    subTitle: string;
    date: string;
  }[];
};

const Articles: FC<ArticlesProps> = ({ data, className }) => {
  return (
    <section className={className} style={{ maxWidth: 700 }}>
      <h1 className="text-secondary-brown mb-5 font-bold text-center text-lg">
        บทความล่าสุดอื่นๆ
      </h1>
      <div className="bg-white rounded-2xl border-2 border-primary-mustard md:p-8 p-4 flex flex-col md:gap-8 gap-4">
        {data.map((data) => {
          return (
            <div key={data.id} className="text-secondary-brown">
              <div className="flex md:gap-8 gap-4">
                <Image
                  className="rounded-2xl"
                  src={data.image}
                  alt={data.title}
                  width={150}
                  height={150}
                />
                <div className="flex justify-between flex-col">
                  <div>
                    <h2 className="font-bold text-lg h-10 overflow-hidden text-ellipsis mb-2 leading-[1.2]">{data.title}</h2>
                    <p className="h-24 overflow-hidden text-ellipsis">{data.subTitle}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>{data.date}</p>
                    <Link href={`/articles/${data.id}/${data.title}`}>
                      <Button className="text-white font-bold" color="warning">
                        อ่านเพิ่มเติม
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
