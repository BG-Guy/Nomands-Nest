import { useState, useEffect } from "react"

const useScreenHeight = (): any => {
  const [ScreenDimensions, setScreenDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    // Set up event listener for window resize
    window.addEventListener("resize", handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return ScreenDimensions
}

export default useScreenHeight
