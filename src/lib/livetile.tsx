import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './livetile.css'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const LiveTile: React.FC<PropType> = (props) => {
  const { slides, options } = props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>

      </div>
    </section>
  )
}

export default LiveTile
