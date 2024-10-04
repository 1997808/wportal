import {
  Github,
  LinkedinIcon,
  LucideIcon,
  Phone,
  ScrollText,
  Mail,
  Settings,
  NotebookPen,
  CloudSun,
} from "lucide-react";

type TCardDataType = "icon" | "icon-img" | "img" | "text" | "live";
type TCardDataSlideType = "icon" | "icon-img" | "img" | "text";

export interface ICardDataSlides {
  type: TCardDataSlideType;
  text?: string;
  textColor?: string;
  Icon?: LucideIcon;
  iconSrc?: string;
  imgSrc?: string;
}

export interface ICardMobile {
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
    slides?: ICardDataSlides[];
  };
}

const cardMobile: ICardMobile[] = [
  // 2x4 highlight blocks
  {
    key: "a",
    x: 0,
    y: 2,
    w: 4,
    h: 2,
    color: "bg-yellow-600",
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
  },
  {
    key: "b",
    x: 0,
    y: 11,
    w: 4,
    h: 2,
    color: "bg-blue-600",
    static: true,
    data: {
      type: "img",
      text: "My personal finance tool",
      textColor: "text-black",
      imgSrc: "./finance.webp",
    },
  },

  // 2x2 blocks
  {
    key: "c",
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    color: "bg-red-600",
    static: true,
    data: { type: "icon", text: "Phone", Icon: Phone },
  },
  {
    key: "d",
    x: 2,
    y: 0,
    w: 2,
    h: 2,
    color: "bg-lime-600",
    static: true,
    data: { type: "icon", text: "Mail", Icon: Mail },
  },
  {
    key: "f",
    x: 2,
    y: 4,
    w: 2,
    h: 2,
    color: "bg-green-600",
    static: true,
    data: { type: "icon", text: "GitHub", Icon: Github },
  },
  {
    key: "i",
    x: 0,
    y: 6,
    w: 2,
    h: 2,
    color: "bg-indigo-600",
    static: true,
    data: { type: "icon", text: "LinkedIn", Icon: LinkedinIcon },
  },
  {
    key: "j",
    x: 2,
    y: 6,
    w: 2,
    h: 2,
    color: "bg-orange-600",
    static: true,
    data: { type: "img", text: "Work", imgSrc: "./vpbank.jpg" },
  },
  {
    key: "g",
    x: 0,
    y: 8,
    w: 2,
    h: 2,
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
  },
  {
    key: "h",
    x: 2,
    y: 8,
    w: 2,
    h: 2,
    color: "bg-pink-600",
    static: true,
    data: { type: "icon", text: "Weather", Icon: CloudSun },
  },
  {
    key: "k",
    x: 0,
    y: 13,
    w: 2,
    h: 2,
    color: "bg-gray-600",
    static: true,
    data: { type: "icon", text: "Setting", Icon: Settings },
  },
  {
    key: "l",
    x: 2,
    y: 13,
    w: 2,
    h: 2,
    color: "bg-amber-600",
    static: true,
    data: { type: "icon", text: "Note", Icon: NotebookPen },
  },
  {
    key: "e",
    x: 0,
    y: 15,
    w: 2,
    h: 2,
    color: "bg-purple-600",
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
  },

  // 1x1 blocks
  {
    key: "m",
    x: 0,
    y: 10,
    w: 1,
    h: 1,
    color: "bg-indigo-600",
    static: true,
    data: {
      type: "icon-img",
      text: "Discord",
      iconSrc: "./discord.svg",
    },
  },
  {
    key: "n",
    x: 1,
    y: 10,
    w: 1,
    h: 1,
    color: "bg-sky-500",
    static: true,
    data: {
      type: "icon-img",
      text: "Twitter",
      iconSrc: "./twitter.svg",
    },
  },
  {
    key: "o",
    x: 2,
    y: 10,
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
  },
  {
    key: "p",
    x: 4,
    y: 10,
    w: 1,
    h: 1,
    color: "bg-orange-600",
    static: true,
    data: {
      type: "icon-img",
      text: "Reddit",
      iconSrc: "./reddit.svg",
    },
  },
  {
    key: "q",
    x: 0,
    y: 4,
    w: 1,
    h: 1,
    color: "bg-pink-600",
    static: true,
    data: {
      type: "icon-img",
      text: "NestJS",
      iconSrc: "./nestjs.svg",
    },
  },
  {
    key: "r",
    x: 1,
    y: 4,
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
  },
  {
    key: "s",
    x: 0,
    y: 5,
    w: 1,
    h: 1,
    color: "bg-teal-600	",
    static: true,
    data: {
      type: "icon-img",
      text: "TailwindCSS",
      iconSrc: "./tailwindcss.svg",
    },
  },
  {
    key: "t",
    x: 1,
    y: 5,
    w: 1,
    h: 1,
    color: "bg-blue-600",
    static: true,
    data: {
      type: "icon-img",
      text: "PostgreSQL",
      iconSrc: "./postgresql.svg",
    },
  },
  {
    key: "m2",
    x: 2,
    y: 15,
    w: 1,
    h: 1,
    color: "bg-black",
    static: true,
    data: {
      type: "icon-img",
      text: "Chess.com",
      iconSrc: "./chess.svg",
    },
  },
  {
    key: "n2",
    x: 3,
    y: 15,
    w: 1,
    h: 1,
    color: "bg-sky-500",
    static: true,
    data: {
      type: "img",
      text: "",
      imgSrc: "./Lule.webp",
    },
  },
  {
    key: "o2",
    x: 2,
    y: 16,
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
  },
  {
    key: "p2",
    x: 3,
    y: 16,
    w: 1,
    h: 1,
    color: "bg-orange-600",
    static: true,
    data: {
      type: "img",
      text: "",
      imgSrc: "./mariokart.png",
    },
  },
];

export { cardMobile };

