import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { links } from "./side-menu-data"

interface CategoriesTeaserProps {
  className?: string
  isOpen: boolean
  hoveredLink: string | null
}

export const CategoriesTeaser: React.FC<CategoriesTeaserProps> = ({
  className,
  isOpen,
  hoveredLink,
}) => {
  return (
    <div className={cn("", className)}>
      <motion.div
        style={{ x: isOpen ? 0 : "-100%" }}
        className='absolute left-0 top-0 z-10 h-screen w-1/2 bg-black duration-500 ease-in-out xl:w-1/3'>
        {links.map(({ imageSrc, id }) => {
          return (
            <motion.div
              animate={{
                x: hoveredLink === id ? "100%" : "0%",
              }}
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              key={imageSrc}
              className='pointer-events-none absolute z-0 h-full w-full bg-black duration-500 ease-out'></motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
