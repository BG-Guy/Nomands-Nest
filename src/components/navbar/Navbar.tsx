import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { BurgerMenu } from "./BurgerMenu"
import { MenuLinks } from "./MenuLinks"
import { Title } from "./Title"
import { SideMenu } from "../side-menu/SideMenu"
import { motion, MotionValue, useTransform } from "framer-motion"
import { CtaBtn } from "../ui/CtaBtn"
import Container from "../utils/container"

interface NavbarProps {
  className?: string
  scrollY: MotionValue<number>
}

export const Navbar: React.FC<NavbarProps> = ({ className, scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.innerHeight)
  }, [])

  const backgroundColor = useTransform(
    scrollY,
    [20, screenHeight - 80, screenHeight],
    ["#00000033", "#00000033", "#FEF9E7"]
  )

  const blur = useTransform(
    scrollY,
    [20, 40, screenHeight],
    ["blur(0px)", "blur(6px)", "blur(0px)"]
  )

  const height = useTransform(scrollY, [40, 120], ["14vh", "10vh"])

  const navbarColor = useTransform(
    scrollY,
    [40, screenHeight - 80, screenHeight],
    ["#FFFFFF", "#FFFFFF	", "#000000"]
  )

  return (
    <div className='sticky top-0 z-50 w-full'>
      <motion.div
        style={{
          backgroundColor: backgroundColor,
          backdropFilter: blur,
          height: height,
          color: navbarColor,
        }}
        className={cn(
          "flex h-full items-center border-b-[0.01px] responsive-padding-layout",
          className
        )}>
        <Container className='flex'>
          <BurgerMenu handleMenuOpen={handleMenuOpen} color={navbarColor} />
          <SideMenu handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
          <MenuLinks navbarColor={navbarColor} />
          <Title navbarColor={navbarColor} />
          <CtaBtn msg={"Book your stay"} className='ml-auto' />
        </Container>
      </motion.div>
    </div>
  )
}
