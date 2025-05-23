import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CarouselItemProps {
  className?: string
  item: {
    id: string
    description: { [key: string]: string | number }
    imagesUrl: {
      leftImage: string
      rightImage: string
    }
  }
  itemControls: any
  itemVariants: any
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  className,
  item,
  itemControls,
  itemVariants,
}) => {
  return (
    <motion.div
      animate={itemControls}
      variants={itemVariants}
      transition={{ duration: 0.5, type: "spring" }}
      className={cn(
        "w-full h-full flex md:flex-row flex-col-reverse gap-4 my-10",
        className
      )}>
      <div className='flex relative md:w-[50vw] justify-evenly items-center md:px-4 w-screen md:h-[95vh] h-[50vh]'>
        <div
          style={{ backgroundImage: item.imagesUrl.leftImage }}
          className='IMAGE-ONE md:h-1/2 h-full w-[45%] bg-cover'></div>
        <div
          style={{ backgroundImage: item.imagesUrl.rightImage }}
          className='IMAGE-TWO md:h-1/2 h-full w-[45%] bg-cover'></div>
      </div>
      <div className='flex flex-col md:w-[50vw] w-screen md:h-[95vh] h-[50vh] my-auto p-8'>
        <h1 className='text-title font-title-3'>{item.description.name}</h1>
        <ul className='DESCRIPTION font-simple-2 flex-1 text-border divide-y divide-gray-300'>
          {Object.entries(item.description).map(([key, value]) => (
            <li className='p-2 opacity-80' key={key}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
