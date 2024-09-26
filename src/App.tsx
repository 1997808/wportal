import Background from './assets/windows.jpg'
import RGL, { WidthProvider } from "react-grid-layout";
import { forwardRef, useEffect, useRef, useState } from 'react';

const cardData = [
  { key: 'a', x: 0, y: 0, w: 2, h: 2, color: 'bg-green-600' },
  { key: 'b', x: 1, y: 0, w: 1, h: 1, color: 'bg-blue-600' },
  { key: 'c', x: 4, y: 0, w: 1, h: 1, color: 'bg-yellow-600' },
  { key: 'd', x: 5, y: 0, w: 2, h: 2, color: 'bg-red-600' },
  { key: 'e', x: 7, y: 0, w: 1, h: 1, color: 'bg-green-600' },
  { key: 'f', x: 0, y: 2, w: 2, h: 1, color: 'bg-blue-600' },
  { key: 'g', x: 2, y: 2, w: 2, h: 1, color: 'bg-yellow-600' },
  { key: 'h', x: 4, y: 2, w: 1, h: 1, color: 'bg-red-600' },
  { key: 'i', x: 5, y: 2, w: 2, h: 2, color: 'bg-green-600' },
  { key: 'j', x: 6, y: 2, w: 2, h: 2, color: 'bg-blue-600' },
  { key: 'k', x: 0, y: 3, w: 1, h: 1, color: 'bg-yellow-600' }
];

const GridLayout = WidthProvider(RGL);


const App = () => {
  // const { height, width } = useWindowDimensions();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [layout, setLayout] = useState(cardData.map((item) => {
    const { key, x, y, w, h } = item
    return { i: key, x, y, w, h }
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
      <div className='absolute top-0 left-0 min-w-screen w-full max-h-screen h-screen px-32 py-16 flex flex-col gap-16'>
        <h1 className='text-5xl text-white'>Start</h1>
        <div className='relative grid-container grow overflow-hidden' ref={gridRef}>
          {dimensions.height !== 0 && dimensions.width !== 0 && (
            <GridItem height={dimensions.height} width={dimensions.width} layout={layout} />
          )}
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GridItem = (props: { height: number, width: number, layout: any }) => {
  const { height, width, layout } = props //from grid container
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
      {cardData.map((card) => {
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
    <div style={style} ref={ref} key={key} className={[`p-1`, className].join(' ')} {...restOfProps}>
      <div className={`${color} w-full h-full`}>
        {keyId}

      </div>
      {children}
    </div>
  )
})

export default App
