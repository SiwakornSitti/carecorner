import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20">
      <div className="w-full">
        <section className="pb-20 bg-primary-mustard">
          <div className="container mx-auto">
            <Image
              className="w-full h-auto md:w-1/2 sm:w-3/4 mx-auto"
              src="/header.webp"
              alt="care conner promote"
              width={523}
              height={261}
              priority
            />
          </div>
        </section>
        <section className="text-secondary-brown px-3 max-w-2xl mx-auto">
          <div className="bg-white p-1 border border-secondary-yellow rounded-2xl mt-[-80px]">
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
                  src="/food.webp"
                  className="mx-auto h-20"
                  alt="catering"
                  width={75}
                  height={75}
                />
                <p>มีบริการจัดคอร์สอาหารเฉพาะบุคคลและ Catering</p>
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
      </div>

      <section className="bg-white w-full">
        <div className="container mx-auto p-4">
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
    </main>
  );
}
