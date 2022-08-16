const img01 = "https://sitem.ssgcdn.com/27/81/68/item/1000055688127_i1_140.jpg";
const img02 = "https://sitem.ssgcdn.com/02/04/09/item/1000168090402_i1_140.jpg";
const img03 = "https://sitem.ssgcdn.com/03/75/21/item/1000428217503_i1_140.jpg";

const cartDatas = [
  {
    id: 1,
    imgUrl: img01,
    desc: {
      comName: "신세계몰",
      name: "닥터마틴",
      info: "[닥터마틴] 2976 첼시/플로라/1460 3홀/8홀/제이든/단테 (11853001/14649001/24369001/11838002/15265001)",
      option: "옵션 : 01.DM_11853001_BK_/250",
      oldPrice: 170000,
      newPrice: 140000,
      qty: 1,
      stock: 8,
      isOption: true,
    },
  },
  {
    id: 2,
    imgUrl: img02,
    desc: {
      comName: "신세계몰",
      name: "자연만남",
      info: "[자연맛남] 꿀맛남 노지 부드러운 백도복숭아 4kg (18과내외)",
      option: "",
      oldPrice: 25900,
      newPrice: 21000,
      qty: 1,
      stock: 20,
      isOption: false,
    },
  },
  {
    id: 3,
    imgUrl: img03,
    desc: {
      comName: "신세계몰",
      name: "SSG정담",
      info: "[8/22(월)순차출고][정담] 수축산 혼합세트 1호 (굴비10미 900g+이베리코 갈비살+악어살+황제살+눈꽃살 각 200g)총 1.7kg",
      option: "옵션 : 8/22(월)순차출고",
      oldPrice: 0,
      newPrice: 75000,
      qty: 1,
      stock: 30,
      isOption: true,
    },
  },
];
export default cartDatas;
