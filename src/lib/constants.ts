import {
  CloudSun,
  Github,
  LinkedinIcon,
  LucideIcon,
  Mail,
  NotebookPen,
  Phone,
  ScrollText,
  Settings,
} from "lucide-react";

type TCardDataType = "icon" | "icon-img" | "img" | "text";

export interface ICard {
  key: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  static?: boolean;
  data?: {
    type: TCardDataType;
    text?: string;
    textColor?: string;
    Icon?: LucideIcon;
    iconSrc?: string;
    imgSrc?: string;
  };
}

const cardData = [
  {
    key: "a",
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    color: "bg-red-600",
    static: true,
    data: {
      type: "live",
      text: "My blog",
      textColor: "text-black",
      slides: [
        { type: "img", text: "Note", imgSrc: "./blog.jpg" },
        { type: "img", text: "Note", imgSrc: "./blog-1.webp" },
      ],
    },
  }, // 2x2 block
  {
    key: "k",
    x: 6,
    y: 0,
    w: 1,
    h: 1,
    color: "bg-blue-600",
    static: true,
    data: {
      type: "icon-img",
      text: "Docker",
      iconSrc: "./docker.svg",
    },
  }, // 1x1 block
  {
    key: "l",
    x: 7,
    y: 0,
    w: 1,
    h: 1,
    color: "bg-purple-600",
    static: true,
    data: {
      type: "icon-img",
      text: "Nginx",
      iconSrc: "./nginx.svg",
    },
  }, // 1x1 block
  {
    key: "b",
    x: 6,
    y: 1,
    w: 2,
    h: 2,
    color: "bg-blue-600",
    static: true,
    data: {
      type: "img",
      text: "My personal finance tool",
      textColor: "text-black",
      imgSrc: "./finance.webp",
    },
  }, // 2x2 block
  {
    key: "c",
    x: 4,
    y: 0,
    w: 1,
    h: 1,
    color: "bg-pink-600",
    static: true,
    data: {
      type: "icon-img",
      text: "NestJS",
      iconSrc: "./nestjs.svg",
    },
  }, // 1x1 block
  {
    key: "d",
    x: 5,
    y: 0,
    w: 1,
    h: 1,
    color: "bg-white",
    static: true,
    data: {
      type: "icon-img",
      text: "React Vite",
      textColor: "text-black",
      iconSrc: "./vite.png",
    },
  }, // 1x1 block
  {
    key: "e",
    x: 2,
    y: 0,
    w: 2,
    h: 1,
    color: "bg-green-600",
    static: true,
    data: { type: "icon", text: "GitHub", Icon: Github },
  }, // 2x1 block
  {
    key: "e2",
    x: 2,
    y: 1,
    w: 2,
    h: 1,
    color: "bg-indigo-600",
    static: true,
    data: { type: "icon", text: "LinkedIn", Icon: LinkedinIcon },
  }, // 2x1 block
  {
    key: "c2",
    x: 4,
    y: 1,
    w: 1,
    h: 1,
    color: "bg-white",
    static: true,
    data: {
      type: "icon-img",
      text: "ExpressJS",
      textColor: "text-black",
      iconSrc: "./expressjs.svg",
    },
  }, // 1x1 block
  {
    key: "d2",
    x: 5,
    y: 1,
    w: 1,
    h: 1,
    color: "bg-gray-600",
    static: true,
    data: {
      type: "icon-img",
      text: "NextJS",
      iconSrc: "./nextjs.svg",
    },
  }, // 1x1 block
  {
    key: "f",
    x: 0,
    y: 2,
    w: 2,
    h: 1,
    color: "bg-pink-600",
    static: true,
    data: { type: "icon", text: "Phone", Icon: Phone },
  }, // 1x1 block
  {
    key: "h",
    x: 2,
    y: 2,
    w: 2,
    h: 1,
    color: "bg-indigo-600",
    static: true,
    data: { type: "img", text: "Work", imgSrc: "./vpbank.jpg" },
  }, // 2x1 block
  {
    key: "i",
    x: 4,
    y: 2,
    w: 1,
    h: 1,
    color: "bg-green-600",
    static: true,
    data: {
      type: "icon-img",
      text: "Redis",
      iconSrc: "./redis.svg",
    },
  }, // 1x1 block
  {
    key: "j",
    x: 5,
    y: 2,
    w: 1,
    h: 1,
    color: "bg-teal-600	",
    static: true,
    data: {
      type: "icon-img",
      text: "TailwindCSS",
      iconSrc: "./tailwindcss.svg",
    },
  }, // 1x1 block
  {
    key: "m",
    x: 0,
    y: 3,
    w: 2,
    h: 1,
    color: "bg-rose-600",
    static: true,
    data: { type: "icon", text: "Mail", Icon: Mail },
  }, // 2x1 block
  {
    key: "n",
    x: 2,
    y: 3,
    w: 2,
    h: 1,
    color: "bg-teal-600",
    static: true,
    data: {
      type: "live",
      text: "Download Resume",
      slides: [
        { type: "icon", text: "", Icon: ScrollText },
        { type: "text", text: "Site still in development 10/2024" },
      ],
    },
  }, // 1x1 block
  {
    key: "p",
    x: 4,
    y: 3,
    w: 1,
    h: 1,
    color: "bg-blue-600",
    static: true,
    data: {
      type: "icon-img",
      text: "PostgreSQL",
      iconSrc: "./postgresql.svg",
    },
  }, // 1x1 block
  {
    key: "q",
    x: 5,
    y: 3,
    w: 2,
    h: 1,
    color: "bg-yellow-600",
    static: true,
    data: { type: "icon", text: "Weather", Icon: CloudSun },
  }, // 2x1 block
  {
    key: "r",
    x: 7,
    y: 3,
    w: 1,
    h: 1,
    color: "bg-blue-600",
    static: true,
    data: {
      type: "icon-img",
      text: "Digital Ocean",
      iconSrc: "./digital-ocean.svg",
    },
  }, // 1x1 block
];

const cardData2 = [
  {
    key: "t1",
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    color: "bg-red-600",
    static: true,
    data: {
      type: "live",
      text: "Gallery",
      imgSrc: "./excited.webp",
      slides: [
        { type: "img", text: "Note", imgSrc: "./excited.webp" },
        { type: "img", text: "Note", imgSrc: "./user-1.jpg" },
        { type: "img", text: "Note", imgSrc: "./user-2.jpg" },
      ],
    },
  }, // 2x2 block
  // {
  //   key: "t2",
  //   x: 6,
  //   y: 0,
  //   w: 1,
  //   h: 1,
  //   color: "bg-cyan-600",
  //   static: true,
  //   data: {},
  // }, // 1x1 block
  // {
  //   key: "t3",
  //   x: 7,
  //   y: 0,
  //   w: 1,
  //   h: 1,
  //   color: "bg-amber-600",
  //   static: true,
  //   data: {},
  // }, // 1x1 block
  // {
  //   key: "t4",
  //   x: 6,
  //   y: 1,
  //   w: 2,
  //   h: 2,
  //   color: "bg-blue-600",
  //   static: true,
  //   data: {},
  // }, // 2x2 block
  {
    key: "t5",
    x: 2,
    y: 0,
    w: 1,
    h: 1,
    color: "bg-black",
    static: true,
    data: {
      type: "icon-img",
      text: "Chess.com",
      iconSrc: "./chess.svg",
    },
  }, // 1x1 block
  {
    key: "t6",
    x: 3,
    y: 0,
    w: 1,
    h: 1,
    color: "bg-sky-500",
    static: true,
    data: {
      type: "img",
      text: "",
      imgSrc: "./Lule.webp",
    },
  }, // 1x1 block
  {
    key: "t7",
    x: 4,
    y: 0,
    w: 1,
    h: 1,
    color: "bg-white",
    static: true,
    data: {
      type: "icon-img",
      text: "",
      textColor: "text-black",
      iconSrc: "./hololive.svg",
    },
  }, // 2x1 block
  {
    key: "t8",
    x: 2,
    y: 1,
    w: 2,
    h: 1,
    color: "bg-amber-600",
    static: true,
    data: { type: "icon", text: "Note", Icon: NotebookPen },
  }, // 2x1 block
  {
    key: "t9",
    x: 4,
    y: 1,
    w: 1,
    h: 1,
    color: "bg-orange-600",
    static: true,
    data: {
      type: "img",
      text: "",
      imgSrc: "./mariokart.png",
    },
  }, // 1x1 block
  // {
  //   key: "t10",
  //   x: 5,
  //   y: 1,
  //   w: 1,
  //   h: 1,
  //   color: "bg-green-600",
  //   static: true,
  //   data: {},
  // }, // 1x1 block
  {
    key: "t11",
    x: 0,
    y: 2,
    w: 1,
    h: 1,
    color: "bg-indigo-600",
    static: true,
    data: {
      type: "icon-img",
      text: "Discord",
      iconSrc: "./discord.svg",
    },
  }, // 1x1 block
  {
    key: "t12",
    x: 1,
    y: 2,
    w: 1,
    h: 1,
    color: "bg-sky-500",
    static: true,
    data: {
      type: "icon-img",
      text: "Twitter",
      iconSrc: "./twitter.svg",
    },
  }, // 1x1 block
  {
    key: "t13",
    x: 2,
    y: 2,
    w: 2,
    h: 1,
    color: "bg-white",
    static: true,
    data: {},
  }, // 2x1 block
  // {
  //   key: "t14",
  //   x: 4,
  //   y: 2,
  //   w: 1,
  //   h: 1,
  //   color: "bg-indigo-600",
  //   static: true,
  //   data: {},
  // }, // 1x1 block
  // {
  //   key: "t15",
  //   x: 5,
  //   y: 2,
  //   w: 1,
  //   h: 1,
  //   color: "bg-lime-600",
  //   static: true,
  //   data: {},
  // }, // 1x1 block
  {
    key: "t16",
    x: 0,
    y: 3,
    w: 2,
    h: 1,
    color: "bg-gray-600",
    static: true,
    data: { type: "icon", text: "Setting", Icon: Settings },
  }, // 2x1 block
  {
    key: "t17",
    x: 2,
    y: 3,
    w: 1,
    h: 1,
    color: "bg-white",
    static: true,
    data: {
      type: "icon-img",
      text: "Notion",
      textColor: "text-black",
      iconSrc: "./notion.svg",
    },
  }, // 1x1 block
  {
    key: "t18",
    x: 3,
    y: 3,
    w: 1,
    h: 1,
    color: "bg-orange-600",
    static: true,
    data: {
      type: "icon-img",
      text: "Reddit",
      iconSrc: "./reddit.svg",
    },
  }, // 1x1 block
  // {
  //   key: "t19",
  //   x: 4,
  //   y: 3,
  //   w: 1,
  //   h: 1,
  //   color: "bg-red-600",
  //   static: true,
  //   data: {},
  // }, // 1x1 block
  // {
  //   key: "t20",
  //   x: 5,
  //   y: 3,
  //   w: 2,
  //   h: 1,
  //   color: "bg-yellow-600",
  //   static: true,
  //   data: {},
  // }, // 2x1 block
  // {
  //   key: "t21",
  //   x: 7,
  //   y: 3,
  //   w: 1,
  //   h: 1,
  //   color: "bg-green-600",
  //   static: true,
  //   data: {},
  // }, // 1x1 block
];

export { cardData, cardData2 };

