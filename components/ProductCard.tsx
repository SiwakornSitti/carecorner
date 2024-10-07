import { FC } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import classNames from "classnames";

export type ProductCardProps = {
  name: string;
  description: string;
  discountPrice?: number | string;
  price?: number | string;
  size?: string;
  recommends: string[];
  imageSrc: string;
};

const ProductCard: FC<ProductCardProps> = ({
  name,
  description,
  price = 0,
  discountPrice = 0,
  size = "",
  recommends,
  imageSrc,
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
          <div
            className={classNames("flex gap-x-4 my-2", {
              "h-10": !price,
            })}
          >
            <div
              className="text-sm text-secondary-orange font-bold flex items-center"
              style={{
                textShadow: `2px 2px 4px #00000033`,
              }}
            >
              {`฿ ${discountPrice}`}
            </div>
            {Boolean(price) && (
              <div className="text-sm line-through flex items-center">
                ฿ {price}
              </div>
            )}

            {Boolean(price) && (
              <div className="text-xs text-secondary-orange font-semibold bg-primary-earth rounded-full w-10 h-10 flex justify-center items-center">
                -
                {(
                  ((Number(price) - Number(discountPrice)) / Number(price)) *
                  100
                ).toFixed(0)}
                %
              </div>
            )}
          </div>

          <Button className="text-white font-bold" color="warning">
            ช้อปเลย
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
