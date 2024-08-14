'use client'

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({ titleComponent }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi untuk header
      gsap.to('.header', {
        y: -200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Animasi untuk card
      gsap.fromTo('.card', {
        rotateX: 25, // Rotasi awal
      }, {
        rotateX: 0, // Rotasi akhir
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom 80%',
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [isMobile])

  return (
    <div className="h-[80rem] flex items-center justify-center relative p-16" ref={containerRef}>
      <div className="py-40 w-full relative" style={{ perspective: '1000px' }}>
        <Header titleComponent={titleComponent} />
        <Card />
      </div>
    </div>
  )
}

const Header: React.FC<{ titleComponent: string | React.ReactNode }> = ({ titleComponent }) => {
  return (
    <div className="header max-w-5xl mx-auto text-center transform scale-100 md:scale-90">
      {titleComponent}
    </div>
  )
}

const Card: React.FC = () => {
  return (
    <div className="card max-w-5xl rotate-15 -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-6 bg-[#222222] rounded-[30px] shadow-2xl transform scale-100 md:scale-90">
      <div className="bg-gray-100 h-full w-full rounded-2xl gap-4 overflow-hidden p-4 transition-all">
        <Image
          src="/temp-banner.png"
          fill
          alt="bannerImage"
          className="object-cover border-8 rounded-2xl"
        />
      </div>
    </div>
  )
}