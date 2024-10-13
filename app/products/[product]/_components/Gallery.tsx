"use client";
import { FC } from "react";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

export type GalleryProps = {
  images?: string[];
  productName?: string;
};

const Gallery: FC<GalleryProps> = ({ images = [], productName = "" }) => {
  const [current, setCurrent] = useState(0);

  return (
    <section>
      <div className="mb-4">
        <Image
          alt={productName}
          src={images[current]}
          height={350}
          width={350}
        />
      </div>
      <div className="overflow-x-auto w-full flex gap-2">
        {images.map((image, index) => {
          return (
            <Image
              onClick={() => {
                setCurrent(index);
              }}
              className={classNames("inline hover:cursor-pointer", {
                "border border-primary-mustard": current === index,
              })}
              key={image}
              alt={productName}
              src={image}
              height={80}
              width={80}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
