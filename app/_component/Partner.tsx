import { FC } from "react";
import Image from "next/image";

const PARTNERS = [
  {
    name: "super-bites",
    src: "/partner/super-bites.webp",
  },
  {
    name: "sesamilk",
    src: "/partner/sesamilk.webp",
  },
  {
    name: "cauli-cup",
    src: "/partner/cauli-cup.webp",
  },
  {
    name: "kari-kari",
    src: "/partner/kari-kari.webp",
  },
  {
    name: "eat-volution",
    src: "/partner/eat-volution.webp",
  },
  {
    name: "sugarless",
    src: "/partner/sugarless.webp",
  },
  {
    name: "choize",
    src: "/partner/choize.webp",
  },
  {
    name: "promate",
    src: "/partner/promate.webp",
  },
];

const Partner: FC = () => {
  return (
    <section className="w-full mx-auto max-w-xs mb-8">
      <h1 className="text-secondary-brown text-sm text-center mb-5">
        Our Partners | พันธมิตรของเรา
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

export default Partner;
