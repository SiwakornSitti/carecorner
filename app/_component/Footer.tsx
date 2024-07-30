import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto p-4">
        <p className="text-secondary-brown max-w-xs text-center my-8 mx-auto">
          นโยบายการคืนสินค้า: สามารถคืนสืนค้าที่ชำรุดจากการผลิต หรือการจัดส่งได้
          ภายใน 7 วันหลังจากได้รับสินค้า
        </p>
        <div className="mx-auto flex justify-center items-center my-8">
          <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
          <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
          <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
          <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
          <Image alt="logo" src="/logo-only.webp" width={22} height={21} />
        </div>

        <h3 className="text-primary-mustard">ติดต่อเรา</h3>
        <b className="text-secondary-brown">
          บริษัท แคร์ คอร์เนอร์ แอนด์ มอร์ จำกัด
        </b>
        <p className="text-secondary-brown">
          600/712 หมู่ 14 ถ.พหลโยธิน ต.คูคต อ.ลำลูกกา จ.ปทุมธานี 12130
        </p>
        <div className="leading-none">
          <b className="text-primary-mustard">เบอร์ติดต่อ</b>
          <p className="inline text-secondary-brown"> 086-399-4229</p>
        </div>
        <div className="leading-none">
          <b className="text-primary-mustard">อีเมล</b>
          <p className="inline text-secondary-brown">
            {" "}
            info.carecornerandmore@gmail.com
          </p>
        </div>
      </div>
      <p className="text-center text-secondary-brown p-2">
        Copyright @ 2024 Care Corner and More | All right reserved
      </p>
    </section>
  );
};

export default Footer;
