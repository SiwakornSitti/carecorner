import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const menuLists = [
  {
    imgSrc: "/facebook.webp",
    label: "Facebook",
    linkTo: "/",
  },
  {
    imgSrc: "/line.webp",
    label: "LINE",
    linkTo: "/",
  },
  {
    imgSrc: "/lazada.webp",
    label: "Lazada",
    linkTo: "/",
  },
  {
    imgSrc: "/shopee.webp",
    label: "Shopee",
    linkTo: "/",
  },
  {
    imgSrc: "/tiktok.webp",
    label: "Tiktok",
    linkTo: "/",
  },
];

const FooterMenu: FC = () => {
  return (
    <div
      className="bg-primary-mustard fixed bottom-0 w-full"
    >
      <ul className="flex container mx-auto">
        {menuLists.map((list) => {
          return (
            <li key={list.label} className="flex-1 text-center p-2">
              <Link href={list.linkTo}>
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
