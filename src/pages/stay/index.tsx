import { StayContent } from "@/components/stay-page/StayContent"
import Transition from "@/components/transition/Transition"
import { PageHero } from "@/components/ui/page-hero"
import React, { useEffect } from "react"

interface StayPage {
  className?: string
}

export default function StayPage() {
  const backgroundImage = "url(images/lobby.jpg)"
  const title = "Stay & Experience"
  const subTitle = {
    one: "Refresh Your Mind",
    two: "Rest And Nurture",
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
      <StayContent />
    </Transition>
  )
}
