import { motion } from "framer-motion"
import React from "react"
import { aboutSectionMenu } from "./data"

interface AboutMenuProps {
  className?: string
  handleFocusedItem: (item: any) => void
  FocusedItem: any
}

export const AboutMenu: React.FC<AboutMenuProps> = ({
  handleFocusedItem,
  FocusedItem,
}) => {
  return (
    <div className='flex h-full flex-col row-start-2 col-start-1 p-8'>
      {aboutSectionMenu.map((item) => {
        return (
          <motion.div
            onClick={() => handleFocusedItem(item)}
            className='relative flex w-full cursor-pointer flex-col'
            animate={{
              height: FocusedItem?.key === item.key ? "auto" : "2rem",
              animationDuration: ".3s",
            }}
            key={item.key}>
            <h2 className='font-simple-3 text-header'>{item.roomName}</h2>
            <motion.span className='ml-10 overflow-hidden font-simple-3 text-description'>
              {item.description}
            </motion.span>
          </motion.div>
        )
      })}
    </div>
  )
}
