import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import Price from "./Price";

export type ProductCardProps = {
  name: string;
  description: string;
  discountPrice?: number | string;
  price?: number | string;
  size?: string;
  recommends: string[];
  imageSrc: string;
  category?: string;
};

const ProductCard: FC<ProductCardProps> = ({
  name,
  description,
  price = 0,
  discountPrice = 0,
  size = "",
  recommends,
  imageSrc,
  category = "",
}) => {
  return (
    <div className="flex flex-col bg-white text-black max-w-52 min-w-52 md:max-w-56 md:min-w-56 rounded border border-whiteblue">
      <div className="w-full h-48 flex justify-center items-center">
        <Image
          src={imageSrc}
          height={600}
          width={400}
          alt={name}
          className="max-w-full max-h-48"
        />
      </div>
      <div className="p-3 flex flex-col flex-1 justify-between">
        <div>
          <div className="text-secondary-brown tracking-wide mb-2">
            <h2 className="font-bold mb-2 line-clamp-2 md:min-h-11">{name}</h2>
            <p className="text-sm line-clamp-3">{description}</p>
          </div>
        </div>
        <div>
          <div className="text-sm text-secondary-brown tracking-wide">
            <h3 className="font-bold">เหมาะสำหรับ</h3>
            <p className="line-clamp-2 min-h-10">{recommends.join(", ")}</p>
          </div>
          <div className="text-sm text-secondary-brown tracking-wide">
            ( {size} )
          </div>
          <Price price={price} discountPrice={discountPrice} />
          <Button as={Link} href={`/products/${name}${category ? `?category=${category}` : ""}`} className="text-white font-bold" color="warning">
            ช้อปเลย
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
