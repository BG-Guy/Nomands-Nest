import React from "react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center mx-auto", className)}>
      <h1 className='font-title-3 text-title mt-8'>Rest easy, Dream freely</h1>
      <h2 className='font-simple-3 text-description text-center opacity-60'>
        Where every bed tells a story <br /> • <br /> and every guest becomes
        family.
      </h2>
    </div>
  )
}
