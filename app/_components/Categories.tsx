import { FC } from "react";
import { CATEGORIES } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";

export type CategoriesProps = {
  className?: string;
};

const Categories: FC<CategoriesProps> = ({ className }) => {
  return (
    <section className={className}>
      <h1 className="text-secondary-brown mb-5 font-bold text-center text-lg">
        ช้อปตามหมวดหมู่
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-8 px-3">
        {CATEGORIES.map((category) => {
          return (
            <div
              className="bg-secondary-yellow sm:w-60 rounded-2xl"
              key={category.title}
            >
              <div>
                <Image
                  alt={category.title}
                  src={category.imageSrc}
                  width={300}
                  height={300}
                  className="rounded-t-2xl"
                  style={{ maxHeight: 190 }}
                />
              </div>
              <div className="p-3 text-secondary-brown">
                <h2 className="font-bold mb-2 text-white-shadow">
                  {category.title}
                </h2>
                <p className="text-sm">{category.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Link href="/products">
          <button className="bg-secondary-yellow rounded-2xl w-full py-3 drop-shadow-lg text-secondary-brown text-white-shadow font-bold">
            หรือ คลิกที่นี่ เพื่อดูสินค้าทั้งหมด
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
