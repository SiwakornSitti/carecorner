import { FC } from "react";
import Image from "next/image";
import { PARTNERS } from "@/constants/partners";
import Marquee from "react-fast-marquee";

const Partners: FC = () => {
  return (
    <section className="w-full mx-auto mb-8">
      <h1 className="text-secondary-brown text-center mb-5 font-bold text-lg">
        พันธมิตรของเรา
      </h1>
      <div className="w-full h-40 z-0 relative">
        <Marquee gradient={false} pauseOnHover speed={50} delay={2}>
          <div className="grid grid-rows-2 grid-flow-col gap-2">
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
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
