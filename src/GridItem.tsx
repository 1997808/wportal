import { forwardRef } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import { motion } from "framer-motion"

const GridLayout = WidthProvider(RGL);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GridItem = (props: { height: number, width: number, layout: any, items: any }) => {
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