import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { itemVariants } from "../about-section/anim"
import CarouselBtns from "../ui/carousel-btn"
import { CarouselItem } from "../ui/carousel-item"
import { stayCarouselData } from "../stay-page/stay-page-carousel-data"

interface StayCarouselProps {
  className?: string
}

export const StayCarousel: React.FC<StayCarouselProps> = ({ className }) => {
  const [SelectedItem, setSelectedItem] = useState<number>(1)
  const [Translate, setTranslate] = useState<number>(0)

  const handleCarousel = async (number: number) => {
    const nextSelectedItem = SelectedItem + number
    const step = 100 / stayCarouselData.length
    const nextTranslate = Translate - step * number

    setSelectedItem(nextSelectedItem)
    setTranslate(nextTranslate)

    await startAnimationSequence(nextTranslate)
  }

  const viewportVariants = {
    translateX: {
      x: Translate + "%",
      transition: { duration: 0.5, type: "spring", damping: 20, stifness: 100 },
    },
  }

  const viewportControls = useAnimation()
  const itemControls = useAnimation()

  const startAnimationSequence = async (xValue: number) => {
    await itemControls.start("scaleOut")
    await viewportControls.start({
      x: xValue + "%",
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    })
    await itemControls.start("scaleIn")
  }
  return (
    <div className='w-screen h-full relative flex'>
      <CarouselBtns
        SelectedItem={SelectedItem}
        handleCarousel={handleCarousel}
        color={"#000"}
        CarouselLength={3}
      />
      <motion.div
        animate={viewportControls}
        variants={viewportVariants}
        className='CAROUSEL-VIEWPORT flex h-full'>
        {stayCarouselData.map((item, index) => (
          <CarouselItem
            itemControls={itemControls}
            itemVariants={itemVariants}
            item={item}
            key={item.id}
          />
        ))}
      </motion.div>
    </div>
  )
}
