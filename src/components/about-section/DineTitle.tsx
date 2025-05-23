import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface DineTeaserTitleProps {
  className?: string
}

export const DineTeaserTitle: React.FC<DineTeaserTitleProps> = ({
  className,
}) => {
  const words = ["Ingredients.", "Chefs.", "Dishes."]
  const slideDuration = 0.6

  const [index1, setIndex1] = useState(0)
  const [prevIndex1, setPrevIndex1] = useState(0)

  useEffect(() => {
    const interval1 = setInterval(() => {
      setPrevIndex1(index1)
      setIndex1((prev) => (prev + 1) % words.length)
    }, 5000)

    return () => {
      clearInterval(interval1)
    }
  }, [index1])

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
      initial={{ y: isNew ? "100%" : "0%" }}
      animate={{ y: isNew ? "0%" : "-100%" }}
      transition={{ duration: slideDuration, ease: "easeInOut" }}
      className='absolute w-full h-full text-sub-header opacity-60 font-title-5'>
      {words[index]}
    </motion.div>
  )

  return (
    <div className={cn("mb-24", className)}>
      <h1 className='font-title-3 text-title text-center'>
        A Cusine For Every Taste
      </h1>
      <div className='flex relative justify-center gap-4 overflow-hidden'>
        <h3 className='font-title-5 opacity-60 text-sub-header'>Premium</h3>
        <div className='flex w-24'>
          {renderSlide({
            index: prevIndex1,
            isNew: false,
            keySuffix: "top-prev",
          })}
          {renderSlide({ index: index1, isNew: true, keySuffix: "top-new" })}
        </div>
      </div>
    </div>
  )
}
