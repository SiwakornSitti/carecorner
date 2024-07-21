import { FC, PropsWithChildren } from "react";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Navbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="font-bold text-primary-orange text-xs text-center p-1.5">
        ส่งฟรี! เมื่อช้อปครบ 1,999.- (ส่วนลดค่าจัดส่ง สูงสุด 100.-)
      </div>
      <div className="bg-primary-mustard">
        <div className="flex container mx-auto items-center py-1 pr-3">
          <div className="flex items-center">
            <Image
              src="/logo.webp"
              alt="care-conner-logo"
              width={89}
              height={41}
            />
            <p className="text-sm p-2 font-light">
              มุมที่พร้อมดูแลคุณ ทุกช่วงวัย
            </p>
          </div>

          <div className="flex gap-x-2 flex-1 items-center justify-end">
            <UserIcon className="w-5 h-5" />
            <HeartIcon className="w-5 h-5" />
            <ShoppingCartIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="bg-primary-mustard">
        <div className="p-2 flex container mx-auto">
          <div className="flex gap-x-4 flex-1 items-center">
            <Image src="/menu.svg" alt="menu-logo" width={20} height={14} />
            <p className="text-sm">Home | หน้าหลัก</p>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="max-w-60">
              <Input
                placeholder="ค้นหาสินค้า/บทความ"
                classNames={{
                  inputWrapper: "rounded-xl h-7 min-h-0",
                  input: "text-xs placeholder:text-secondary-brown",
                }}
                endContent={
                  <MagnifyingGlassIcon className="w-6 h-6 text-primary-mustard" />
                }
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
