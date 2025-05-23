import React from "react"
import { cn } from "@/lib/utils"
import { HeroHeader } from "./hero-header"

interface PageHeroProps {
  className?: string
  backgroundImage: string
  title: string
  subTitle: any
}

export const PageHero: React.FC<PageHeroProps> = ({
  className,
  backgroundImage,
  title,
  subTitle,
}) => {
  return (
    <div
      style={{ backgroundImage: backgroundImage }}
      className={cn(
        "absolute w-screen h-screen bg-slate-500 top-0 bg-cover flex items-center justify-center",
        className
      )}>
      <div className='bg-dark-overlay w-full h-full absolute'></div>
      <HeroHeader
        className='flex items-center flex-col'
        title={title}
        subTitle={subTitle}
      />
    </div>
  )
}
