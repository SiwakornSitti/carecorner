import { FC } from "react";
import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import classNames from "classnames";

const SILDES = [
  { id: "1", url: "/promotion1.webp", name: "1" },
  { id: "2", url: "/promotion2.webp", name: "2" },
  { id: "3", url: "/promotion3.webp", name: "3" },
  { id: "4", url: "/promotion4.webp", name: "4" },
  { id: "5", url: "/promotion5.webp", name: "5" },
];

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

export type PromotionsProps = {
  className?: string;
};

const Promotions: FC<PromotionsProps> = ({ className }) => {
  return (
    <section className={classNames("text-secondary-brown w-full", className)}>
      <Carousel slides={SILDES} options={OPTIONS} />
    </section>
  );
};

export default Promotions;
