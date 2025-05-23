import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { menuData } from "./data"
import { modalVariants, descriptionVariants } from "./dish-modal-anim"

interface DishItemProps {
  className?: string
  dishId: string
  selectedDishId: string
  handleSelectedDish: (dishId: string) => void
}

export const DishItem: React.FC<DishItemProps> = ({
  className,
  dishId,
  selectedDishId,
  handleSelectedDish,
}) => {
  const dropVariants = {
    initial: { x: -20, rotate: 45 },
    hover: {
      x: 0,
      rotate: 45,
      transition: { type: "easeInOut" },
    },
  }

  const dish = menuData.find((dish) => dish.id === dishId)
  const containerControls = useAnimation()
  const infoControls = useAnimation()
  const imageControls = useAnimation()

  const startAnimationSequence = async () => {
    handleSelectedDish(dishId)
    await imageControls.start("enter")
    console.log("1")
    await containerControls.start("expand")
    console.log("2")
    await infoControls.start("enter")
    console.log("3")
    console.log("handle selected dish called")
  }

  const endAnimationSequence = async () => {
    await infoControls.start("exit")
    console.log("1")
    await containerControls.start("exit")
    console.log("2")
    await imageControls.start("exit")
    console.log("3")
    console.log("handle selected dish called")
  }

  const handleAnimation = async () => {
    if (selectedDishId === dishId) {
      await endAnimationSequence()
      handleSelectedDish("")
    } else {
      handleSelectedDish(dishId)
      startAnimationSequence()
    }
  }

  const containerVariants = {
    expand: {
      width: "100%",
      height: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.2,
      },
    },

    exit: {
      width: 180,
      height: 180,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.2,
      },
    },
  }

  const imageVariants = {
    enter: {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.1,
      },
    },
    exit: {
      x: "-50%",
      y: "-50%",
      top: "50%",
      left: "50%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.1,
      },
    },
  }

  const infoVariants = {
    enter: {
      opacity: 1,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.1,
      },
    },

    exit: {
      opacity: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.1,
      },
    },
  }

  const isDishSelected = () => {
    return selectedDishId && selectedDishId !== dishId
  }

  return (
    dish && (
      <motion.div
        layoutId={dishId}
        key={dish.id}
        className='w-[180px] h-[180px] TEST z-20 flex cursor-pointer relative items-center justify-center rounded-full'
        whileHover='hover'
        style={{
          display: isDishSelected() ? "none" : "flex",
        }}
        animate={containerControls}
        variants={containerVariants}
        onClick={() => handleAnimation()}>
        {/* <motion.span
          className='w-10 h-10 z-20 rotate-45 absolute right-[-10px] bg-slate-200 rounded-l-full rounded-br-full rounded-r-[4000px]'
          variants={dropVariants}></motion.span> */}
        <motion.div
          className='w-[150px] h-[150px] bg-contain absolute bg-center z-30'
          style={{
            backgroundImage: dish.backgroundImage,
          }}
          animate={imageControls}
          variants={imageVariants}></motion.div>
        <motion.div
          variants={infoVariants}
          animate={infoControls}
          style={{ opacity: 0 }}
          className='flex flex-col items-center gap-4 mt-[180px] lg:m-0 py-4'>
          <motion.div
            // variants={descriptionVariants}
            className='text-header font-title mb-8'>
            {dish.dishName}
          </motion.div>

          <motion.div
            // variants={descriptionVariants}
            className='DESCRIPTION text-description text-2xl w-1/2'>
            {dish.description}
          </motion.div>

          <motion.div
            // variants={descriptionVariants}
            className='PRICE text-header w-1/2'>
            {dish.price}
          </motion.div>
        </motion.div>
      </motion.div>
    )
  )
}
