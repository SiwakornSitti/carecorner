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
    path: "/categories",
    subRoutes: [{
      name: "มุมคนรักสุขภาพ และทุกคนในครอบครัว",
      // routes:  CATEGORIES_GROUP_1.map((category) => {
      //   return {
      //     name: category.label,
      //     path: `/categories/${category.label}`,
      //   };
      routes: [
        {
          name: "มุมคลีน คีโต คาร์บต่ำ โซเดียมต่ำ",
          path: `/categories/มุมคลีน คีโต คาร์บต่ำ โซเดียมต่ำ`,
        },
        {
          name: "มุมเครื่องดื่มเพื่อสุขภาพ",
          path: `/categories/มุมเครื่องดื่มเพื่อสุขภาพ`,
        },
        {
          name: "มุมขนมเพื่อสุขภาพ",
          path: `/categories/มุมขนมเพื่อสุขภาพ`,
        },
        {
          name: "มุมซูเปอร์ฟู้ด Superfood",
          path: `/categories/มุม superfoods`,
        },
        {
          name: "มุมโปรตีนสูง",
          path: `/categories/มุมโปรตีนสูง`,
        },
        {
          name: "มุมรวมโปรตีนไข่ขาว",
          path: `/categories/มุมรวมโปรตีนไข่ขาว`,
        },
        {
          name: "มุมแคลเซียมสูง",
          path: `/categories/มุมแคลเซียมสูง`,
        },
        {
          name: "มุมวีแกน เจ มังสวิรัติ",
          path: `/categories/มุมวีแกน เจ มังสวิรัติ`,
        },
        {
          name: "มุมฮาลาล",
          path: `/categories/มุมฮาลาล`,
        },
      ]
    },
    {
      name: "มุมผู้สูงอายุและผู้ป่วย",
      routes: [
        {
          name: "อาหาร",
          routes: [
            {
              name: "มุมอาหารอ่อน เหลว กลืนง่าย ลดสำลัก",
              path: `/categories/มุมอาหารอ่อน เหลว กลืนง่าย ลำสำลัก`,
            },
            {
              name: "มุมอาหารทางสายยาง",
              path: `/categories/มุมอาหารทางสายยาง`,
            },
            {
              name: "มุมโปรตีนสูง",
              path: `/categories/มุมโปรตีนสูง`,
            },
            {
              name: "มุมรวมโปรตีนไข่ขาว",
              path: `/categories/มุมรวมโปรตีนไข่ขาว`,
            },
            {
              name: "มุมแคลเซียมสูง",
              path: `/categories/มุมแคลเซียมสูง`,
            }
          ]
        },
        {
          name: "ของใช้",
          routes: [
            {
              name: "มุมดูแลผิว เส้นผม และช่องปาก",
              path: `/categories/มุมดูแลผิว เส้นผม และช่องปาก`,
            },
            {
              name: "มุมของใช้ดูแลผู้ป่วยติดเตียง/ผู้ป่วยมีภาวะพึ่งพิง",
              path: `/categories/มุมของใช้ดูแลผู้ป่วยติดเตียง`,
            },
          ]
        },
        {
          name:"แบ่งตามอาการ/ปัญหาสุขภาพ",
          routes: [
            {
              name: "มุมดูแลผู้ป่วยมะเร็ง",
              path: `/categories/มุมดูแลผู้ป่วยมะเร็ง`,
            },
            {
              name: "มุมดูแลผู้ป่วยเบาหวาน ความดัน ไขมันในเลือดสูง",
              path: `/categories/มุมดูแลผู้ป่วยเบาหวาน ความดัน ไขมันในเลือดสูง`,
            },
          ]
        }
      ]
      // routes: CATEGORIES_GROUP_2.map((category) => {
      //   return {
      //     name: category.label,
      //     path: `/categories/${category.label}`,
      //   };
      // }),
    },
    {
      name: "มุมลูกน้อยสุขกาย แม่ๆ สุขใจ",
      routes: [
        {
          name: "อาหาร",
          routes: [
            {
              name: "มุมอาหารสำหรับเด็ก 6 เดือนขึ้นไป",
              path: `/categories/มุมอาหารสำหรับเด็ก 6 เดือนขึ้นไป`,
            },
            {
              name: "มุมอาหารสำหรับเด็ก 1 ปีขึ้นไป",
              path: `/categories/มุมอาหารสำหรับเด็ก 1 ปีขึ้นไป`,
            },
            {
              name: "มุมสำหรับคุณแม่",
              path: `/categories/มุมสำหรับแม่และเด็ก`,
            },
            {
              name: "มุมผลิตภัณฑ์เสริมอาหารสำหรับเด็ก",
              path: `/categories/มุมผลิตภัณฑ์เสริมอาหารสำหรับเด็ก`,
            }
          ]
        },
        {
          name: "ของใช้",
          routes: [
            {
              name: "มุมผลิตภัณฑ์ดูแลร่างกาย",
              path: `/categories/มุมผลิตภัณฑ์ดูแลร่างกาย`,
            },
          ]
        },
      ],
    }
  ],
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
