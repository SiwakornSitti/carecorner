export type Product = {
  name: string;
  image: string;
  recommends: string[];
  categories: string[];
  description: string;
  detail: string;
  sku: Option[];
};

export type Option = {
  label: string;
  options?: Option[];
  value?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Innoweness NutriMax อินโนวีเนส นูทริแม็กซ์",
    image:
      "https://lh3.googleusercontent.com/fife/ALs6j_HAyyYV1rsrwQkyTKKBxHgIERvlThr7WTb2lLcYb64fcmEfHNGREn-EdXUk00vB_94eFDPdzdGIFkyjttXPMWUp0nqGTpPa5zEZOQrU138FGcef2sUj3o3qyYMtSs0g54qwMDJyIhMFdR00oMODatK-WckSCx0iRcawWHzxeeX-Bmo5_hmGRxWzNgAg1UTKYptZ5IkS080bS0x-XvQo3gHXwNPF5roXAYJ6JblNJHlgbKM-WUCXlzJE4rccw5n1uNiWXjrJQ9auJlwTXeI97P83pPJ2Lv2qp2TrWNFiuf87X2QAVb7LEKUMVVi8UHz5xzM7wzRz1T6b5bknneVoPOZoIISHhrs7Mx_6VFJ7o5XoLxjWJhF-Dur3uGYAmFqnOEOuXuQQXmLfXtQI_THjvu5Kjcwot9zj-Scs1BbIkWVUnUjQs0vvkdYm7jDobVc2FCwbJCl0dXKZHvmsJ8pw3CvhJ4a6O6sHUoQXGgsK64cyUv1nM8kNS-UL_-PfM71fcC6Tn65P4VD-4tosoR_hk3Yp8wyThT8l7iYrl7OV54oNGaNzXnFmNFjNri-d_c-z95YJ0eQ4fRXik3W_5AZf3GJd4VnNOlgmuVzj2GkEGAhMx2WfwaxEI6yLsLtx2eN8Fk8OIb7TH5ZJtBK3me8gf8ykzS-IrceNjLoxt1ssBFr3JU0yUnr9sVsdV7V7GddIJEOBImulTiUTguBpneJbwdacMCpnYkn0r4_94fAKpRcoAW_0otNflT-YF4MTv4zkBfzNyd4ZM883xcGupWM2VbUOJ7-NLhRkpOb6f2AzGFmciewxwyHWwiztwm1H-6miM5xjgQDwui1P4nEcRDqsqhqUR_hn67_ttaxqw4gTu4rzLtwFa436IFR22aGHAUqlN1IW71bYUkoTvXS7GhWhJ46Zldk2JFMw2_4qHYObVMo5VdxP6PNDE9MiWoU262b6eTf-n7M5UTlbbr7ZFV6-VB_ppmYvn4mmn2o8U4poMjwRotkhmDfuQMpYXYKIgJc87EQ1l4PUO1asnQDH5qNvMMaZC3_CNJS_wdNlIjw6BX-2B8WjTBXg7mIFSgJIeKxRuO_Gl-v5eoqrb47kh3HoMZi1wTKlI3MepM2Rappdc0Vdul-J76RME2fTLJO9Gs98z3sLVyPIq23R3Ut-yU_koy2POjQp8bwaGXYhO9iB9LYB3OD2EIhoP0afD0Tpx28QmVNiQv6X8PV3BzQn0V0yd_A_NIWEsSaOo_ffNwmwMJWHtKawDXvFnDaPltnJ0A8jezAdAfjtvPst1dd4X2Dwt1QJh-ZIyXH3QjGh8I5D0OwZXYh6Qoy20Ou2CHgo4yTHndTwMzulL7rKPLK8O5-69g9LNAmB08DYLdUbrp9PzYZCvG2_m_Yq7rLPOXs85J7nWbqyj9bQ49fqZqCzJnf8yud_CObMM-R39sDWQ9f0UES_HlTVU7UY0SE_-MazYrdss2NYTJrwqWmjpq2GjxVCs4N-KtNUtuWTZFl5Fnqiv11K0V5JC0N1Z4R9sqMO9g6FwvAAtRit-IOMMfcSYjzfjk3vNfEZlESblYLjJRumXVY6D00Wc_tyy5l4ZYRs0XRXZ1_MhQjOJ4UmVB7gFA=w2954-h1696",
    recommends: [
      "ผู้มีปัญหาเคี้ยวกลืน",
      "ผู้สูงอายุ",
      "ผู้ป่วยพักฟื้น",
      "ผู้ป่วยมะเร็ง",
    ],
    categories: [
      "มุมอาหารอ่อน เหลว กลืนง่าย ลำสำลัก",
      "มุมอาหารทางสายยาง",
      "มุมผลิตภัณฑ์ดูแลผู้ป่วยมะเร็ง",
    ],
    description:
      "อาหารทางการแพทย์ พร้อมทาน สูตรครบถ้วน มาตรฐานรามาธิบดี ให้ทางสายยางได้ เหมาะกับผู้มีปัญหาเคี้ยวกลืน ผู้สูงอายุ ผู้ป่วยพักฟื้น",
    detail: `InnoWeness NutriMax อาหารทางการแพทย์ อาหารสูตรครบถ้วน ครบ 5 หมู่ สูตรมาตรฐานรามาธิบดี ทดแทนมื้ออาหาร พร้อมทาน ด้วยโปรตีนจากอกไก่และไข่ พร้อมวิตามินและแร่ธาตุรวม 20 ชนิด มี 278 แคลอรี/ซอง

เหมาะสำหรับ
-ผู้ป่วยระยะพักฟื้น
-ผู้ที่มีภาวะขาดสารอาหาร หรือได้รับปริมาณสารอาหารไม่เพียงพอ
-ผู้ป่วยทั้วไปที่ได้รับอาหารทางสายให้อาหาร (ผ่านระบบทางเดินอาหารและสายสวนกระเพาะอาหาร)

ใช้กระบวนการผลิตด้วยกรรมวิธีเดียวกับอาหารทางการแพทย์
ที่ช่วยรักษาคุณค่าทางสารอาหารได้ดี และปลอดภัย

ส่วนประกอบ : 
น้ำ 55.63%
เนื้ออกไก่ 17.80%
กลูโคสไซรัป 11.30%
ฟักทอง 5.90%
ไข่ 4.50%
น้ำมันรำข้าว 2.50%
มอลโทเดกซ์ทริน 0.90%
เกลือแร่รวม 0.55%
วิตามินรวม 0.03%
วัตถุเจือปนอาหาร (INS322(II))

ข้อมูลสำหรับผู้แพ้อาหาร : มีไข่และถั่วเหลือง

วิธีการรับประทาน
1. เขย่าถุงอาหารให้เป็นเนื้อเดียวกัน ฉีกซองเทใส่ภาชนะ สามารถรับประทานได้ทันที
2. หากต้องการความอร่อย สามารถอุ่นร้อนโดยการต้มทั้งถุง หรือ เทใส่ภาชนะอุ่นไม่โครเวฟ
3. สำหรับการให้อาหารทางสายให้อาหาร เขย่าถุงอาหารให้เป็นเนื้อเดียวกัน ฉีกซองเทใส่ภาชนะสำหรับให้อาหารทางสายให้อาหาร`,
    sku: [
      {
        label: "จำนวน",
        options: [
          {
            label: "1 ซอง x 300 กรัม",
            value: "79",
          },
          {
            label: "1 กล่อง(6 ซอง)",
            value: "419",
          },
          {
            label: "6 กล่อง(36 ซอง)",
            value: "2299",
          },
        ],
      },
    ],
  },
  {
    name: "Eggyday เอกกี้เดย์ ข้าวไข่ขาว",
    image:
      "https://lh3.googleusercontent.com/fife/ALs6j_HunJh4Y4WENWvxfhxvBg1-69vHeswLjO1EnENbQAQD3jIyikvOOonNekRhiz7TlwppCZNP40r6gciw5JFF8moh-UAd-LxRxrKGsWXhUhV9z4KMcVv1vptlIvs0fdJqECU_G1c_YH8VKD_MxAlWsajT7NyGEC0FCaXcKHfiT_CVel9fVxL6h7x6_cFlEcisC0DGNro0yTjGdx2Keq8A1eU3MHltUqXNyludRN6fJEwcLAc-6Ay2-ycSNr5P5uH6Gdg0cfxMyBDrankpiEorLDH8tY3MImB-pft27aFMHnvfU4YW970j234qwbC_rGEzi5ez4D_mg6jzeJDuGPg8VwmchIpvA7KeOeb65ES2K3UsK62pvdzPEMx_b16rzRMCZDS8ZxgsQzfnBLqxzqzZqH8CryPOvw0hiLt-XuguI95UEKGIAfyFF_-eAH_-dge5fc6khUKRtFyxt2ThJy-JKqTBCTnOX7j6m2ZBet9u1yflH0Vd8IKNO9LHQFZYwKTpb6OiLlOoxFUBGKpWsQG3Ekw6ztPDnZOoVG9SPqkRes6uLZHoH2cNvXsTzNxgIrs1pMeqM5Xpmj5dPpgBWmhJQdsqGIqtKcLs203dLzAgDvDyzqg5wXdC9WUGqjWMpLoRWZNd3bS4CayhTFvoEeywD6ykjJ-gzKGL8F2o8x51MChm1dFGCmHjyV3_41DtxRzFhUj3zleO49nb-aSEsuVl5Uz8pAXPCRdnsei6DJyds831uCZHkavu7B6w4lvE0PEc31TWrHWt7tbVBtZbwvlwQGncyT-F4NIVAVhPcL2l19gshgG7zOz71hNWmK3Gkqfe89gZH4ez7vWrz5w8aitBZANVvq-fSTEYMQxgFJxK0V6TzqEz8YGbV0CSYwlpmMHlr04N78XIvV2hTzhcZrhAyEG3JVQAtzMbO9qk87p9qVbsxzNWspXNSbQD9V7sPSEraSWBAPpvpju7CgXTsP-EFRr7leV7ND1eoFQFTNp59OO56igBbMTe-c9JdRZt1wwN6UkCqMNSHRUfDOmAOLyXvB-dF5ULGVaOuU4zmVzHBZLpBzFt4IzsIV5BrV_cI8nneePGuENq9SCFXw7pVHAn3nluLz1hhyoNLbSg2WWTGWH1ioT-2npS4H7QnEjX9WUZrwUqY2fGvX7NHR2znKBnsnQeXH3XA0HF6Xltz6BdW7oyY9ZmFF_LDCm1z1ckB3hgtPekouRuKYAUJ8RF2ydmBH2x4JjWYSLM2uD_TQV19NyGAR3aOVEgzbMjWejJMfv8MUehUoEu9eUGJaD2ACe5PjCiYK_U8OhMNc12cPHxRdjRXWXkvmYAsW5yyP2-p45clv2o1W7wwYZ6hYDDnIYbMzyUaIPLUH1spbxlLNxxT5yPXRFKuJrZ2EvqyDMfSVn5GIiYH65IF_aTqriDnXWqozdRtAImQLqp4mLC5zrVq8pFr_7-euJF9aC9vUPmgQSPUENMJmGSiKOuCdM2BWD9nXT7IguHFpci9Mj9CiybLt5Y2VnfscXqP0M33xk5tsxpyiVZXedOBwvFzdaTXhY4xQ1o1QI6Hoz2Ua5uuvU3kOlaLIbueW6_QsQkcRmxDTppPIN_x7LRvzks8IHGFA=w2954-h1696",
    recommends: [
      "คนรักสุขภาพ",
      "คีโต",
      "ควบคุมน้ำหนัก",
      "เด็ก",
      "คุณแม่ตั้งครรภ์",
      "ผู้สูงอายุ",
      "ผู้ป่วยไต",
      "เบาหวาน",
    ],
    categories: [
      "มุมผลิตภัณฑ์ดูแลผู้ป่วยโรคไต",
      "มุมผลิตภัณฑ์ดูแลผู้ป่วยเบาหวาน ความดัน",
      "มุมสำหรับแม่และเด็ก",
      "มุมคลีน คีโต คาร์บต่ำ โซเดียมต่ำ",
      "มุมแคลเซียมสูง",
      "มุมรวมโปรตีนไข่ขาว",
      "มุมวีแกน เจ มังสวิรัติ",
      "มุมฮาลาล",
    ],
    description:
      "ข้าวไข่ขาว ไร้แป้ง พร้อมทาน แคลอรี่ต่ำ แคลเซียมสูง ใยอาหารสูง เหมาะกับ คนรักสุขภาพ คลีน คีโต โลว์คาร์บ เด็ก คุณแม่ตั้งครรภ์ ผู้สูงอายุ ผู้ป่วย เบาหวาน ไต",
    detail: `Eggyday เอ้กกี้เดย์ นวัตกรรมไข่ขาว ในรูปแบบของเมล็ดข้าว! พร้อมทาน
คิดค้นโดยนักกำหนดอาหาร จุฬาลงกรณ์มหาวิทยาลัย CU Innovation Hub

✅ แคลอรี่ต่ำ
✅ โซเดียม โพแทสเซียม ฟอสฟอรัสต่ำ
✅ ไร้แป้ง
✅ ปราศจากไขมัน
✅ ปราศจากน้ำตาล
นอกเหนือไปจากความเจ๋งของไข่ขาว เรายังแตกต่างจากผลิตภัณฑ์ไข่ขาวทั่วไป
✅ แคลเซียมสูงงงถึง 279 mg
✅ ใยอาหารสูง 3,000 mg`,
    sku: [
      {
        label: "จำนวน",
        options: [
          {
            label: "1 ซอง x 100 กรัม",
            value: "68",
          },
          {
            label: "6 ซอง",
            value: "399",
          },
          {
            label: "10 ซอง",
            value: "469",
          },
        ],
      },
    ],
  },
  {
    name: "BlenDeeQuik เบลนดีควิก",
    image:
      "https://lh3.googleusercontent.com/fife/ALs6j_Gn_Jx4tDqE_XGflYJO-owcey2MD5gdkWaCNp8YFAg97PDqRnaPvuXA_mP0w8fhNIA8LDB9IwwOXzMHQjv_KfVGdtgOT3Dgd9bsibStRh7W80rKrpWPDM2SqiCsonU53eLY-t2LhUu4q1RhoeMHieDY8JQ71xwSFeGnZYXCtA4ZVUuUpoDmdrj4B5xT78hQmlORQdYL5CiCH-ORkrUilGW72hqCcBNKC2p6sNEyvc3MOGJJ97ULNLFOfDBH-gS3mWjgBuFCg9EQ5Wv8pESH_1SwrkL_gsrg9n85DiXbUwGLepJcLzZ4HwZTiOitvhoQmMimXVxMMtCKiTp0wnvGKZUuIea_Wt3h7L-wMNzOn-KZB6Jyyf20_xWfklQOMc7_Q5ZI6lF-SnwOF1VI6SOn27uyz5b9bEAMpnD9YP2hM8b1UhOKOPQBuPRlZNr5uoBivgKAoa298HrKfXQuSEhwgEOTl2UmxpBIQ7hWnxp29c-NEWBBCr_P8ANZ2tKLYSh-saDi_hIRslZQIHsyK8BfCsbz4J46-evgBexfmWjg7wDWkGai3FoJqhZbx81eDWJ1B9BBmGJ7K7NkTN7wI848tpTwxq57aPW9anHBIMtolvRKJZl8lIDK-AbO8pSTjTxFjFsMVv24XSDe4Ce0kkoYcbmE7Hszxyu8a_Tm25YJOB9644W527h0QdLzwrJK0yrhW4yZ7muG1XDGedda2Fg3mMCWUJGDbRGMEsWmnvAEDdXn8Co8GE2j7wi4RqkzTVWRX1U_SNSV_8p8hMSFvgkPP20pyJCYsT_1tOfD82H9WtfXzeEibPg1uC7wC13Vox7og21EhHMU_1EUHjOgtYPWcHb16d8yE8H7t32gbl-SUVrob3TD8vNpI1sEKdQF6mt7HbdLhKg6fsfbAbEGEobplyDxqXa8CKfVbRFC9CY-6Das4_WmtxzGRujeNakyxqf3eUV87rqrYSMwDouKP57H3dl9AoyF6D7qJjDGehPPFL5ulT473jsbomPdfHqbPkyo77ScLJ9xuZm-h0cF3o1A1d4Ld8idAvuXGDbFWz1T9BH4Tfyun63ekQS-t-sAVW5nGGXU56cR2ZZcIswWl2SWBQR-_7WUQOYaPXwVsiAPFvr8azjJM2_hx1uRXbA4kxw25lBPQDgofygiDKEtAGUhS9fdM1vgdJltEKZTUOcHQ0tUDy3wDloaqOQy9u31n0rzeWCjvGCdpliPcYCFM5PEASVJDM6OGUZHUoAu8y8J4o4LHNIO7l4u_uAluZ9mrSISXcSOm__c6Ef7dysY0EMogIya6sEJ0KNxfZyPd4-lUAcmII0ojTC6H06MYMmaZoty9SQy67f7z5hClLTZUL7GAONrY6ZgDLw_D1b1cwut7pMymK_Pe5gYRg6hR4P_lB_3g8U_4o8UJi-SyZ4phWR3XhRrL8Z91WOa_vP7smw4I51yYfySpB8AGLFgZiZeY27Aq3tmS7vXpNA7fXycafneSHsduiaErw9KZsjiY6kA8T2d1OkaOVWeUtdf-YDmsWnB0-gtGSqnKxakQDoq5OGXoNnOySAdZ08pCWnM7im6Ss8qXS6NXq-uTKSgAg_kCsniqfvZnGs9YpWpKX2UVQ=w2954-h1696",
    recommends: [
      "คนรักสุขภาพ",
      "คีโต",
      "ควบคุมน้ำหนัก",
      "เด็ก",
      "คุณแม่ตั้งครรภ์",
      "ผู้สูงอายุ",
      "ผู้ป่วยไต",
      "เบาหวาน",
    ],
    categories: [
      "ผู้มีปัญหาเคี้ยวกลืน",
      "เด็ก 6 เดือนขึ้นไป",
      "ผู้สูงอายุ",
      "ผู้ป่วยพักฟื้น",
    ],
    description:
      "อาหารปั่นเข้มข้น ครบ 5 หมู่ ทดแทนมื้ออาหาร ให้ทางสายยางได้ เหมาะกับผู้มีปัญหาเคี้ยวกลืน ผู้สูงอายุ ผู้ป่วยพักฟื้น",
    detail: `BlenDeeQuik เบลนดีควิก อาหารปั่น เข้มข้น อาหารเหลว สูตรครบถ้วน ครบ 5 หมู่ ทดแทนมื้ออาหาร ให้ทางสายยางได้

ได้รับการจัดสรรส่วนประกอบให้ผู้บริโภค ได้รับพลังงาน สารอาหาร และกากใยที่จำเป็นต่อร่างกายอย่างครบถ้วนตามหลักโภชนาการ วัตถุดิบที่นำมาใช้เน้นคุณภาพและคุณค่า รวมถึงผ่านการคัดสรรอย่างพิถีพิถัน

นำมาต้มจนสุกแล้วผ่านการบดด้วยเครื่องบดชนิดพิเศษ ให้ความละเอียดของเนื้อสัมผัสสูง จึงสามารถให้กับผู้ป่วยที่รับประทานอาหารทางสายยาง จากนั้นจึงบรรจุลงบรรจุภัณฑ์แบบ Retort Pouch ก่อนผ่านการฆ่าเชื้อด้วยความร้อนสูง ทำให้สามารถเก็บรักษาได้นาน โดยไม่ต้องแช่เย็น และไม่ใช้วัตถุกันเสีย

1 ซอง ให้พลังงาน 380 กิโลแคลอรี่ เหมาะสำหรับทดแทนมื้ออาหาร 1 มื้อ ส่วนประกอบผลิตจากวัตถุดิบตามธรรมชาติทั้งสิ้น เหมือนอาหารปั่นที่มีการเตรียมในโรงพยาบาล สามารถทำได้เองได้ง่าย และ สะดวก รวมถึงสามารถนำไปใส่ส่วนประกอบหรือปรุงรสเพิ่มเติม เพื่อให้ถูกปากกับผู้ที่รับประทานอาหารทางปากได้อีกด้วย

วิธีการรับประทาน BlenDeeQuik
- เทเบลนดีควิกลงในภาชนะ เติมน้ำต้มสุก(อุณหภูมิห้อง) ในอัตราส่วน 1 : 1
- 1 ซองบรรจุ 175 กรัม เติมน้ำ 175 ซีซี (ทั้งนี้ สามารถเพิ่มหรือลดน้ำได้ เพื่อเป็นการปรับความข้น/เหลวตามความเหมาะสมของแต่ละผู้บริโภค) แล้วคนให้เข้ากัน
- นำส่วนผสมที่ละลายน้ำแล้ว ไปผ่านตะแกรงกรองอีกครั้ง เพื่อทำให้ส่วนผสมที่บรรจุในซองมีการกระจายตัวที่ดี สามารถไหลผ่านทางสายยางให้อาหาร (สายฟีด)ได้ง่ายขึ้น
- จากนั้นนำบรรจุลงถุงฟีด เพื่อให้กับผู้ป่วยทางสายยาง หรือจะอุ่นร้อน ปรุงรสเพิ่มเติม เพื่อให้ถูกปากกับผู้รับประทานทางปากปกติได้

วิธีเก็บรักษา ซุปปั่นเข้มข้น เบลนดีควิก ( BlenDee Quik )
- สามารถเก็บไว้ในที่แห้ง อุณหภูมิห้อง โดยไม่ต้องแช่เย็น
- สามารถเก็บได้นาน ถึง 2 ปี นับจากวันที่ผลิต
- 1 ซองให้คุณค่าทางโภชนาการ เทียบเท่ากับอาหาร 1มื้อ (หากทานไม่หมด แนะนำไห้แบ่งส่วนที่จะรับประทานผสมน้ำทาน และเก็บส่วนที่เหลือใส่ภาชนะที่ปิดมิดชิด นำเข้าตู้เย็น แนะนำให้ทานให้หมดภายใน 24 ชั่วโมง)

ข้อควรระวัง: เนื่องจากผู้ป่วยแต่ละท่านมีข้อจำกัดในสุขภาพที่ไม่เหมือนกัน ทั้งนี้เพื่อความปลอดภัยของผู้ทาน ให้ลูกค้านำข้อมูลทางโภชนาการปรึกษาคุณหมอผู้ดูแลก่อน

สินค้าได้รับมาตรฐาน อ.ย. จาก สำนักงานคณะกรรมการอาหารและยา, ผ่านการรับรองมาตรฐานอาหารฮาลาล, GMP-Good Manufacturing Practice และ  HACCP - Hazard Analysis Critical Control Points`,
    sku: [
      {
        label: "สูตรไก่น้ำตาลน้อย,ไก่โซเดียมต่ำ",
        options: [
          {
            label: "1 ซอง x 180 กรัม",
            value: "76",
          },
          {
            label: "12 ซอง",
            value: "890",
          },
        ],
      },
      {
        label: "สูตรปลา,สูตรแพลนต์เบส",
        options: [
          {
            label: "1 ซอง x 180 กรัม",
            value: "86",
          },
          {
            label: "12 ซอง",
            value: "1009",
          },
        ],
      },
    ],
  },
  {
    name: "V Care วีแคร์",
    image:
      "https://lh3.googleusercontent.com/fife/ALs6j_F8mgnMM2plKwJhrLckYfIPDGRLeBYPVVrKiilnWMNIdJ4YtoFmIwEr7jmGcNOF_-WZTi0fgOk-OPulqS92wAKutI9zljdnqbZ2uTDMBU-e69kBeMPhdnVariHWAjz5NuOtRLoLpFr_MQMBcsYEJdSO3xhrwDZfEET7KsXLbplUzHS7cg030yeweY1cDfokMFS91PBAdRoTpxS1_U7CcDjzgTtldIInOIp2X1ozG7WrQ0XgeR8YFA7krw7QelZ0qvAEN9l47iM0Uzai2sieBHkxJ5zX1m_lYYdC7SyhBX5NbmZzEcsbo1lFXul1zIgbRYHfDUSyAht1WvEbc7lZfT5OsJSoManzd8xzRXqP8K3JGIhPXOGEfuvc_FgWzpF9nDXmVyjb1SsySHLDt2_6LQd3VU_x5x7ZDfTeeY2Ll69tMzA9itRtcUwI8anqBuckHtrF98uXlRoNDFvmZ-7_kkAwjmIBD8Nru2wg8Ah_Ie_djPOnIBJDmElHHMhTJxvsAEPmTwWn6ghz2G0mhcoQOOxVDM_h1BmqS_tBOkbZevRXWlEB5YVjmqrqkKAxKFKL8OzKQLU7fS9rhVkIpITUrYEew6tTwzMOi8R23K6U75j9XKKPKYQFTnd9LfJp3aGquF3fx51QiALJxubf3pz9N0c4A344BYe-V6t0Ied8m24IFZ3P_XzaXwAcjwiPA41uktxNfIqTXCrma174FwNlV7fWDw64COGfOYEnFhEJABXOnrWmRwvd8zTwMoJlKjiuTzjPTl9pA4kPL-hR2DjHiuupPcpJNbkRmpwSpAWl_X36ApGIA5NreMr_dU2XNyINeoeAIVZuUMuMEs4LutdxH4wL8lH90kuqU60MBF3J-pu9vo0p8N5uQMmIF2HJmuvggi0OEDaRZiaBr_KIdI6ycg3SFIMIHpAnHozz79syCwyYntD3tm1G3qyQadvoKIJfyNDbSSa3gCI1Jo3_xWuNXJHvo4EHhu64IrItTIYA2WBaqx7zEFFWFLgIrI_TWKCFgYph-KhSPsEDQj9j-pGKAKutLienz4pi1yr_Qq2BP_-yXd3tZaBodBBbeRWwCwI3C7V9IkxqXAe8rjUrEwEcdiANd_9PKPZBNwbPraBQc9HXq64ze0jdQ8r0EnRxBV648NcPcsSnvN5cu2Ap-7MO_7DT1DsQkV1iA1gOhUmdSrfy82tVMbO61mAkVPMkdMwet_hHPLL1jPfrfW6nLTtuwQvwERej9Zd-kIQdfoLNr904dqFfS3tZbgu9RTQJOM7qWVntgxcIijD-bbLBu721AMvSVviufqN4uiaTq8f9apmHWVPSXK3yKIanCS7f0Pwsf0KSaIx1RFcDpY_iuEQj0fbjfxPQoqyHcBYBFmiaPWIG_40NPRX5U9DCrNkqwhpi43t9s-rVJA3yDm0MEokArfXJXnXXWY3OnBojPrkuek8sqbY1kz5GzQFnQ65wKfmxIT7sAvf8GsDozkWmfFQIZd4y6YHWzrxYJJ6Q5kEL-o_bVyz61EbYDsFIiVegHGGyRrKXbD1ZuYFMX23pjFTKJGfmDxuscEjZU8XtFGSPQKv-MtfbpIlisJdvwJjBd1krfUiB_xe3d6qdznn3dw=w2954-h1696",
    recommends: ["ผู้สูงอายุ", "ผู้ป่วยติดเตียง", "ผู้ป่วยที่มีภาวะพึ่งพิง"],
    categories: [
      "ผู้มีปัญหาเคี้ยวกลืน",
      "เด็ก 6 เดือนขึ้นไป",
      "ผู้สูงอายุ",
      "ผู้ป่วยพักฟื้น",
    ],
    description:
      "สบู่เหลว อาบน้ำ ไม่ต้องล้างออก อ่อนโยน เหมาะกับ ผู้สูงอายุ ผู้ป่วยติดเตียง ผู้ป่วยที่มีภาวะพึ่งพิง",
    detail: `V Care วีแคร์ สบู่เหลวแบบไม่ต้องล้างออก 400 มล.

พัฒนาสูตรโดยเฉพาะ เหมาะสำหรับการดูแลผู้สูงวัย

• ทำความสะอาดร่างกายได้หมดจด ดูแลผิวบอบบางอย่างอ่อนโยน พร้อมคืนความชุ่มชื้นให้แก่ผิวขาดน้ำ ด้วยสารสกัดจากธรรมชาติที่ผ่านการคัดสรร 
• ผสานส่วนผสมจาก Licorice, Coix Seed และ Green Tea สดชื่นได้ตลอดวัน
• อ่อนโยน ผ่านการทดสอบการระคายเคือง
• ปราศจากพาราเบน ซิลิโคน และสารซัลเฟต
• เหมาะสำหรับผู้สูงอายุ

วิธีใช้        
1. ผสมสบู่เหลว 5 มล. ลงน้ำอุ่น 3 ลิตร โดยปั๊ม 2-3 ครั้ง
2. ใช้ผ้าสะอาดชุบ บิดหมาด ทำความสะอาด
3. ไม่ต้องล้างออก หรือเช็ดซ้ำด้วยน้ำ ทำความสะอาดได้บ่อยตามต้องการ`,
    sku: [
      {
        label: "จำนวน",
        options: [
          {
            label: "1 ขวด x 400 มล.",
            value: "209",
          },
        ],
      },
    ],
  },

  {
    name: "Eiyo เอโยะ คุกกี้",
    image:
      "https://lh3.googleusercontent.com/fife/ALs6j_GhdrD_ZmBmn2yM1sbSq4SMSZqxqEXTKe1lb7uRv9FrGhuSQLodWJu9N6SuHSzlSVoCyo0E47ZnYrg8l8pFAs4Bou8ukUfHE3VhAQhJgbrmLPn5UExnadhHyJUEoUOn5zuTkNuxt2GawNzfqWHAIsfuLij72bVDkrQNW8luEoS5ZcYsfehXBTtb4VQ6P3CJL4oUhijpA1i7W2AsLguM6ImJ_zovxSqU6-LdgVm3P1oQxLSUijpkqYwVm-xEUdnXTkNjKsZWnlnWh8OkvRfRX3mL9SeSXKx1JW88EabgnDQlTYgaWV9xiy-HtAL8qOu8aEQ2WaHCGrfkpjFWL7WXZp_Z_zCMiXkt6Bnk8oab7Iz3vVnUAqPuIZfF2Qg5dnH3uJH1vqg3GWEZf3Vvi0ZLiK4cBuym5peyrQBbH75P5YuFYEnQu_JYSSTE3zuMIPSwW37BsqxSSrjnMWAafwmr2AZzKdQEkZWvHjgbD5wVLspsMdXkkM1fRM6JPwMCgZ-FOJUTIUt6xlEUVwAS9kV6N-lo8oK77VgLIqEIyvbVJG23ki6p1Y6vLvr0HjWsBo1gxD19OnRhlqYdmIgBS_qNBHsM4DUBThg663mg020_pky0VcbVicpcSZ-UgjDekJxEO9OFnJndQIpM31ZqhdslCeja9gmoLuWTFVs2uLuZDVFDw0P6f00enFsGl-tp81ednmJyFye2FAzLmHRFSYHyYhp6gLOe5jHRd3h7q_vlyXojSXZtm0mswcheBwY9O16v9W8t39sw_l7EwckbjonQXs1qYHLglCv8-4y8QlTFUQD4dI_pHRfsg3PqwkOXYiNYiNr7X_bukBYEjpCUog4-wIZYYQ8bHm7uYK7RZWB8Q5mmAySQjjeOgw4_j2kmUwLTPR8BESrQ9xu5pxxA-Z-UMOudVHdXYYISPN3tihX02CAMftVdnbyYgppn_npaboAyg_4PKrs_HdYx_Q3T3xu264tczUT74NzPdCR5Zw05KnjRsXB0HtgiC-D1UVoAPB0kDRN_kHvm8UukAbAR2S7jj6xD6qnSMZqgq67x4-cqzkMFEHIHg2BT1BJtCi4aI8Pqq7SYI01nfeQM3wvP0wpWpUc_6lPT7qATqcirnuxRskCSIFNR2vyza-ZTEFpNF2Mnn61DYhs3Oz66oT4FPcf4ee8JoIJaMDhSAU1yTxsIuGTqPsDX5Z8gfzGGq2AWroq5YSgj1Hrvee1kkxmPhGVQcxOp-NhuGNFDHk6_fImOtVt_UjZQp-f466CA5QFA32TKkfs5kEQwPg6nFdozeQUVvb-aqKjAr120uRPRC1ZmSsRLeps56PqhYcmwyjvWtOcwUr_OTzLbY-NTlTm25YEX39td62PHqqry_jBsTfWWfq1fTt6Vg94OMziXoZFSQ6r5Xq8UDxbx1CZapjTgF8xrSimOWPSPQ7yJfzXuyoEQIvFAsMtS55syqBSRdCh98toNF67wgIHVJT435ytznlA70O5bI45RQLp6fuPMYNoUMu05cdKH2SzzpaThmj4XFDR1Qhz4kiDztiMjR2_mDf9jxFZcgOv6gRZAVu6XBZqNVPDV7irapqQOW8YI99e5IMNCOxMc_4a_oaF0uAl-ag=w2954-h1696",
    recommends: [
      "เด็ก 1 ปีขึ้นไป",
      "คนรักสุขภาพ",
      "ผู้ที่แพ้กลูเต็น",
      "ผู้สูงอายุ",
      "เบาหวาน",
      "ผู้ป่วยไต",
    ],
    categories: [
      "ผู้มีปัญหาเคี้ยวกลืน",
      "เด็ก 6 เดือนขึ้นไป",
      "ผู้สูงอายุ",
      "ผู้ป่วยพักฟื้น",
    ],
    description:
      "ไลท์คุกกี้เพื่อสุขภาพ ผสมเนื้อผลไม้แท้ น้ำตาลต่ำ ไม่มีแป้งสาลีและกลูเต็น เหมาะกับ ผู้รักสุขภาพ เด็กุ 1 ปีขึ้นไป ผู้สูงอายุ ผู้ป่วยโรคไต เบาหวาน ความดัน",
    detail: `ไลท์คุกกี้เพื่อสุขภาพ ขนมสุขภาพ เหมาะกับ คนรักสุขภาพ เด็ก ผู้สูงอายุ ผู้ป่วย โรคไต ความดัน เบาหวานทานได้ อาหารสุขภาพ

วิจัยและพัฒนาโดยนักโภชนาการและนักกำหนดอาหาร
ได้รับทุนจากสำนักงานนวัตกรรมแห่งชาติ NIA

น้ำตาลต่ำ
โซเดียม โพแทสเซียม ฟอสฟอรัสต่ำ
ไม่มีกลูเต็น Gluten Free
ไม่มีแป้งสาลี
ไม่เติมเกลือ
ไม่เติมสีสังเคราะห์
ผสมเนื้อผลไม้แท้ๆ`,
    sku: [
      {
        label: "รสชาติ",
        options: [
          {
            label: "สตรอเบอร์รี่",
            options: [
              {
                label: "1 ซอง x 28 กรัม",
                value: "55",
              },
              {
                label: "3 ซอง",
                value: "159",
              },
            ],
          },
          {
            label: "สัปปะรด",
            options: [
              {
                label: "1 ซอง x 28 กรัม",
                value: "55",
              },
              {
                label: "3 ซอง",
                value: "159",
              },
            ],
          },
          {
            label: "ขิง",
            options: [
              {
                label: "1 ซอง x 28 กรัม",
                value: "55",
              },
              {
                label: "3 ซอง",
                value: "159",
              },
            ],
          },
        ],
      },
    ],
  },
];
