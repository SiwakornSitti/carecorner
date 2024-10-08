import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/constants/products";
import { FC } from "react";
import classNames from "classnames";

export type ProductsProps = {
  className?: string;
};

const Products: FC<ProductsProps> = ({ className }) => {
  return (
    <section className={classNames("w-full", className)}>
      <h1 className="text-secondary-brown mb-5 font-bold text-center text-lg">
        สินค้าแนะนำสำหรับคุณ
      </h1>
      <div className="flex gap-x-4 overflow-x-auto md:justify-center">
        {PRODUCTS.slice(0, 5).map((product) => {
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
    </section>
  );
};

export default Products;
