import { FC } from "react";
import Image from "next/image";

const Cover: FC = () => {
  return (
    <section className="pb-20 bg-primary-mustard">
      <div className="container mx-auto">
        <div className="relative">
          <Image
            className="ml-auto"
            src="/delivery-btn.webp"
            alt="delivery button"
            width={139}
            height={30}
          />
          <Image
            className="absolute top-4 right-2"
            src="/motocycle.webp"
            alt="motocycle"
            width={49}
            height={49}
          />
        </div>

        <Image
          className="mx-auto"
          src="/banner.webp"
          alt="Care Corner banner"
          width={207}
          height={119}
        />
        <Image
          className="mx-auto"
          src="/cover.webp"
          alt="Care Corner cover"
          width={260}
          height={86}
        />
      </div>
    </section>
  );
};

export default Cover;
