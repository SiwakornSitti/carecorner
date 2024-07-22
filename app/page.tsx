import Image from "next/image";
import Footer from "@/app/_component/Footer";
import Cover from "@/app/_component/Cover";
import Service from "@/app/_component/Service";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20">
      <div className="w-full">
        <Cover />
        <Service />
      </div>
      <Footer />
    </main>
  );
}
