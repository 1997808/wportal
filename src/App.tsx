/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, useEffect, useRef, useState } from 'react';
import Background from './assets/windows.jpg'
import UserIcon from './assets/excited.webp'
import RGL, { WidthProvider } from "react-grid-layout";
import { motion } from "framer-motion"

const cardData = [
  { key: 'a', x: 0, y: 0, w: 2, h: 2, color: 'bg-red-600', static: true },   // 2x2 block
  { key: 'k', x: 6, y: 0, w: 1, h: 1, color: 'bg-cyan-600', static: true },   // 1x1 block
  { key: 'l', x: 7, y: 0, w: 1, h: 1, color: 'bg-amber-600', static: true },  // 1x1 block
  { key: 'b', x: 6, y: 1, w: 2, h: 2, color: 'bg-blue-600', static: true },  // 2x2 block
  { key: 'c', x: 4, y: 0, w: 1, h: 1, color: 'bg-yellow-600', static: true }, // 1x1 block
  { key: 'd', x: 5, y: 0, w: 1, h: 1, color: 'bg-green-600', static: true },  // 1x1 block
  { key: 'e', x: 2, y: 0, w: 2, h: 1, color: 'bg-blue-600', static: true }, // 2x1 block
  { key: 'e2', x: 2, y: 1, w: 2, h: 1, color: 'bg-purple-600', static: true }, // 2x1 block
  { key: 'c2', x: 4, y: 1, w: 1, h: 1, color: 'bg-yellow-600', static: true }, // 1x1 block
  { key: 'd2', x: 5, y: 1, w: 1, h: 1, color: 'bg-green-600', static: true },  // 1x1 block
  { key: 'f', x: 0, y: 2, w: 2, h: 1, color: 'bg-pink-600', static: true },   // 1x1 block
  { key: 'h', x: 2, y: 2, w: 2, h: 1, color: 'bg-teal-600', static: true },   // 2x1 block
  { key: 'i', x: 4, y: 2, w: 1, h: 1, color: 'bg-indigo-600', static: true }, // 1x1 block
  { key: 'j', x: 5, y: 2, w: 1, h: 1, color: 'bg-lime-600', static: true },   // 1x1 block
  { key: 'm', x: 0, y: 3, w: 2, h: 1, color: 'bg-rose-600', static: true },   // 2x1 block
  { key: 'n', x: 2, y: 3, w: 2, h: 1, color: 'bg-fuchsia-600', static: true }, // 1x1 block
  { key: 'p', x: 4, y: 3, w: 1, h: 1, color: 'bg-red-600', static: true },    // 1x1 block
  { key: 'q', x: 5, y: 3, w: 2, h: 1, color: 'bg-yellow-600', static: true }, // 2x1 block
  { key: 'r', x: 7, y: 3, w: 1, h: 1, color: 'bg-green-600', static: true },    // 1x1 block
];

const cardData2 = [
  { key: 't1', x: 0, y: 0, w: 2, h: 2, color: 'bg-red-600', static: true },   // 2x2 block
  { key: 't2', x: 6, y: 0, w: 1, h: 1, color: 'bg-cyan-600', static: true },   // 1x1 block
  { key: 't3', x: 7, y: 0, w: 1, h: 1, color: 'bg-amber-600', static: true },  // 1x1 block
  { key: 't4', x: 6, y: 1, w: 2, h: 2, color: 'bg-blue-600', static: true },  // 2x2 block
  { key: 't5', x: 2, y: 0, w: 1, h: 1, color: 'bg-yellow-600', static: true }, // 1x1 block
  { key: 't6', x: 3, y: 0, w: 1, h: 1, color: 'bg-green-600', static: true },  // 1x1 block
  { key: 't7', x: 4, y: 0, w: 2, h: 1, color: 'bg-purple-600', static: true }, // 2x1 block
  { key: 't8', x: 2, y: 1, w: 2, h: 1, color: 'bg-purple-600', static: true }, // 2x1 block
  { key: 't9', x: 4, y: 1, w: 1, h: 1, color: 'bg-yellow-600', static: true }, // 1x1 block
  { key: 't10', x: 5, y: 1, w: 1, h: 1, color: 'bg-green-600', static: true },  // 1x1 block
  { key: 't11', x: 0, y: 2, w: 1, h: 1, color: 'bg-pink-600', static: true },   // 1x1 block
  { key: 't12', x: 1, y: 2, w: 1, h: 1, color: 'bg-orange-600', static: true }, // 1x1 block
  { key: 't13', x: 2, y: 2, w: 2, h: 1, color: 'bg-teal-600', static: true },   // 2x1 block
  { key: 't14', x: 4, y: 2, w: 1, h: 1, color: 'bg-indigo-600', static: true }, // 1x1 block
  { key: 't15', x: 5, y: 2, w: 1, h: 1, color: 'bg-lime-600', static: true },   // 1x1 block
  { key: 't16', x: 0, y: 3, w: 2, h: 1, color: 'bg-rose-600', static: true },   // 2x1 block
  { key: 't17', x: 2, y: 3, w: 1, h: 1, color: 'bg-fuchsia-600', static: true }, // 1x1 block
  { key: 't18', x: 3, y: 3, w: 1, h: 1, color: 'bg-blue-600', static: true },   // 1x1 block
  { key: 't19', x: 4, y: 3, w: 1, h: 1, color: 'bg-red-600', static: true },    // 1x1 block
  { key: 't20', x: 5, y: 3, w: 2, h: 1, color: 'bg-yellow-600', static: true }, // 2x1 block
  { key: 't21', x: 7, y: 3, w: 1, h: 1, color: 'bg-green-600', static: true },    // 1x1 block
];

const GridLayout = WidthProvider(RGL);

const App = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [layout, setLayout] = useState(cardData.map((item) => {
    const { key, x, y, w, h, static: staticMode } = item
    return { i: key, x, y, w, h, static: staticMode }
  }));
  const [layout2, setLayout2] = useState(cardData2.map((item) => {
    const { key, x, y, w, h, static: staticMode } = item
    return { i: key, x, y, w, h, static: staticMode }
  }));
  const gridRef = useRef(null);

  const updateDimensions = () => {
    if (gridRef.current) {
      // @ts-expect-error xdd
      // eslint-disable-next-line no-unsafe-optional-chaining
      const { width, height } = gridRef?.current?.getBoundingClientRect();
      setDimensions({ width, height });
    }
  };

  useEffect(() => {
    const scrollContainer = gridRef.current as HTMLElement | null;
    let scrollDelta = 0;
    let isScrolling = false;

    if (!scrollContainer) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onWheel = (evt: any) => {
      evt.preventDefault();
      scrollDelta += evt.deltaY;

      if (!isScrolling) {
        smoothScroll();
      }
    };

    const smoothScroll = () => {
      isScrolling = true;

      // Smoothly adjust the scroll position in small steps
      const step = scrollDelta / 10; // Adjust value for speed
      scrollContainer.scrollLeft += step;
      scrollDelta -= step;

      if (Math.abs(scrollDelta) > 0.5) {
        requestAnimationFrame(smoothScroll); // Keep scrolling until near zero delta
      } else {
        isScrolling = false; // Stop when delta is small enough
        scrollDelta = 0; // Reset delta
      }
    };

    scrollContainer.addEventListener('wheel', onWheel);

    return () => {
      scrollContainer.removeEventListener('wheel', onWheel);
    };
  }, []);

  // Capture width and height after rendering
  useEffect(() => {
    updateDimensions();

    // Optionally, update dimensions on window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className='relative min-w-screen w-full max-h-screen h-screen'>
      <img src={Background} className='w-full h-screen object-cover' />
      <div className='absolute top-0 left-0 max-h-screen h-screen pt-16 pb-24 flex flex-col gap-24'>
        <div className='px-48 flex justify-between items-center'>
          <h1 className='text-7xl text-white font-light'>Start</h1>
          <div className='flex gap-4 items-center px-2 py-1 hover:bg-gray-500/50 bg-transparent duration-150 cursor-pointer' onClick={() => console.log('test')}>
            <div className='flex flex-col items-end gap-1'>
              <p className='text-3xl text-white font-light'>John Doe</p>
              <p className='text-lg text-white font-light'>Developer</p>
            </div>
            <img src={UserIcon} className='w-16 h-16' />
          </div>
        </div>
        <section className='relative grid-container grow flex gap-16 w-screen overflow-x-scroll [&>*]:shrink-0' ref={gridRef}>
          <div className='px-16'></div>
          {dimensions.height !== 0 && dimensions.width !== 0 && (
            <GridItem height={dimensions.height} width={dimensions.width} layout={layout} items={cardData} />
          )}
          {dimensions.height !== 0 && dimensions.width !== 0 && (
            <GridItem height={dimensions.height} width={dimensions.width} layout={layout2} items={cardData2} />
          )}
          <div className='px-16'></div>
        </section>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GridItem = (props: { height: number, width: number, layout: any, items: any }) => {
  const { height, width, layout, items } = props //from grid container
  const gridWidth = height * 2

  return gridWidth && (
    <GridLayout
      cols={8}
      className={`overflow-hidden`}
      layout={layout}
      rowHeight={height / 4}
      compactType={height > width ? 'vertical' : 'horizontal'}
      width={Math.ceil(gridWidth)}
      maxRows={4}
      containerPadding={[0, 0]}
      margin={[0, 0]}
      isBounded={true}
      style={{ width: `${gridWidth}px` }}
    >
      {items.map((card: never) => {
        return (
          // @ts-expect-error xdd
          <WCard key={card.key} keyId={card.key} color={card.color} />
        )
      })}
    </GridLayout>
  )
}

// @ts-expect-error xdd
const WCard = forwardRef(({ style, className, key, children, ...restOfProps }, ref) => {
  // @ts-expect-error xdd
  const { keyId, color } = restOfProps
  return (
    // @ts-expect-error xdd
    <div style={style} ref={ref} key={key} className={[`p-1.5`, className].join(' ')} {...restOfProps}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 30, y: 30 }}
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`${color} w-full h-full`}>
        {keyId}
      </motion.div>
      {children}
    </div>
  )
})

export default App
