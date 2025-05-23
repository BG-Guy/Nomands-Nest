import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

interface TitleProps {
  className?: string
  navbarColor: any
}

export const Title: React.FC<TitleProps> = ({ className, navbarColor }) => {
  return (
    <div
      className={cn(
        "absolute absolute-center flex transform flex-col items-center justify-center",
        className
      )}>
      <Link scroll={false} href={"/"}>
        <motion.h1
          style={{ color: navbarColor }}
          className='text-center font-title-5 text-header'>
          THE <br />
          NOMAND'S NEST
        </motion.h1>
      </Link>
    </div>
  )
}
