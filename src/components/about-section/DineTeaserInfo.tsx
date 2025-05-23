import React, { useRef } from "react"
import { cn } from "@/lib/utils"
import { ParallaxImage } from "../utils/parallax-image"
import { useScroll, useTransform } from "framer-motion"
import Container from "../utils/container"
import { CtaBtn } from "../ui/CtaBtn"
import Link from "next/link"

interface DineTeaserInfoProps {
  className?: string
}

export const DineTeaserInfo: React.FC<DineTeaserInfoProps> = ({
  className,
}) => {
  const cuisineSectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cuisineSectionRef,
    offset: ["start end", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50])
  return (
    <div ref={cuisineSectionRef} className={cn("flex flex-col", className)}>
      <Container>
        <div className='flex flex-col'>
          <div className='flex flex-col lg:flex-row justify-evenly items-center  gap-8 w-full relative mb-24'>
            <ParallaxImage
              width={500}
              aspectR={1 / 1}
              parallaxY={parallaxY}
              srcUrl={"url(/images/cuisine-teaser.jpg)"}
              className='relative lg:block overflow-hidden'
            />
            <div className='flex flex-col items-center gap-4 w-1/2'>
              <h1 className='font-title-5 text-sub-header opacity-60'>
                Meet Our Chefs
              </h1>
              <span className='font-simple-3 text-description'>
                Our talented cooking staff sattles for anything other than the
                best for our residents. Our chefs has been features in cooking
                books, and has been working for top resturants for many years,
                trust us, they know what they're doing!
              </span>
              <Link scroll={false} href={"/dine"}>
                <CtaBtn msg={"Explore More"} />
              </Link>
            </div>
          </div>
          <div className='flex justify-evenly w-full lg:flex-row items-center flex-col-reverse gap-8  relative mb-24'>
            <div className='flex flex-col items-center gap-4 w-1/2'>
              <h1 className='font-title-5 text-sub-header opacity-60'>
                Have a look at our dishes
              </h1>
              <span className='font-simple-3 text-description'>
                Our dishes are made with our very talented chefs, their recipes
                goes for years, improving with each year. Our chefs choose only
                the best, high quality, fresh, top ingredients for their dishes,
              </span>
              <Link scroll={false} href={"/dine"}>
                <CtaBtn msg={"Explore More"} />
              </Link>
            </div>
            <ParallaxImage
              width={500}
              aspectR={1 / 1}
              parallaxY={parallaxY}
              srcUrl={"url(/images/tomato-pasta.jpg)"}
              className='relative overflow-hidden'
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
