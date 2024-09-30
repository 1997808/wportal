const cardData = [
  { key: "a", x: 0, y: 0, w: 2, h: 2, color: "bg-red-600", static: true }, // 2x2 block
  { key: "k", x: 6, y: 0, w: 1, h: 1, color: "bg-cyan-600", static: true }, // 1x1 block
  { key: "l", x: 7, y: 0, w: 1, h: 1, color: "bg-amber-600", static: true }, // 1x1 block
  { key: "b", x: 6, y: 1, w: 2, h: 2, color: "bg-blue-600", static: true }, // 2x2 block
  { key: "c", x: 4, y: 0, w: 1, h: 1, color: "bg-yellow-600", static: true }, // 1x1 block
  { key: "d", x: 5, y: 0, w: 1, h: 1, color: "bg-green-600", static: true }, // 1x1 block
  { key: "e", x: 2, y: 0, w: 2, h: 1, color: "bg-blue-600", static: true }, // 2x1 block
  { key: "e2", x: 2, y: 1, w: 2, h: 1, color: "bg-purple-600", static: true }, // 2x1 block
  { key: "c2", x: 4, y: 1, w: 1, h: 1, color: "bg-yellow-600", static: true }, // 1x1 block
  { key: "d2", x: 5, y: 1, w: 1, h: 1, color: "bg-green-600", static: true }, // 1x1 block
  { key: "f", x: 0, y: 2, w: 2, h: 1, color: "bg-pink-600", static: true }, // 1x1 block
  { key: "h", x: 2, y: 2, w: 2, h: 1, color: "bg-teal-600", static: true }, // 2x1 block
  { key: "i", x: 4, y: 2, w: 1, h: 1, color: "bg-indigo-600", static: true }, // 1x1 block
  { key: "j", x: 5, y: 2, w: 1, h: 1, color: "bg-lime-600", static: true }, // 1x1 block
  { key: "m", x: 0, y: 3, w: 2, h: 1, color: "bg-rose-600", static: true }, // 2x1 block
  { key: "n", x: 2, y: 3, w: 2, h: 1, color: "bg-fuchsia-600", static: true }, // 1x1 block
  { key: "p", x: 4, y: 3, w: 1, h: 1, color: "bg-red-600", static: true }, // 1x1 block
  { key: "q", x: 5, y: 3, w: 2, h: 1, color: "bg-yellow-600", static: true }, // 2x1 block
  { key: "r", x: 7, y: 3, w: 1, h: 1, color: "bg-green-600", static: true }, // 1x1 block
];

const cardData2 = [
  { key: "t1", x: 0, y: 0, w: 2, h: 2, color: "bg-red-600", static: true }, // 2x2 block
  { key: "t2", x: 6, y: 0, w: 1, h: 1, color: "bg-cyan-600", static: true }, // 1x1 block
  { key: "t3", x: 7, y: 0, w: 1, h: 1, color: "bg-amber-600", static: true }, // 1x1 block
  { key: "t4", x: 6, y: 1, w: 2, h: 2, color: "bg-blue-600", static: true }, // 2x2 block
  { key: "t5", x: 2, y: 0, w: 1, h: 1, color: "bg-yellow-600", static: true }, // 1x1 block
  { key: "t6", x: 3, y: 0, w: 1, h: 1, color: "bg-green-600", static: true }, // 1x1 block
  { key: "t7", x: 4, y: 0, w: 2, h: 1, color: "bg-purple-600", static: true }, // 2x1 block
  { key: "t8", x: 2, y: 1, w: 2, h: 1, color: "bg-purple-600", static: true }, // 2x1 block
  { key: "t9", x: 4, y: 1, w: 1, h: 1, color: "bg-yellow-600", static: true }, // 1x1 block
  { key: "t10", x: 5, y: 1, w: 1, h: 1, color: "bg-green-600", static: true }, // 1x1 block
  { key: "t11", x: 0, y: 2, w: 1, h: 1, color: "bg-pink-600", static: true }, // 1x1 block
  { key: "t12", x: 1, y: 2, w: 1, h: 1, color: "bg-orange-600", static: true }, // 1x1 block
  { key: "t13", x: 2, y: 2, w: 2, h: 1, color: "bg-teal-600", static: true }, // 2x1 block
  { key: "t14", x: 4, y: 2, w: 1, h: 1, color: "bg-indigo-600", static: true }, // 1x1 block
  { key: "t15", x: 5, y: 2, w: 1, h: 1, color: "bg-lime-600", static: true }, // 1x1 block
  { key: "t16", x: 0, y: 3, w: 2, h: 1, color: "bg-rose-600", static: true }, // 2x1 block
  { key: "t17", x: 2, y: 3, w: 1, h: 1, color: "bg-fuchsia-600", static: true }, // 1x1 block
  { key: "t18", x: 3, y: 3, w: 1, h: 1, color: "bg-blue-600", static: true }, // 1x1 block
  { key: "t19", x: 4, y: 3, w: 1, h: 1, color: "bg-red-600", static: true }, // 1x1 block
  { key: "t20", x: 5, y: 3, w: 2, h: 1, color: "bg-yellow-600", static: true }, // 2x1 block
  { key: "t21", x: 7, y: 3, w: 1, h: 1, color: "bg-green-600", static: true }, // 1x1 block
];

const cardMobile = [
  // 2x4 highlight blocks
  { key: "a", x: 0, y: 2, w: 4, h: 2, color: "bg-green-600", static: true },
  { key: "b", x: 0, y: 11, w: 4, h: 2, color: "bg-blue-600", static: true },

  // 2x2 blocks
  { key: "c", x: 0, y: 0, w: 2, h: 2, color: "bg-red-600", static: true },
  { key: "d", x: 2, y: 0, w: 2, h: 2, color: "bg-yellow-600", static: true },
  { key: "f", x: 2, y: 4, w: 2, h: 2, color: "bg-orange-600", static: true },
  { key: "i", x: 0, y: 6, w: 2, h: 2, color: "bg-indigo-600", static: true },
  { key: "j", x: 2, y: 6, w: 2, h: 2, color: "bg-lime-600", static: true },
  { key: "g", x: 0, y: 8, w: 2, h: 2, color: "bg-teal-600", static: true },
  { key: "h", x: 2, y: 8, w: 2, h: 2, color: "bg-pink-600", static: true },
  { key: "k", x: 0, y: 13, w: 2, h: 2, color: "bg-gray-600", static: true },
  { key: "l", x: 2, y: 13, w: 2, h: 2, color: "bg-amber-600", static: true },
  { key: "e", x: 0, y: 15, w: 2, h: 2, color: "bg-purple-600", static: true },

  // 1x1 blocks
  { key: "m", x: 0, y: 4, w: 1, h: 1, color: "bg-cyan-600", static: true },
  { key: "n", x: 1, y: 4, w: 1, h: 1, color: "bg-violet-600", static: true },
  { key: "o", x: 0, y: 5, w: 1, h: 1, color: "bg-emerald-600", static: true },
  { key: "p", x: 1, y: 5, w: 1, h: 1, color: "bg-fuchsia-600", static: true },
  { key: "q", x: 0, y: 10, w: 1, h: 1, color: "bg-rose-600", static: true },
  { key: "r", x: 1, y: 10, w: 1, h: 1, color: "bg-sky-600", static: true },
  { key: "s", x: 2, y: 10, w: 1, h: 1, color: "bg-stone-600", static: true },
  { key: "t", x: 3, y: 10, w: 1, h: 1, color: "bg-lime-600", static: true },
];

export { cardData, cardData2, cardMobile };

