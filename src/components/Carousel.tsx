import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import './Carousel.css'

interface CarouselItem {
  id: string
  title: string
  content: string
  color: string
  height: number
}

interface CarouselProps {
  items: CarouselItem[]
  title?: string
  baseColor?: string
}

export const Carousel: React.FC<CarouselProps> = ({ items, title, baseColor = '#e5e5e5' }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    dragFree: false,
    containScroll: 'trimSnaps'
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const index = emblaApi.selectedScrollSnap()
    setSelectedIndex(index)
    
    // Get the height of the currently selected slide
    const activeSlide = slideRefs.current[index]
    if (activeSlide) {
      const slideHeight = activeSlide.offsetHeight
      setContainerHeight(slideHeight)
    }
  }, [emblaApi])
  
  useEffect(() => {
    if (!emblaApi) return
    
    onSelect() // Set initial selection
    emblaApi.on('select', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="carousel-container"
    >
      {title && <h2 className="carousel-title">{title}</h2>}
      <div 
        className="embla" 
        ref={emblaRef}
        style={{ 
          height: containerHeight > 0 ? `${containerHeight}px` : 'auto',
          transition: 'height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)'
        }}
      >
        <div className="embla__container">
          {items.map((item, index) => {
            const isSelected = index === selectedIndex
            const scale = isSelected ? 1 : 0.85
            
            return (
              <motion.div
                key={item.id}
                className="embla__slide"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: scale
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  scale: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                <div 
                  ref={(el) => { slideRefs.current[index] = el }}
                  className="carousel-item"
                  style={{ backgroundColor: baseColor, height: `${item.height}px` }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <button className="embla__button embla__button--prev" onClick={scrollPrev}>&#9664;</button>
                  <button className="embla__button embla__button--next" onClick={scrollNext}>&#9654;</button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
