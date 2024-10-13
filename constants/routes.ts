import {
  CATEGORIES_GROUP_1,
  CATEGORIES_GROUP_2,
  CATEGORIES_GROUP_3,
} from "@/constants/categories";

export const ROUTES = [
  { name: "Home | หน้าหลัก", path: "/" },
  { name: "About Us | เกี่ยวกับเรา", path: "/about-us" },
  {
    name: "Our Products | สินค้าของเรา",
    path: "/products",
    subRoutes: {
      name: "มุมคนรักสุขภาพและทุกคนในครอบครัว",
      routes: [
        ...CATEGORIES_GROUP_1,
        ...CATEGORIES_GROUP_2,
        ...CATEGORIES_GROUP_3,
      ].map((category) => {
        return {
          name: category.label,
          path: `/products?category=${category.label}`,
        };
      }),
    },
  },
  {
    name: "News, Activities & Promotions | ข่าวสาร กิจกรรม และโปรโมชั่น",
    path: "/news",
  },
  {
    name: "Articles | บทความ",
    path: "/articles",
  },
  {
    name: "Contact Us | ติดต่อเรา",
    path: "/contact-us",
  },
];
