import React, { useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { menuData } from "./data"

interface DishModalProps {
  className?: string
  selectedDishId: any
  setSelectedDishId: (selected: any) => void
}

export const DishModal: React.FC<DishModalProps> = ({
  selectedDishId,
  setSelectedDishId,
}) => {
  const dish = menuData.find((dish) => dish.id === selectedDishId)

  const modalControls = useAnimation()
  const descriptionControls = useAnimation()

  const startAnimationSequence = async () => {
    await modalControls.start("expand")
    await descriptionControls.start("enter")
    console.log("handle selected dish called")
  }

  const endAnimationsSequence = async () => {
    await descriptionControls.start("exit")
    await modalControls.start("exit")
    setSelectedDishId("")
    console.log("set selected dish")
  }

  useEffect(() => {
    if (selectedDishId) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [selectedDishId])

  return (
    <AnimatePresence>
      {dish && (
        <motion.div
          initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          animate={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(3px)",
          }}
          exit={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
            transition: {
              duration: 0.2,
              type: "easeOut",
            },
          }}
          transition={{ duration: 0.2, type: "spring" }}
          className='h-screen w-screen  fixed inset-0 z-50 '>
          <motion.div
            onClick={() => setSelectedDishId("")}
            className='z-20 inset-0 fixed m-auto p-4 gap-8 xs:w-full xs:h-full sm:w-full sm:h-full'>
            <div className='flex '>
              <motion.div
                layoutId={`${selectedDishId}`}
                className='cursor-pointer w-[250px] h-[250px] bg-center bg-cover translate-y-10'
                style={{
                  backgroundImage: dish.backgroundImage,
                }}
              />
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className='text-header text-warmLightOffWhite mt-auto'>
                {dish.price}
              </motion.span>
            </div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              exit={{ y: -20, opacity: 0 }}
              className='flex flex-col items-center text-warmLightOffWhite gap-4  lg:m-0 py-4'>
              <motion.div className='text-title font-simple-2 mb-8'>
                {dish.dishName}
              </motion.div>

              <motion.div className=' text-description font-simple-3 text-2xl'>
                {dish.description}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
