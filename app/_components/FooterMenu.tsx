import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_MENU_LISTS } from "@/constants/footerMenuLists";

const FooterMenu: FC = () => {
  return (
    <div className="bg-primary-mustard fixed bottom-0 w-full">
      <ul className="flex container mx-auto">
        {FOOTER_MENU_LISTS.map((list) => {
          return (
            <li key={list.label} className="flex-1 text-center p-2">
              <Link href={list.linkTo} target="_blank">
                <Image
                  className="mx-auto"
                  src={list.imgSrc}
                  alt={list.label}
                  width={30}
                  height={30}
                />
                <p>{list.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterMenu;
