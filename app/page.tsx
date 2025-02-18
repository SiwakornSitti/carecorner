import Footer from "@/app/_components/Footer";
import Cover from "@/app/_components/Cover";
import Service from "@/app/_components/Service";
import Partners from "@/app/_components/Partners";
import StrategicPartners from "@/app/_components/StrategicPartners";
import Categories from "./_components/Categories";
import Products from "./_components/Products";
import Promotions from "./_components/Promotions";
import Articles from "./_components/Articles";
import { ARTICLES } from "@/constants/articles";
import { NEWS } from "@/constants/news";

const lastUpdateArticles = ARTICLES.slice(-2).map((each) => ({
  id: each.id,
  title: each.title,
  subTitle: each.subTitle,
  image: each.cover,
  date: each.date
}))

const lastUpdateNews = NEWS.slice(-2).map((each) => ({
  id: each.id,
  title: each.title,
  subTitle: each.subTitle,
  image: each.cover,
  date: each.date
}))

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
      <Articles title="News | ข่าวสาร" className="px-2 mb-8" data={lastUpdateNews} />
      <Articles title="Articles | บทความ"  className="px-2 mb-8" data={lastUpdateArticles} />
      <StrategicPartners className="mb-8" />
      <Partners />
      <Footer />
    </main>
  );
}
