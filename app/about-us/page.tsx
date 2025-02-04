import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <section className="pt-32 px-10 mb-14">
        <div className="bg-secondary-yellow p-6 rounded-xl relative text-center card-shadow">
          <Image
            src="/home.webp"
            width={90}
            height={86}
            alt="home"
            className="absolute top-[-6rem]"
          />
          <h1 className="font-bold text-2xl mb-4 text-white-shadow text-stork">
            Our Company | บริษัทของเรา
          </h1>
          <b className="mb-4 block">
            Care Corner and More Co., Ltd. a Center of Health & Wellness
            Products and Services for All Ages
          </b>
          <p>
            บริษัทแคร์ คอร์เนอร์ แอนด์ มอร์ จำกัด
            ศูนย์รวมสินค้าอุปโภคบริโภคเพื่อสุขภาพ ทุกช่วงวัย
          </p>
        </div>
      </section>

      <section className="mb-14 w-full">
        <div className="bg-primary-mustard px-6 py-16 text-center relative">
          <Image
            src="/light.webp"
            width={90}
            height={86}
            alt="light"
            className="absolute top-[-2rem] right-0"
          />
          <h1 className="font-bold text-2xl mb-10 text-white-shadow">
            Our Vision | วิสัยทัศน์ของเรา
          </h1>
          <b className="mb-6 block">
            Ready to Take Care of You at “Any Ages” with Service Beyond
            Expectation
          </b>
          <p>
            {`เราพร้อมดูแลคุณ "ทุกช่วงวัย" ด้วยความตั้งใจบริการที่เหนือความคาดหมาย`}
          </p>
        </div>
      </section>

      <section className="pt-24 px-10 mb-14">
        <div className="bg-secondary-yellow p-6 rounded-xl relative text-center card-shadow">
          <Image
            src="/goal.webp"
            width={115}
            height={111}
            alt="goal"
            className="absolute top-[-7.5rem]"
          />
          <h1 className="text-white-shadow font-bold text-2xl mb-10">
            Our Mission | พันธกิจของเรา
          </h1>
          <p className="mb-4">
            เรามุ่งมั่นที่จะเป็น<b>”มุม”สุขกายสบายใจ</b>ให้กับ
            <b>{`"ทุกช่วงวัย"`}</b>
            ไม่ว่าจะเป็น
            <b>ผู้รักสุขภาพ เด็ก ผู้ใหญ่ ผู้สูงอายุ หรือผู้ป่วย</b>
          </p>
          <p className="mb-4">
            เพื่อให้สามารถเข้าถึงสินค้าและบริการที่มี<b>คุณภาพ</b>
            ที่คัดสรรมาอย่างพิถีพิถัน <b>ตอบโจทย์</b>ความต้องการเฉพาะ รวมถึงให้
            <b>ความรู้และคำแนะนำที่ถูกต้องและจริงใจ</b>
          </p>
          <p className="mb-4">
            เราพร้อมเป็นส่วนหนึ่งที่ช่วยให้ทุกคนมี
            <b>คุณภาพชีวิตที่ดีขึ้น “สุข”ทั้งคนดูแลและคนรับ</b>
          </p>
        </div>
      </section>
    </main>
  );
}
