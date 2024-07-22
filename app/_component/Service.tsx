import { FC } from "react";
import Image from "next/image";

const Service: FC = () => {
  return (
    <section className="text-secondary-brown px-3 max-w-2xl mx-auto">
      <div className="bg-white px-1 py-2 border border-secondary-yellow rounded-2xl mt-[-80px] shadow-md shadow-primary-mustard">
        <h3 className="text-center">
          รวมสินค้าและบริการ เพื่อสุขภาพ
          <br />
          ทั้งของกิน ของใช้ เพื่อคนรักสุขภาพ เด็ก ผู้สูงอายุ และผู้ป่วย
        </h3>
        <ul className="flex text-center">
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
            <p>มีบริการจัดคอร์สอาหาร เฉพาะบุคคล โดยแพทย์ และนักกำหนดอาหาร</p>
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
