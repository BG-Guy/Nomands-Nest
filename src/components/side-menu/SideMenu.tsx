import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { links } from "./side-menu-data"
import { CategoriesTeaser } from "./CategoriesTeaser"
import { SubMenu } from "./SubMenu"
import Link from "next/link"

interface SideMenuProps {
  className?: string
  handleMenuOpen: () => void
  isOpen: boolean
}

export const SideMenu: React.FC<SideMenuProps> = ({
  className,
  handleMenuOpen,
  isOpen,
}) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-10 h-screen bg-black'
          onClick={handleMenuOpen}
        />
      )}

      <CategoriesTeaser isOpen={isOpen} hoveredLink={hoveredLink} />
      <motion.div
        style={{ x: isOpen ? 0 : "-100%" }}
        className={cn(
          "absolute left-0 top-0 z-20 h-screen w-2/3 transform bg-[#FFF9F2] p-12 text-[3rem] text-black duration-500 ease-in-out xl:w-1/3",
          className
        )}>
        <span onClick={handleMenuOpen} className='close-btn m-12'></span>
        <div className='mt-20 flex h-3/5 w-full flex-col gap-4 border-b-2 font-title-3'>
          <span className='font-simple text-xs opacity-40'>MENU</span>
          {links.map(({ title, id, href }) => {
            return (
              <Link scroll={false} href={href} key={id} className='text-black'>
                <motion.div
                  key={id}
                  onPointerEnter={() => setHoveredLink(id)}
                  onPointerLeave={() => setHoveredLink(null)}
                  className='relative z-30 flex h-14 w-full cursor-pointer items-center justify-center'>
                  <motion.span
                    style={{
                      x: hoveredLink === id ? "200%" : "0%",
                      opacity: hoveredLink === id ? 0.5 : 0,
                    }}
                    className='absolute right-0 z-40 h-2 w-2 rounded-full bg-black duration-300 ease-in-out'></motion.span>
                  <motion.span className='absolute left-0 z-40 h-full w-1/2'>
                    {title}
                  </motion.span>
                </motion.div>
              </Link>
            )
          })}
        </div>
        <SubMenu />
      </motion.div>
    </>
  )
}
