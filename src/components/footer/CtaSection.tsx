import React from "react"
import { cn } from "@/lib/utils"
import { CtaBtn } from "../ui/CtaBtn"
import Image from "next/image"

interface CtaSectionProps {
  className?: string
}

export const CtaSection: React.FC<CtaSectionProps> = ({ className }) => {
  const backgroundImage = "images/footer-background.png"
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src={backgroundImage}
        alt=''
        className='absolute inset-0 h-full w-full object-cover opacity-5 z-0'
      />
      <div className='z-10'>
        <CtaBtn msg={"Book your stay"} className='flex' />
      </div>
    </div>
  )
}
