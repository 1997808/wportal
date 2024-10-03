/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import Background from './assets/windows.jpg'
import UserIcon from './assets/excited.webp'
import useWindowDimensions from './lib/useWindowDimensions';
import { GridItem } from './GridItem';
import { cardData, cardData2 } from './lib/constants';
import { cardMobile } from './lib/constantsMobile';
import { GridMobile } from './GridMobile';


const App = () => {
  const [windows, setWindows] = useState(useWindowDimensions());
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [layout, setLayout] = useState(cardData.map((item) => {
    const { key, x, y, w, h, static: staticMode } = item
    return { i: key, x, y, w, h, static: staticMode }
  }));
  const [layout2, setLayout2] = useState(cardData2.map((item) => {
    const { key, x, y, w, h, static: staticMode } = item
    return { i: key, x, y, w, h, static: staticMode }
  }));
  const [layoutMobile, setLayoutMobile] = useState(cardMobile.map((item) => {
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

  return windows.width > windows.height ? (
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
  ) : (
    <div className='relative min-w-screen w-full h-screen'>
      <div className='absolute top-0 left-0 w-screen min-h-screen px-4 flex flex-col gap-1 bg-black'>
        <div className='py-2'></div>
        <div className='relative grid-container grow flex flex-col w-full [&>*]:shrink-0' ref={gridRef}>
          {dimensions.height !== 0 && dimensions.width !== 0 && (
            <GridMobile height={dimensions.height} width={dimensions.width} layout={layoutMobile} items={cardMobile} />
          )}
          <div className='py-2'></div>
        </div>
      </div>
    </div>
  )
}

export default App
