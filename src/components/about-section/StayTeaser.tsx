import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "./Header"
import { ParallaxImage } from "../utils/parallax-image"
import Image from "next/image"
import { CtaBtn } from "../ui/CtaBtn"

interface StayTeaserProps {
  className?: string
}

export const StayTeaser: React.FC<StayTeaserProps> = ({ className }) => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // triggers when section starts entering the viewport
  })

  const carouselImages = [
    "/images/private-room.jpg",
    "/images/suite-room.jpg",
    "/images/6-bed-dorms.jpg",
  ]

  const leafSvg = "url(/images/leaf-vector.svg)"

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -50]) // move up

  const [index1, setIndex1] = useState(0)
  const [prevIndex1, setPrevIndex1] = useState(0)

  const [index2, setIndex2] = useState(1)
  const [prevIndex2, setPrevIndex2] = useState(1)

  const backgroundImages = [
    "url(/images/night-lamp.jpg)",
    "url(/images/bed-making.jpg)",
  ]

  const slideDuration = 0.2

  useEffect(() => {
    const interval1 = setInterval(() => {
      setPrevIndex1(index1)
      setIndex1((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    const interval2 = setInterval(() => {
      setPrevIndex2(index2)
      setIndex2((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [index1, index2])

  const renderSlide = ({
    index,
    isNew,
    keySuffix,
  }: {
    index: number
    isNew: boolean
    keySuffix: string
  }) => (
    <motion.div
      key={`${keySuffix}-${index}`}
      initial={{ x: isNew ? "100%" : "0%" }}
      animate={{ x: isNew ? "0%" : "-100%" }}
      transition={{ duration: slideDuration, ease: "easeInOut" }}
      className='absolute top-0 left-0 w-full h-full'>
      <Image
        src={carouselImages[index]}
        alt={`Carousel Image ${index}`}
        width={300}
        height={400}
        className='object-cover w-full h-full'
      />
    </motion.div>
  )
  return (
    <div ref={sectionRef} className={cn("flex flex-col", className)}>
      <div className='flex flex-col items-center gap-16 w-screen h-screen relative'>
        <Header />
        <CtaBtn msg={"Explore More"} className='' />

        <ParallaxImage
          className='absolute hidden lg:block top-28 left-20 w-[200px] aspect-[3/4] overflow-hidden'
          width={200}
          aspectR={3 / 4}
          parallaxY={parallaxY1}
          srcUrl={backgroundImages[0]}
        />

        <ParallaxImage
          className='absolute hidden lg:block top-40 right-20 w-[200px] aspect-[3/4] overflow-hidden'
          width={200}
          aspectR={3 / 4}
          parallaxY={parallaxY1}
          srcUrl={backgroundImages[1]}
        />

        <div className='absolute top-[40%] right-[22%]  lg:w-[300px] sm:w-[200px] w-[150px] aspect-[3/4] overflow-hidden'>
          {renderSlide({
            index: prevIndex1,
            isNew: false,
            keySuffix: "top-prev",
          })}
          {renderSlide({ index: index1, isNew: true, keySuffix: "top-new" })}
        </div>

        <div className='absolute top-[40%] left-[22%]  lg:w-[300px] sm:w-[200px] w-[150px] aspect-[3/4] overflow-hidden'>
          {renderSlide({
            index: prevIndex2,
            isNew: false,
            keySuffix: "bottom-prev",
          })}
          {renderSlide({ index: index2, isNew: true, keySuffix: "bottom-new" })}
        </div>
      </div>
      <div className='gap-16 flex flex-col items-center mb-10'>
        <div
          style={{ backgroundImage: leafSvg }}
          className=' opacity-60 left-1/2 bg-cover h-52 w-28'></div>
      </div>
    </div>
  )
}
