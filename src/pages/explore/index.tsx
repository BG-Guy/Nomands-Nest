import { ExploreContent } from "@/components/explore-page/ExploreContent"
import Transition from "@/components/transition/Transition"
import { PageHero } from "@/components/ui/page-hero"
import React, { useEffect } from "react"

interface ExplorePage {
  className?: string
}

export default function ExplorePage() {
  const backgroundImage = "url(images/waterfall-background.jpg)"
  const title = "Explore & Discover"
  const subTitle = {
    one: "Discover New Seeings",
    two: "Partake Beautiful Nature",
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
      <ExploreContent />
    </Transition>
  )
}
