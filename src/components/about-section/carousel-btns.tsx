import { motion } from "framer-motion"
import React, { useState } from "react"
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md"

interface CarouselBtnsProps {
  SelectedItem: number
  handleCarousel: (number: number) => void
}

const CarouselBtns: React.FC<CarouselBtnsProps> = ({
  SelectedItem,
  handleCarousel,
}) => {
  const [isHoveredRight, setIsHoveredRight] = useState(false)
  const [isHoveredLeft, setIsHoveredLeft] = useState(false)
  return (
    <>
      <button
        onMouseEnter={() => setIsHoveredLeft(true)}
        onMouseLeave={() => setIsHoveredLeft(false)}
        disabled={SelectedItem === 1}
        onClick={() => handleCarousel(-1)}
        className={`z-[5] absolute top-1/2 left-0 ease-out w-10 h-10 overflow-x-hidden flex ${
          SelectedItem === 1 && "hidden"
        }`}>
        <motion.div
          animate={{ x: isHoveredLeft ? -40 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className='h-full w-full'>
          <MdKeyboardDoubleArrowLeft
            color='#FEF9E7CC'
            size={40}
            className='text-secondary'
          />
        </motion.div>
        <motion.div
          animate={{ x: isHoveredLeft ? -40 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className='h-full w-full'>
          <MdKeyboardDoubleArrowLeft
            color='#FEF9E7CC'
            size={40}
            className='text-secondary'
          />
        </motion.div>
      </button>
      <button
        onMouseEnter={() => setIsHoveredRight(true)}
        onMouseLeave={() => setIsHoveredRight(false)}
        disabled={SelectedItem === 3}
        onClick={() => handleCarousel(1)}
        className={`z-[5] absolute top-1/2 right-0 ease-out w-10 h-10 overflow-x-hidden flex ${
          SelectedItem === 3 && "hidden"
        }`}>
        <motion.div
          animate={{ x: isHoveredRight ? 0 : -40 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className='h-full w-full'>
          <MdKeyboardDoubleArrowRight
            color='#FEF9E7CC'
            size={40}
            className='text-secondary'
          />
        </motion.div>
        <motion.div
          animate={{ x: isHoveredRight ? 0 : -40 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className='h-full w-full'>
          <MdKeyboardDoubleArrowRight
            color='#FEF9E7CC'
            size={40}
            className='text-secondary'
          />
        </motion.div>
      </button>
    </>
  )
}

export default CarouselBtns
