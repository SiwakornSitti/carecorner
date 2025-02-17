import { group } from "console";

export const CATEGORIES = [
  {
    title: `มุมรวมอาหารทางเลือก
    เอาใจสายรักสุขภาพ`,
    description: "ให้มื้อสุขภาพ สุขกว่าที่เคย",
    imageSrc: "/category1.webp",
    url: "/categories",
  },
  {
    title: `มุมรวมผลิตภัณฑ์
    ดูแลผู้สูงอายุและผู้ป่วย`,
    description: "ครบถ้วน หลากหลาย ไม่จำเจ ทั้งของกินและของใช้",
    imageSrc: "/category2.webp",
    url: "/categories",
  },
  {
    title: `มุมลูกน้อยสุขกาย
    แม่ๆสุขใจ`,
    description: "เพื่อสุขภาพที่ดีกว่า",
    imageSrc: "/category3.webp",
    url: "/categories",
  },
  {
    title: `มุมคอร์สอาหาร
    เฉพาะบุคคล`,
    description: "โดยทีมผู้เชี่ยวชาญแพทย์โภชนศาสตร์คลินิก นักกำหนดอาหาร และเชฟ",
    imageSrc: "/category4.webp",
    url: "/categories",
  },
];

export const SHOP_BY_CATEGORIES = [
  // 0
  {
    label: "มุมอาหารอ่อน เหลว กลืนง่าย ลำสำลัก",
    value: "มุมอาหารอ่อน เหลว กลืนง่าย ลำสำลัก",
    image: "/category/121.webp",
  },
  // 1
  {
    label: "มุมอาหารทางสายยาง",
    value: "มุมอาหารทางสายยาง",
    image: "/category/122.webp",
  },
  // 2
  {
    label: "มุมของใช้ดูแลผู้ป่วยติดเตียง",
    value: "มุมของใช้ดูแลผู้ป่วยติดเตียง",
    image: "/category/123.webp",
  },
  // 3
  {
    label: "มุมดูแลผิว เส้นผม และช่องปาก",
    value: "มุมดูแลผิว เส้นผม และช่องปาก",
    image: "/category/124.webp",
  },
  // 4
  {
    label: "มุมผลิตภัณฑ์ดูแลผู้ป่วยมะเร็ง",
    value: "มุมผลิตภัณฑ์ดูแลผู้ป่วยมะเร็ง",
    image: "/category/125.webp",
  },
  // 5
  {
    label: "มุมผลิตภัณฑ์ดูแลผู้ป่วยโรคไต",
    value: "มุมผลิตภัณฑ์ดูแลผู้ป่วยโรคไต",
    image: "/category/126.webp",
  },
  // 6
  {
    label: "มุมผลิตภัณฑ์ดูแลผู้ป่วยเบาหวาน ความดัน",
    value: "มุมผลิตภัณฑ์ดูแลผู้ป่วยเบาหวาน ความดัน",
    image: "/category/127.webp",
  },
  // 7
  {
    label: "มุมสำหรับแม่และเด็ก",
    value: "มุมสำหรับแม่และเด็ก",
    image: "/category/128.webp",
  },
  // 8
  {
    label: "มุมคลีน คีโต คาร์บต่ำ โซเดียมต่ำ",
    value: "มุมคลีน คีโต คาร์บต่ำ โซเดียมต่ำ",
    image: "/category/134.webp",
  },
  // 9
  {
    label: "มุมโปรตีนสูง",
    value: "มุมโปรตีนสูง",
    image: "/category/135.webp",
  },
  // 10
  {
    label: "มุมแคลเซียมสูง",
    value: "มุมแคลเซียมสูง",
    image: "/category/136.webp",
  },
  // 11
  {
    label: "มุมรวมโปรตีนไข่ขาว",
    value: "มุมรวมโปรตีนไข่ขาว",
    image: "/category/137.webp",
  },
  // 12
  {
    label: "มุมเครื่องดื่มและขนมเพื่อสุขภาพ",
    value: "มุมเครื่องดื่มและขนมเพื่อสุขภาพ",
    image: "/category/139.webp",
  },
  // 13
  {
    label: "มุม superfoods",
    value: "มุม superfoods",
    image: "/category/140.webp",
  },
  // 14
  {
    label: "มุมวีแกน เจ มังสวิรัติ",
    value: "มุมวีแกน เจ มังสวิรัติ",
    image: "/category/141.webp",
  },
  // 15
  {
    label: "มุมฮาลาล",
    value: "มุมฮาลาล",
    image: "/category/142.webp",
  },
];

export const CATEGORIES_GROUP_1 = [
  // 0
  {
    label: "มุมดูแลผิว เส้นผม และช่องปาก",
    value: "มุมดูแลผิว เส้นผม และช่องปาก",
    image: "/category/124.webp",
  },
  // 1
  {
    label: "มุมคลีน คีโต คาร์บต่ำ โซเดียมต่ำ",
    value: "มุมคลีน คีโต คาร์บต่ำ โซเดียมต่ำ",
    image: "/category/134.webp",
  },
  // 2
  {
    label: "มุมโปรตีนสูง",
    value: "มุมโปรตีนสูง",
    image: "/category/135.webp",
  },
  // 3
  {
    label: "มุมแคลเซียมสูง",
    value: "มุมแคลเซียมสูง",
    image: "/category/136.webp",
  },
  // 4
  {
    label: "มุมรวมโปรตีนไข่ขาว",
    value: "มุมรวมโปรตีนไข่ขาว",
    image: "/category/137.webp",
  },
  // 5
  {
    label: "มุมเครื่องดื่มและขนมเพื่อสุขภาพ",
    value: "มุมเครื่องดื่มและขนมเพื่อสุขภาพ",
    image: "/category/139.webp",
  },
  // 6
  {
    label: "มุม superfoods",
    value: "มุม superfoods",
    image: "/category/140.webp",
  },
  // 7
  {
    label: "มุมวีแกน เจ มังสวิรัติ",
    value: "มุมวีแกน เจ มังสวิรัติ",
    image: "/category/141.webp",
  },
  // 8
  {
    label: "มุมฮาลาล",
    value: "มุมฮาลาล",
    image: "/category/142.webp",
  },
];

export const CATEGORIES_GROUP_2 = [
  // 0
  {
    label: "มุมอาหารอ่อน เหลว กลืนง่าย ลำสำลัก",
    value: "มุมอาหารอ่อน เหลว กลืนง่าย ลำสำลัก",
    image: "/category/121.webp",
    group: "อาหาร"
  },
  // 1
  {
    label: "มุมอาหารทางสายยาง",
    value: "มุมอาหารทางสายยาง",
    image: "/category/122.webp",
    group: "อาหาร"
  },
  // 2
  {
    label: "มุมของใช้ดูแลผู้ป่วยติดเตียง",
    value: "มุมของใช้ดูแลผู้ป่วยติดเตียง",
    image: "/category/123.webp",
    group: "ของใช้"
  },
  // 3
  {
    label: "มุมผลิตภัณฑ์ดูแลผู้ป่วยมะเร็ง",
    value: "มุมผลิตภัณฑ์ดูแลผู้ป่วยมะเร็ง",
    image: "/category/125.webp",
    group: "แบ่งตามอาการ/ปัญหาสุขภาพ"
  },
  // 4
  {
    label: "มุมผลิตภัณฑ์ดูแลผู้ป่วยโรคไต",
    value: "มุมผลิตภัณฑ์ดูแลผู้ป่วยโรคไต",
    image: "/category/126.webp",
    group: "แบ่งตามอาการ/ปัญหาสุขภาพ"
  },
  // 5
  {
    label: "มุมผลิตภัณฑ์ดูแลผู้ป่วยเบาหวาน ความดัน",
    value: "มุมผลิตภัณฑ์ดูแลผู้ป่วยเบาหวาน ความดัน",
    image: "/category/127.webp",
    group: "แบ่งตามอาการ/ปัญหาสุขภาพ"
  },
];

export const CATEGORIES_GROUP_3 = [
  // 0
  {
    label: "มุมสำหรับแม่และเด็ก",
    value: "มุมสำหรับแม่และเด็ก",
    image: "/category/128.webp",
    group: "อาหาร"
  },
];
