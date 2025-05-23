import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { DineTeaserTitle } from "./DineTitle"
import { DineTeaserInfo } from "./DineTeaserInfo"
import Container from "../utils/container"

interface DineTeaserProps {
  className?: string
}

export const DineTeaser: React.FC<DineTeaserProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <DineTeaserTitle />
      <DineTeaserInfo />
    </div>
  )
}
