import Divide from "@/components/Divide";
import { Button } from "@nextui-org/button";
import { SOCIALS } from "@/constants/socials";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main className="min-h-screen items-center pb-20 text-secondary-brown">
      <section className="pt-10 px-3 mb-10">
        <div className="bg-secondary-yellow px-2 py-6 rounded-xl relative text-center card-shadow">
          <h1 className="font-bold text-xl mb-8 bg-white inline-block px-6 py-1 rounded-2xl">
            Contact Us | ติดต่อเรา
          </h1>

          <b className="block">
            บริษัท แคร์ คอร์เนอร์ แอนด์ มอร์ จำกัด (สำนักงานใหญ่)
          </b>
          <p className="mb-6 text-sm">
            600/712 หมู่ 14 ถ.พหลโยธิน ต.คูคต อ.ลำลูกกา จ.ปทุมธานี 12130
          </p>
          <p className="mb-6">
            <b>เบอร์ติดต่อ</b> +66 86-399-4229
          </p>
          <p>
            <b>Email</b> info.carecornerandmore@gmail.com
          </p>
        </div>
      </section>
      <Divide className="mb-10" />
      <Button
        className="text-white w-full max-w-80 text-lg py-1 box-content mb-4 mx-auto block"
        color="warning"
      >
        <b className="text-shadow">คลิก เพื่อเลือกช่องทางที่คุณต้องการช้อป</b>
      </Button>
      <section className="px-3 mb-4">
        <div className="bg-secondary-yellow px-8 py-6 rounded-xl relative text-center card-shadow">
          <h1 className="font-bold text-lg mb-4 text-stork inline-block px-6 py-1 rounded-2xl whitespace-pre-line">
            {`สามารถติดต่อเพื่อรับสินค้าด้วยตนเองได้ที่
            ซอยพหลโยธิน 111 (รังสิต-ดอนเมือง)`}
          </h1>

          <div className="flex flex-col gap-y-4">
            {SOCIALS.map((social) => {
              return (
                <div key={social.alt} className="flex gap-x-4">
                  <div>
                    <Link href={social.linkTo}>
                      <Image
                        src={social.image}
                        alt={social.alt}
                        width={45}
                        height={45}
                      />
                    </Link>
                  </div>
                  <div className="flex-1 text-left">
                    <Link href={social.linkTo}>
                      <b>{social.title}</b>
                    </Link>
                    <p className="text-sm">{social.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
