import { PRODUCTS } from "@/constants/products";
import Link from "next/link";
import Gallery from "./_components/Gallery";
import Options from "./_components/Options";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Product({ params }: { params: { product: string } }) {
  const productName = decodeURIComponent(params.product);
  const product = PRODUCTS.find((product) => {
    return product.name === productName;
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
      <div className="container mx-auto md:pt-6 p-3">
        <h1 className="mb-6">
          <Link href="/categories" className="hover:underline">
            All Products สินค้าทั้งหมด
          </Link>
          <span>{` > `}</span>
          <span>{productName}</span>
        </h1>
        <div className="flex flex-col gap-y-2">
          <div className="mb-4">
            <Gallery productName={productName} images={product?.images} />
          </div>

          <h1 className="font-semibold">{product?.name}</h1>
          <p>{product?.description}</p>

          <Options data={product?.sku} />
          <Link href={"https://lin.ee/FJ2bCMW"}>
            <Button className="text-white font-bold max-w-24" color="warning">
              ช้อปเลย
            </Button>
          </Link>
          <div className="flex items-center gap-x-2">
            <p className="text-lg text-primary-warning font-semibold">
              {`คลิกเพื่อช้อปเลย >>`}
            </p>
            <Link href={"https://lin.ee/FJ2bCMW"}>
              <Image
                src={"/social/LINE.png"}
                width={40}
                height={40}
                alt="LINE"
              />
            </Link>
            <Link href={"https://shopee.co.th/carecornerandmore"}>
              <Image
                src={"/social/Shopee.png"}
                width={40}
                height={40}
                alt="Shopee"
              />
            </Link>
            <Link href={"https://lazada.co.th/carecornerandmore"}>
              <Image
                src={"/social/LZD.png"}
                width={40}
                height={40}
                alt="Lazada"
              />
            </Link>
            <Link href={"https://tiktok.com/@carecornerandmore"}>
              <Image
                src={"/social/Tiktok.png"}
                width={40}
                height={40}
                alt="Tiktok"
              />
            </Link>
          </div>

          <Link href={"https://lin.ee/FJ2bCMW"}>
            <button className="bg-secondary-yellow rounded-2xl w-full py-3 drop-shadow-xs text-secondary-brown text-white-shadow font-bold max-w-md">
              สะสมแต้ม เพื่อรับโค้ดลดพิเศษ เพียงช้อปทาง LINE Official
            </button>
          </Link>

          <div className="">
            <h2 className="font-semibold inline-block mr-2">Categories:</h2>
            {product?.categories?.join(", ")}
          </div>

          <div className="">
            <h2 className="font-semibold inline-block mr-2">Tags:</h2>
            {product?.recommends?.join(", ")}
          </div>

          <div>
            <h2 className="font-semibold">Description รายละเอียดสินค้า :</h2>
            <div className="whitespace-pre-line">{product?.detail}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
