import { FC } from "react";
import { CATEGORIES } from "@/constants/categories";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export type CategoriesProps = {
  className?: string;
};

const Categories: FC<CategoriesProps> = ({ className }) => {
  return (
    <section className={className}>
      <h1 className="text-secondary-brown mb-5 font-bold text-center text-lg">
        Shop by Category | ช้อปตามหมวดหมู่
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-8 px-3">
        {CATEGORIES.map((category) => {
          return (
            <div
              className="bg-secondary-yellow sm:w-60 rounded-2xl"
              key={category.title}>
              <div>
                <Image
                  alt={category.title}
                  src={category.imageSrc}
                  width={300}
                  height={300}
                  className="rounded-t-2xl"
                  style={{ height: 145 }}
                />
              </div>
              <div className="px-3 pb-3 pt-5 text-secondary-brown">
                <Link href={category.url}>
                  <div className="flex">
                    <h2 className="font-bold mb-2 text-white-shadow flex-1">
                      {category.title}
                    </h2>
                    <div className="">
                      <button className="bg-primary-orange rounded-xl px-1 text-lg">
                        <ArrowRightIcon className="h-5 w-8 text-white font-bold" />
                      </button>
                    </div>
                  </div>
                </Link>

                <p className="text-sm">{category.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-3">
        <Link href="/categories">
          <button className="bg-secondary-yellow rounded-2xl w-full py-3 drop-shadow-lg text-secondary-brown text-white-shadow font-bold">
            หรือ คลิกที่นี่ เพื่อดูสินค้าทั้งหมด{" "}
            <div className="inline-block bg-primary-orange rounded-xl px-1 text-lg ml-5 align-sub">
              <ArrowRightIcon className="h-5 w-8 text-white font-bold" />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
