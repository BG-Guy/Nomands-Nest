import React from "react"

interface GeoAnimProps {
  className?: string
}

export const GeoAnim: React.FC<GeoAnimProps> = ({ className }) => {
  return (
    <div className='wrapper'>
      <div className='block first'></div>
      <div className='block second'></div>
      <div className='block thirth'></div>
      <div className='block fourth'></div>
    </div>
  )
}
