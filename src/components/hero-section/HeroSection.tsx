import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { GeometricShape } from "../ui/geometric-shape"

interface HeroSectionProps {
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const backgroundImage = 'url("images/nomands-nest-hero.jpg")'

  return (
    <div className='absolute top-0 h-screen w-full'>
      <div
        style={{ backgroundImage }}
        className={cn(
          "flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center",
          className
        )}>
        <div className='absolute inset-0 z-[1] bg-black bg-opacity-20'></div>
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.97 }}
          animate={{ opacity: 1, y: -10, scale: 1 }}
          transition={{ type: "easeOut", duration: 0.5 }}
          className='z-[5] flex flex-col opacity-0'>
          <h1 className='font-title-3 text-title text-white text-center'>
            Find Peace. Enjoy. Invent Yourself.
          </h1>
          <span className='text-center font-simple text-[1rem] text-white opacity-80'>
            HOTEL RESORT <br /> • <br /> THE PHILLIPINES ISLAND
          </span>
        </motion.div>
        <GeometricShape />
      </div>
    </div>
  )
}
