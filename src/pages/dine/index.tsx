import { MenuSection } from "@/components/dine-page/MenuSection"
import Transition from "@/components/transition/Transition"
import { PageHero } from "@/components/ui/page-hero"
import React, { useEffect } from "react"

interface DinePage {
  className?: string
}

export default function DinePage() {
  const backgroundImage = 'url("images/dine-hero.jpg")'
  const title = "Devour & Savor"
  const subTitle = {
    one: "Partake In Culinary Delights",
    two: "Relish Every Bite",
  }

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo({ top: 0, behavior: "auto" }) // Use "smooth" if you want animation
  }, [])

  return (
    <Transition>
      <PageHero
        className='absolute w-screen h-screen bg-slate-500 top-0'
        backgroundImage={backgroundImage}
        title={title}
        subTitle={subTitle}
      />
      <MenuSection />
    </Transition>
  )
}
