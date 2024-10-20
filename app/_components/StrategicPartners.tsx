import { FC } from "react";
import Image from "next/image";
import { STRATEGIC_PARTNERS } from "@/constants/partners";

export type StrategicPartnersProps = {
  className?: string;
};

const StrategicPartners: FC<StrategicPartnersProps> = ({ className }) => {
  return (
    <section className={className}>
      <h1 className="text-secondary-brown mb-5 font-bold text-lg">
        Our Strategic Partners | พันธมิตรเชิงกลยุทธ์ของเรา
      </h1>
      <div className="flex justify-center gap-2">
        {STRATEGIC_PARTNERS.map((partner) => {
          return (
            <Image
              key={partner.name}
              alt={partner.name}
              src={partner.src}
              width={80}
              height={80}
            />
          );
        })}
      </div>
    </section>
  );
};

export default StrategicPartners;
