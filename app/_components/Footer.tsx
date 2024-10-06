import { FC } from "react";
import Image from "next/image";
import Service from "./Service";
import Divide from "@/components/Divide";

const Footer: FC = () => {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto p-4">
        <Service />
        <p className="text-secondary-brown max-w-xs text-center my-8 mx-auto">
          นโยบายการคืนสินค้า: สามารถคืนสืนค้าที่ชำรุดจากการผลิต หรือการจัดส่งได้
          ภายใน 7 วันหลังจากได้รับสินค้า
        </p>
        <Divide />
        <h1 className="text-primary-mustard font-bold mb-2">ติดต่อเรา</h1>
        <div className="flex justify-between">
          <div>
            <b className="text-secondary-brown text-sm">
              บริษัท แคร์ คอร์เนอร์ แอนด์ มอร์ จำกัด
            </b>
            <p className="text-secondary-brown mb-4 text-sm">
              600/712 หมู่ 14 ถ.พหลโยธิน ต.คูคต อ.ลำลูกกา จ.ปทุมธานี 12130
            </p>
          </div>
          <div className="sr-only sm:not-sr-only">
            <Image
              src="/footer-delivery.webp"
              width={120}
              height={45}
              alt="contact"
              className="w-32 h-11"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="leading-none text-sm">
            <div className="mb-2">
              <b className="text-primary-mustard">เบอร์ติดต่อ</b>
              <p className="inline text-secondary-brown mb-2"> 086-399-4229</p>
            </div>
            <div>
              <b className="text-primary-mustard">อีเมล</b>
              <p className="inline text-secondary-brown">
                {" "}
                info.carecornerandmore@gmail.com
              </p>
            </div>
          </div>
          <div className="sr-only sm:not-sr-only">
            <Image
              src="/footer-contact.webp"
              width={120}
              height={45}
              alt="contact"
              className="w-32 h-11"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-secondary-brown p-2 text-xs">
        Copyright @ 2024 Care Corner and More | All right reserved
      </p>
    </section>
  );
};

export default Footer;
