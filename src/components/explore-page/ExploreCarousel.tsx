import React, { useEffect, useState } from "react"
import { exploreCarouselData } from "./explore-page-carousel-data"
import CarouselBtns from "./CarouselBtn"
import { motion, useAnimation } from "framer-motion"
import { CarouselItem } from "./CarouselItem"
import { itemVariants } from "../about-section/anim"

interface ExploreCarouselProps {
  className?: string
}

export const ExploreCarousel: React.FC<ExploreCarouselProps> = ({
  className,
}) => {
  const [SelectedItem, setSelectedItem] = useState<number>(1)
  const [Translate, setTranslate] = useState<number>(0)

  const handleCarousel = async (number: number) => {
    const nextSelectedItem = SelectedItem + number
    const step = 100 / exploreCarouselData.length
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
      />
      <motion.div
        animate={viewportControls}
        variants={viewportVariants}
        className='CAROUSEL-VIEWPORT flex h-full'>
        {exploreCarouselData.map((item, index) => (
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
