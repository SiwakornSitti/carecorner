import { FC } from "react";
import Image from "next/image";
import { PARTNERS } from "@/constants/partners";

const Partners: FC = () => {
  return (
    <section className="w-full mx-auto max-w-xs mb-8">
      <h1 className="text-secondary-brown text-center mb-5 font-bold">
        พันธมิตรของเรา
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {PARTNERS.map((partner) => {
          return (
            <Image
              key={partner.name}
              alt={partner.name}
              src={partner.src}
              width={64}
              height={64}
              className="mx-auto"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
