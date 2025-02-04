"use client";
import ShopByCategory from "@/app/_components/ShopByCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop by categories | หมวดหมู่สินค้า",
  description: "สินค้าจัดแยกตามหมวดหมู่",
};

export default function Categories() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <div className="container mx-auto p-3 md:pt-6">
        <ShopByCategory />
      </div>
    </main>
  );
}
