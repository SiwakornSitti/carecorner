"use client";
import { FC, Fragment, PropsWithChildren, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";

const Navbar: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const path = decodeURIComponent(pathname);

  return (
    <div style={{ paddingTop: 106 }}>
      <div className="fixed w-full top-0 z-50">
        <div className="font-bold text-primary-orange text-xs text-center p-1.5 bg-primary-cream">
          ส่งฟรี! เมื่อช้อปครบ 1,999.- (ส่วนลดค่าจัดส่ง สูงสุด 100.-)
        </div>
        <div className="bg-primary-mustard">
          <div className="flex container mx-auto items-center py-1 pr-3">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.webp"
                  alt="care-corner-logo"
                  width={89}
                  height={41}
                  className="inline"
                />

                <p className="text-sm p-2 font-light inline">
                  มุมที่พร้อมดูแลคุณ ทุกช่วงวัย
                </p>
              </Link>
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
              <button onClick={toggleDrawer}>
                <Image src="/menu.svg" alt="menu-logo" width={20} height={14} />
              </button>
              <p className="text-sm">
                {ROUTES.find((route) => route.path === pathname)?.name}
              </p>
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
      </div>

      <div
        className={classNames("flex w-full transition-all", {
          "md:pl-80": isOpen,
          "md:pl-0": !isOpen,
        })}
      >
        <div
          ref={ref}
          className={classNames(
            "w-80 h-full text-secondary-brown bg-white text-sm fixed z-50 transition-all overflow-y-scroll pb-40",
            { "left-[-80rem]": !isOpen, "left-0": isOpen }
          )}
        >
          {ROUTES.map((route) => {
            return (
              <Fragment key={route.name}>
                <div className="font-semibold flex">
                  <Link
                    onClick={toggleDrawer}
                    href={route.path}
                    className={classNames(
                      "p-3 w-full d-block hover:bg-secondary-orange hover:text-white",
                      {
                        "bg-secondary-orange": pathname === route.path,
                        "text-white": pathname === route.path,
                      }
                    )}
                  >
                    {route.name}
                  </Link>
                </div>
                {Boolean(route?.subRoutes) && (
                  <>
                    <div className="font-semibold flex p-4 items-center bg-secondary-yellow">
                      <Image
                        alt="logo"
                        src="/logo2.webp"
                        width={22}
                        height={21}
                      />
                      {route?.subRoutes?.name}
                    </div>
                    <ul>
                      {route?.subRoutes?.routes?.map((subRoute) => {
                        return (
                          <Link
                            href={subRoute.path}
                            key={subRoute.name}
                            onClick={toggleDrawer}
                          >
                            <li
                              className={classNames(
                                "p-4 pl-7 hover:bg-secondary-orange hover:text-white",
                                {
                                  "bg-secondary-orange": subRoute.path === path,
                                  "text-white": subRoute.path === path,
                                }
                              )}
                            >
                              {subRoute.name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </>
                )}
              </Fragment>
            );
          })}
        </div>
        <div className="w-full md:w-auto md:flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
