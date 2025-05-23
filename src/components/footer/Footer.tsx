import React from "react"
import { CtaBtn } from "../ui/CtaBtn"
import { FaWhatsapp, FaEnvelope, FaStar } from "react-icons/fa"
import { FooterMenu } from "./FooterMenu"
import { CtaSection } from "./CtaSection"
import { ContactSection } from "./ContactSection"

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className='w-full border-t-[1px] h-[40vh] grid md:grid-cols-[1fr_40%_1fr] grid-cols-2 bg-warmLightOffWhite divide-gray-300 divide-x'>
      <FooterMenu className='w-full h-full hidden md:block' />
      <CtaSection className='w-full h-full' />
      <ContactSection className='w-full h-full' />
    </div>
  )
}
