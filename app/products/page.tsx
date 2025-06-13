"use client";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/constants/products";
import ShopByCategory from "@/app/_components/ShopByCategory";
import Divide from "@/components/Divide";
import Link from "next/link";

export default function Products() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category");
  const category = decodeURIComponent(rawCategory || "");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <div className="container mx-auto p-3 md:pt-6">
        <ShopByCategory />
        <Divide />
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <h1 className="font-semi">
              <Link href="/products" className="hover:underline text-stork">
                All Products สินค้าทั้งหมด
              </Link>
              {!!category && (
                <>
                  <span>{` > `}</span>
                  <span>{category}</span>
                </>
              )}
            </h1>
          </div>
        </div>

        <div className="flex gap-x-2 gap-y-2 justify-center md:justify-start lg:gap-x-5 lg:gap-y-5 flex-wrap">
          {PRODUCTS.filter((product) => {
            return category ? product.categories.includes(category) : true;
          }).map((product) => {
            const price =
              product.sku[0].options?.[0]?.options?.[0]?.options?.[0]?.value ||
              product.sku[0].options?.[0]?.options?.[0]?.value ||
              product.sku[0].options?.[0]?.value;

            const beforeDiscount =
              product.sku[0].options?.[0]?.options?.[0]?.options?.[0]
                ?.beforeDiscount ||
              product.sku[0].options?.[0]?.options?.[0]?.beforeDiscount ||
              product.sku[0].options?.[0]?.beforeDiscount;

            const size =
              product.sku[0].options?.[0]?.options?.[0]?.options?.[0]?.label ||
              product.sku[0].options?.[0]?.options?.[0]?.label ||
              product.sku[0].options?.[0]?.label;

            return (
              <ProductCard
                category={category}
                key={product.name}
                imageSrc={product.image}
                name={product.name}
                description={product.description}
                price={beforeDiscount}
                discountPrice={price}
                size={size}
                recommends={product.recommends}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
