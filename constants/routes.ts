export const ROUTES = [
  { name: "Home | หน้าหลัก", path: "/" },
  { name: "About Us | เกี่ยวกับเรา", path: "/about-us" },
  {
    name: "Our Products | สินค้าของเรา",
    path: "/products",
    subRoutes: {
      name: "มุมคนรักสุขภาพและทุกคนในครอบครัว",
      routes: [
        {
          name: "มุมคลีน คีโต คาร์บต่ำ โซเดียมต่ำ",
          path: "/products",
        },
        {
          name: "มุมเครื่องดื่ม เพื่อสุขภาพ",
          path: "/products",
        },
        {
          name: "มุมขนม เพื่อสุขภาพ",
          path: "/products",
        },
        {
          name: "มุม SUPERFOODS",
          path: "/products",
        },
      ],
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
