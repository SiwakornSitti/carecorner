import Footer from "@/app/_components/Footer";
import Cover from "@/app/_components/Cover";
import Service from "@/app/_components/Service";
import Partners from "@/app/_components/Partners";
import StrategicPartners from "@/app/_components/StrategicPartners";
import Categories from "./_components/Categories";
import Products from "./_components/Products";
import Promotions from "./_components/Promotions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20">
      <div className="w-full mb-10">
        <Cover />
        <Service className="mt-[-80px]" isShowTitle />
      </div>
      <Promotions className="mb-8" />
      <Products className="mb-8" />
      <Categories className="mb-8" />
      <StrategicPartners className="mb-8" />
      <Partners />
      <Footer />
    </main>
  );
}
