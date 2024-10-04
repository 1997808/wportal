import { forwardRef } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import { motion } from "framer-motion"
import LiveTile from './lib/livetile';
import { EmblaOptionsType } from 'embla-carousel'

const GridLayout = WidthProvider(RGL);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GridItem = (props: { height: number, width: number, layout: any, column: number, items: any }) => {
  const { height, width, layout, column = 8, items } = props //from grid container
  const gridWidth = height / 4 * column

  return gridWidth && (
    <GridLayout
      cols={column}
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
          <WCard key={card.key} keyid={card.key} color={card.color} data={card.data} />
        )
      })}
    </GridLayout>
  )
}

// @ts-expect-error xdd
const WCard = forwardRef(({ style, className, key, children, ...restOfProps }, ref) => {
  // @ts-expect-error xdd
  const { keyid, color, data } = restOfProps
  let text, textColor, Icon, iconSrc, imgSrc, slides
  if (data) {
    Icon = data.Icon
    text = data.text
    iconSrc = data.iconSrc
    textColor = data.textColor
    imgSrc = data.imgSrc
    slides = data.slides
  }
  const OPTIONS: EmblaOptionsType = { axis: 'y', dragFree: false, loop: true }

  return (
    // @ts-expect-error xdd
    <div style={style} ref={ref} key={key} className={[`p-1.5`, className].join(' ')} {...restOfProps}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 30, y: 30 }}
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`${color} relative w-full h-full flex justify-center items-center`}>
        {data && data.type === 'icon' && <Icon className="w-1/2 h-1/2 text-white" />}
        {data && data.type === 'icon-img' && <img src={iconSrc} className="w-1/2 h-1/2 text-white" />}
        {data && data.type === 'img' && <img src={imgSrc} className="w-full h-full object-cover" />}
        {data && data.type === 'live' && <LiveTile slides={slides} options={OPTIONS} />}
        <div className={`absolute bottom-0 left-0 px-2 py-1 text-xs ${textColor ?? 'text-white'} truncate`}>
          {text ?? keyid}
        </div>
      </motion.div>
      {children}
    </div>
  )
})