import React from "react"
import { cn } from "@/lib/utils"
import { FaEnvelope, FaStar, FaWhatsapp } from "react-icons/fa"

interface ContactSectionProps {
  className?: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  className,
}) => {
  return (
    <div className={cn("flex flex-col divide-y divide-gray-300", className)}>
      <div className='h-1/2 w-full flex flex-col justify-center px-6 gap-2 '>
        <h3 className='opacity-40 font-simple-2'>CONTACT</h3>
        <div className='flex items-center gap-2'>
          <FaWhatsapp className='black' />
          <a
            className='text-black font-simple-2'
            href='https://wa.me/1234567890'
            target='_blank'
            rel='noopener noreferrer'>
            +1 234 567 890
          </a>
        </div>
        <div className='flex items-center gap-2'>
          <FaEnvelope className='black' />
          <a
            className='text-black font-simple-2'
            href='mailto:info@yourhotel.com'>
            info@yourhotel.com
          </a>
        </div>
      </div>

      {/* REVIEWS */}
      <div className='h-1/2 w-full flex flex-col justify-center px-6 gap-2'>
        <h3 className='opacity-40 font-simple-2'>REVIEWS</h3>
        <div className='flex items-center gap-2'>
          <span className='text-[24px] font-bold'>4.8</span>
          <div className='flex text-yellow-400'>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < 4 ? "fill-current" : "fill-current opacity-60"}
              />
            ))}
          </div>
          <span className='text-sm opacity-60'>(236 reviews)</span>
        </div>
      </div>
    </div>
  )
}
