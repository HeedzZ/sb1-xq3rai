'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
]

const InteractiveImageFrame = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const controls = useAnimation()

  const handleImageClick = () => {
    setActiveIndex(prev => (prev === portfolioItems.length - 1 ? 0 : prev + 1))
    setIsInteracting(true)
  }

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!isTransitioning) {
      const delta = e.deltaY
      setIsInteracting(true)

      if (delta > 0 && activeIndex < portfolioItems.length - 1) {
        setActiveIndex(prev => prev + 1)
        setIsTransitioning(true)
      } else if (delta < 0 && activeIndex > 0) {
        setActiveIndex(prev => prev - 1)
        setIsTransitioning(true)
      }
    }
  }

  const disablePageScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enablePageScroll = () => {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    controls.start({ 
      y: -activeIndex * 100 + '%', 
      transition: { duration: 0.8, ease: 'easeInOut' } 
    })
  }, [activeIndex, controls])

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 800)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  useEffect(() => {
    if (!isInteracting) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev === portfolioItems.length - 1 ? 0 : prev + 1))
      }, 5000) // Change automatique toutes les 5 secondes

      return () => clearInterval(interval)
    }
  }, [isInteracting])

  useEffect(() => {
    const interactionTimeout = setTimeout(() => {
      setIsInteracting(false)
    }, 10000) // Réinitialise l'état d'interaction après 10 secondes

    return () => clearTimeout(interactionTimeout)
  }, [isInteracting])

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-10">
      <div 
        ref={containerRef} 
        className="w-full aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden"
        onWheel={handleWheel}
        onMouseEnter={disablePageScroll}
        onMouseLeave={enablePageScroll}
        onClick={handleImageClick}
      >
        <motion.div
          className="relative w-full h-full"
          animate={controls}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                y: `${index * 100}%`,
                zIndex: activeIndex === index ? 1 : 0,
                opacity: activeIndex === index ? 1 : 0,
                transition: 'opacity 0.5s'
              }}
            >
              <img
                src={item.image}
                alt={`Portfolio item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-4">
        {portfolioItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${index === activeIndex ? 'bg-orange-600' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default InteractiveImageFrame
