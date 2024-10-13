"use client";

import classNames from "classnames";
import { FC } from "react";

export type PriceProps = {
  price?: number | string;
  discountPrice?: number | string;
};

const Price: FC<PriceProps> = ({ price, discountPrice }) => {
  return (
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
        {`฿ ${Number(discountPrice).toLocaleString()}`}
      </div>
      {Boolean(price) && (
        <div className="text-sm line-through flex items-center">฿ {Number(price).toLocaleString()}</div>
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
  );
};

export default Price;
