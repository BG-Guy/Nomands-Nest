import React from "react"
import { cn } from "@/lib/utils"
import { HoverCarouselWrapper } from "../utils/hover-carousel-effect"
import { links } from "../side-menu/side-menu-data"
import Link from "next/link"
import { motion } from "framer-motion"

interface MenuLinksProps {
  className?: string
  navbarColor: any
}

export const MenuLinks: React.FC<MenuLinksProps> = ({
  className,
  navbarColor,
}) => {
  return (
    <div
      className={cn(
        "ms-12 hidden items-center justify-center gap-12 xl:flex",
        className
      )}>
      {links.map((link, index) => {
        return (
          <Link scroll={false} href={link.href} key={link.id}>
            <HoverCarouselWrapper
              direction={"y"}
              isLink={true}
              color={navbarColor}>
              <motion.span
                style={{ color: navbarColor }}
                className='text-nav-links font-simple-3'>
                {link.title}
              </motion.span>
            </HoverCarouselWrapper>
          </Link>
        )
      })}
    </div>
  )
}
