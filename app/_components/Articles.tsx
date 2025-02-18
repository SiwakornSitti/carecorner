import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";

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
        Articles | บทความ
      </h1>
      <div className="bg-white rounded-2xl border-2 border-primary-mustard md:p-8 p-4 flex flex-col md:gap-8 gap-4">
        {data.map((data) => {
          return (
            <div key={data.id} className="text-secondary-brown">
              <div className="flex md:gap-8 gap-4">
                <div className="w-36">
                  <Image
                    className="rounded-2xl"
                    src={data.image}
                    alt={data.title}
                    width={150}
                    height={150}
                  />
                </div>

                <div className="flex justify-between flex-col flex-1">
                  <div>
                    <h2
                      className="font-bold text-lg overflow-hidden text-ellipsis mb-2 leading-[1.2]"
                      style={{ maxHeight: 40 }}
                    >
                      {data.title}
                    </h2>
                    <p className="overflow-hidden text-ellipsis" style={{ maxHeight: 42 }}>
                      {data.subTitle}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>{data.date}</p>
                      <Button as={Link} href={`/articles/${data.id}/${data.title}`} className="text-white font-bold" color="warning">
                        อ่านเพิ่มเติม
                      </Button>
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
