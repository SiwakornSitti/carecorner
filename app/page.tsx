import Footer from "@/app/_component/Footer";
import Cover from "@/app/_component/Cover";
import Service from "@/app/_component/Service";
import Partner from "@/app/_component/Partner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20">
      <div className="w-full mb-5">
        <Cover />
        <Service />
      </div>
      <section>
        <h1 className="text-secondary-brown text-sm mb-5">
          Recommended for You | สินค้าแนะนำสำหรับคุณ
        </h1>
      </section>
      <section>
        <h1 className="text-secondary-brown text-sm mb-5">
          Shop by Category | ช้อปตามหมวดหมู่
        </h1>
      </section>
      <section>
        <h1 className="text-secondary-brown text-sm mb-5">
          Our Strategic Partners | พันธมิตรเชิงกลยุทธ์ของเรา
        </h1>
      </section>
      <Partner />
      <Footer />
    </main>
  );
}
