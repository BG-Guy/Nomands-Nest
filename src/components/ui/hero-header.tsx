import React from "react"
import { cn } from "@/lib/utils"

interface HeroHeaderProps {
  className?: string
  title: string
  subTitle: any
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  className,
  title,
  subTitle,
}) => {
  return (
    <div className={cn("text-warmOffWhite z-10 mt-20", className)}>
      <h1 className='font-title-3 text-title'>{title}</h1>
      <h2 className='font-title text-header text-center'>
        {subTitle.one} <br /> • <br /> {subTitle.two}
      </h2>
    </div>
  )
}
