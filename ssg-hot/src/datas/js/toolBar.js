import {
  faBars,
  faMagnifyingGlass,
  faEye,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const toolMenu = [
  {
    id: 1,
    url: "/category",
    name: "카테고리",
    icon: faBars,
  },
  {
    id: 2,
    url: "/mainsearch",
    name: "통합검색",
    icon: faMagnifyingGlass,
  },
  {
    id: 3,
    url: "/",
    name: "홈",
    icon: faHouse,
  },
  {
    id: 4,
    url: "/login",
    name: "MY",
    icon: faUser,
  },
  {
    id: 5,
    url: "/recent",
    name: "최근본",
    icon: faEye,
  },
];

export default toolMenu;
