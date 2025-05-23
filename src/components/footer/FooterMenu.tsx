import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { links } from "../side-menu/side-menu-data"

interface FooterMenuProps {
  className?: string
}

export const FooterMenu: React.FC<FooterMenuProps> = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("border-black MENU flex px-8 flex-col ", className)}>
      {links.map((item, index) => {
        return (
          <Link scroll={false} href={item.href} key={item.id}>
            <motion.div
              className='WRAPPER relative '
              onMouseEnter={() => setHoveredIndex(index)}
              key={index}
              onMouseLeave={() => setHoveredIndex(null)}>
              <motion.div
                animate={{
                  x: hoveredIndex === index ? "-10%" : "100%",
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  stiffness: 100,
                  damping: 10,
                }}
                className='absolute text-sub-header text-black'>
                •
              </motion.div>
              <motion.div
                animate={{
                  x: hoveredIndex === index ? "10%" : "0",
                }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className='z-10 relative cursor-pointer bg-warmLightOffWhite text-black font-simple-2 text-sub-header'>
                {item.title}
              </motion.div>
            </motion.div>
          </Link>
        )
      })}
    </div>
  )
}
