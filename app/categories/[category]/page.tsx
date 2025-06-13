"use client";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/constants/products";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Category() {
  const params = useParams<{ category: string }>();
  const category = decodeURIComponent(params.category);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <div className="container mx-auto p-3 md:pt-6">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <h1 className="font-semi">
              <Link href="/products" className="hover:underline">
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
