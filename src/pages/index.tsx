import { useScroll } from "framer-motion"
import { HeroSection } from "@/components/hero-section/HeroSection"
import { AboutSection } from "@/components/about-section/AboutSection"
import Transition from "@/components/transition/Transition"
import { Navbar } from "@/components/navbar/Navbar"
import { Footer } from "@/components/footer/Footer"
import { Gap } from "@/components/gap/Gap"
import { useEffect } from "react"
import Container from "@/components/utils/container"

export default function Home() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo({ top: 0, behavior: "auto" }) // Use "smooth" if you want animation
  }, [])

  return (
    <Transition>
      <HeroSection />
      <AboutSection />
    </Transition>
  )
}
