"use client";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/constants/products";
// import { SHOP_BY_CATEGORIES } from "@/constants/categories";
import { Button } from "@nextui-org/button";
// import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import ShopByCategory from "@/app/products/_components/ShopByCategory";
import Divide from "@/components/Divide";
// import Image from "next/image";

export default function Products() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pb-20 text-secondary-brown">
        <div className="container mx-auto p-3 md:pt-6">
          <ShopByCategory />
          <Divide />
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <h1 className="font-semi">All Products สินค้าทั้งหมด</h1>
            </div>

            {/* <div>
              <Button onClick={onOpen}>
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                ช้อปตามหมวดหมู่
              </Button>
            </div> */}
          </div>

          <div className="flex gap-x-2 gap-y-2 justify-center md:justify-start lg:gap-x-5 lg:gap-y-5 flex-wrap">
            {PRODUCTS.map((product) => {
              const price =
                product.sku[0].options?.[0]?.options?.[0]?.options?.[0]
                  ?.value ||
                product.sku[0].options?.[0]?.options?.[0]?.value ||
                product.sku[0].options?.[0]?.value;

              const beforeDiscount =
                product.sku[0].options?.[0]?.options?.[0]?.options?.[0]
                  ?.beforeDiscount ||
                product.sku[0].options?.[0]?.options?.[0]?.beforeDiscount ||
                product.sku[0].options?.[0]?.beforeDiscount;

              const size =
                product.sku[0].options?.[0]?.options?.[0]?.options?.[0]
                  ?.label ||
                product.sku[0].options?.[0]?.options?.[0]?.label ||
                product.sku[0].options?.[0]?.label;

              return (
                <ProductCard
                  key={product.name}
                  imageSrc={product.image}
                  name={product.name}
                  description={product.description}
                  price={beforeDiscount}
                  discountPrice={price}
                  size={size}
                  recommends={product.recommends}
                />
              );
            })}
          </div>
        </div>
      </main>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        placement="auto"
      >
        <ModalContent className="text-secondary-brown">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Shop by Category | ช้อปตามหมวดหมู่
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap gap-2 justify-center">
                  {/* {SHOP_BY_CATEGORIES.map((category) => {
                    return (
                      <Image
                        key={category}
                        src={`/category/${category}.png`}
                        alt="untitle"
                        width={60}
                        height={60}
                      />
                    );
                  })} */}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
