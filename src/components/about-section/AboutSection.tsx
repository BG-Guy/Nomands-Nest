import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "./Header"
import Image from "next/image"
import { ParallaxImage } from "../utils/parallax-image"
import { StayTeaser } from "./StayTeaser"
import { DineTeaser } from "./DineTeaserTitle"

interface AboutSectionProps {
  className?: string
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <div className={cn("mt-[90vh] flex flex-col ", className)}>
      <StayTeaser />
      <DineTeaser />
    </div>
  )
}
