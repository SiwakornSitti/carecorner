import { FC } from "react";
import {
  CATEGORIES_GROUP_1,
  CATEGORIES_GROUP_2,
  CATEGORIES_GROUP_3,
} from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";

const GROUPING_CATEGORIES = [
  { name: "มุมคนรักสุขภาพและทุกคนในครอบครัว", group: CATEGORIES_GROUP_1 },
  { name: "มุมผู้สูงอายุและผู้ป่วย", group: CATEGORIES_GROUP_2 },
  { name: "มุมแม่และเด็ก", group: CATEGORIES_GROUP_3 },
];

const ShopByCategory: FC = () => {
  return (
    <section>
      <h1 className="text-secondary-brown mb-5 font-bold text-center text-lg">
        Shop by Category | ช้อปตามหมวดหมู่
      </h1>
      <div className="">
        {GROUPING_CATEGORIES.map((category) => {
          return (
            <div key={category.name} className="mb-2">
              <h2 className="text-secondary-brown font-bold mb-4">
                {category.name}
              </h2>
              <div className="flex gap-x-4 overflow-auto lg:gap-x-10">
                {category.group.map((category) => {
                  return (
                    <div
                      key={category.value}
                      className="flex flex-col items-center"
                      style={{ minWidth: 76, maxWidth: 76 }}
                    >
                      <Link href={`/products/${category.value}`}>
                        <Image
                          src={category.image}
                          alt={category.label}
                          width={76}
                          height={76}
                          className="mb-1"
                        />
                        <p className="text-center p-1 text-sm">
                          {category.label}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShopByCategory;
