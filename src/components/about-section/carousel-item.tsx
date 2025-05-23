import React, { useState } from "react"
import { motion } from "framer-motion"
import { GeoAnim } from "./GeoAnim"
import { CtaBtn } from "./CtaBtn"

interface CarouselItemProps {
  className?: string
  itemControls: any
  itemVariants: any
  image: string
  title: string
  subtitle: string
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  className,
  itemControls,
  itemVariants,
  image,
  title,
  subtitle,
}) => {
  return (
    <div className='flex justify-center relative h-full w-screen overflow-x-scroll'>
      <motion.div
        animate={itemControls}
        variants={itemVariants}
        transition={{ duration: 0.5, type: "spring" }}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={
          "CAROUSEL-ITEM snap-start flex h-full w-screen scale-[1] text-[80px]"
        }>
        <div className='flex w-full self-end'>
          <div className='flex flex-col lg:w-[50vw]  xs:w-[70vw] lg:p-14 xs: p-6 mb-10'>
            <div className='flex font-simple-2  bg-clip-text mb-2 w-full'>
              <div className='bg-warmOffWhite text-sub-header rounded-lg p-2 w-auto'>
                {title}
              </div>
              <div className='flex-1 m-auto'>
                <GeoAnim />
              </div>
            </div>
            <h2 className='font-simple-2 text-description bg-warmOffWhite rounded-lg p-2'>
              {subtitle}
            </h2>
          </div>
          <CtaBtn className='relative flex self-end justify-center items-center mb-10 m-auto' />
        </div>
      </motion.div>
    </div>
  )
}
