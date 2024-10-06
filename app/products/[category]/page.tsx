import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/constants/products";
import Link from "next/link";

export default function ProductByCategory({
  params,
}: {
  params: { category: string };
}) {
  const category = decodeURIComponent(params.category);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <div className="container mx-auto md:pt-6 p-3">
        <h1 className="mb-6">
          <Link href="/products" className="hover:underline">
            All Products สินค้าทั้งหมด
          </Link>
          <span>{` > `}</span>
          <span>{category}</span>
        </h1>
        <div className="flex gap-x-2 gap-y-2 justify-center md:justify-start lg:gap-x-5 lg:gap-y-5 flex-wrap">
          {PRODUCTS.filter((product) => {
            return product.categories.includes(category);
          }).map((product) => {
            const price =
              product.sku[0].options?.[0]?.options?.[0]?.options?.[0]?.value ||
              product.sku[0].options?.[0]?.options?.[0]?.value ||
              product.sku[0].options?.[0]?.value;

            const size =
              product.sku[0].options?.[0]?.options?.[0]?.options?.[0]?.label ||
              product.sku[0].options?.[0]?.options?.[0]?.label ||
              product.sku[0].options?.[0]?.label;
            return (
              <ProductCard
                key={product.name}
                imageSrc={product.image}
                name={product.name}
                description={product.description}
                price={price}
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
