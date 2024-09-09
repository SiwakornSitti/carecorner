import { FC, ReactElement } from "react";
import Image from "next/image";
import classNames from "classnames";

export type ServiceProps = {
  className?: string;
  isShowTitle?: boolean;
};

const Service: FC<ServiceProps> = ({ className, isShowTitle = false }) => {
  return (
    <section
      className={classNames(
        "text-secondary-brown px-3 max-w-2xl mx-auto",
        className
      )}
    >
      <div className="bg-white px-1 py-2 border border-secondary-yellow rounded-2xl shadow-md shadow-primary-mustard">
        {isShowTitle && (
          <h1 className="text-center font-bold">
            รวมสินค้าและบริการ เพื่อสุขภาพ
            <br />
            ทั้งของกิน ของใช้ เพื่อคนรักสุขภาพ เด็ก ผู้สูงอายุ และผู้ป่วย
          </h1>
        )}

        <ul className="flex text-center text-sm p-2">
          <li className="flex-1 p-1">
            <Image
              className="mx-auto h-20"
              src="/protect.webp"
              alt="trust and safety"
              width={75}
              height={75}
            />
            <p>มั่นใจ ปลอดภัย สินค้าแท้ 100%</p>
          </li>
          <li className="flex-1 p-1">
            <Image
              className="mx-auto h-20"
              src="/delivery.webp"
              alt="fast delivery"
              width={75}
              height={75}
            />
            <p>ส่งเร็ว ส่งชัวร์ ทั่วประเทศ</p>
          </li>
          <li className="flex-1 p-1">
            <Image
              src="/good-food.webp"
              className="mx-auto h-20"
              alt="catering"
              width={75}
              height={75}
            />
            <p>มีบริการจัดคอร์สอาหารเฉพาะบุคคลและ catering</p>
          </li>
          <li className="flex-1 p-1">
            <Image
              src="/talking.webp"
              className="mx-auto h-20"
              alt="talking"
              width={75}
              height={75}
            />
            <p>พร้อมให้คำปรึกษาก่อนและหลังการขาย</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
