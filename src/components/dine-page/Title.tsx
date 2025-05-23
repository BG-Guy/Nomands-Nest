import React from "react"
import { cn } from "@/lib/utils"

interface TitleProps {
  className?: string
}

export const Title: React.FC<TitleProps> = ({ className }) => {
  return (
    <div className={cn("text-warmOffWhite z-10 mt-20", className)}>
      <h1 className='font-title-3 text-title'>Devour & Savor</h1>
      <h2 className='font-title text-header text-center'>
        Partake in Culinary Delights <br /> • <br /> Relish Every Bite
      </h2>
    </div>
  )
}
