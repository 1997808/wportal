/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './livetile.css'
import { ICardDataSlides } from './constantsMobile'

type PropType = {
  slides: ICardDataSlides[]
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
          {slides.map((item, index) => {
            const { type, text, textColor, Icon, iconSrc, imgSrc } = item
            return (
              <div className="embla__slide" key={index}>
                <div
                  className={`relative w-full h-full flex justify-center items-center`}>
                  {type === 'icon' && Icon && <Icon className="w-1/2 h-1/2 text-white" />}
                  {type === 'icon-img' && <img src={iconSrc} className="w-1/2 h-1/2 text-white" />}
                  {type === 'img' && <img src={imgSrc} className="w-full h-full object-cover" />}
                  {type === 'text' && <p className={`${textColor ?? 'text-white'} w-full h-full text-sm px-4 py-2`}>{text}</p>}
                  {/* <div className={`absolute bottom-0 left-0 px-2 py-1 text-sm ${textColor ?? 'text-white'} truncate`}>
                    {text}
                  </div> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>

      </div>
    </section>
  )
}

export default LiveTile
