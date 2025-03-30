import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";

export type ArticlesProps = {
  className?: string;
  title: string;
  link: string;
  lenght?: number;
  data: {
    id: string | number;
    image: string;
    title: string;
    subTitle: string;
    date: string;
    link: string;
  }[];
};

const Articles: FC<ArticlesProps> = ({
  data,
  className,
  title,
  link,
  lenght,
}) => {
  return (
    <section className={className} style={{ maxWidth: 700 }}>
      <h1 className="text-secondary-brown mb-5 font-bold text-center text-lg">
        {title}
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
                      style={{ maxHeight: 40 }}>
                      {data.title}
                    </h2>
                    <p
                      className="overflow-hidden text-ellipsis"
                      style={{ maxHeight: 42 }}>
                      {data.subTitle}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>{data.date}</p>
                    <Button
                      as={Link}
                      href={data.link}
                      className="text-white font-bold"
                      color="warning">
                      อ่านเพิ่มเติม
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-center pt-4">
          <Button
            as={Link}
            href={link}
            className="text-white font-bold sm:max-w-56 w-full"
            color="warning">
            อ่านทั้งหมด {!!lenght ? `(${lenght})` : ""}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
