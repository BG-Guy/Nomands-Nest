import React from "react"
import { cn } from "@/lib/utils"

interface FadeWrapperProps {
    className?: string
    fadeFrom: string
}

export const FadeWrapper: React.FC<FadeWrapperProps> = ({
    className,
    fadeFrom,
}) => {
    const gradientStyle = () => {
        let fadeSide
        if (fadeFrom === "bottom") fadeSide = "top"
        if (fadeFrom === "top") fadeSide = "bottom"
        if (fadeFrom === "right") fadeSide = "left"
        if (fadeFrom === "left") fadeSide = "right"
        return {
            background: `linear-gradient(to ${fadeSide}, black 0%, rgba(0,0,0,0.738) 19%, rgba(0,0,0,0.541) 34%, rgba(0,0,0,0.382) 47%, rgba(0,0,0,0.278) 56.5%, rgba(0,0,0,0.194) 65%, rgba(0,0,0,0.126) 73%, rgba(0,0,0,0.075) 80.2%, rgba(0,0,0,0.042) 86.1%, rgba(0,0,0,0.021) 91%, rgba(0,0,0,0.008) 95.2%, rgba(0,0,0,0.002) 98.2%, transparent 100%)`,
        }
    }
    return (
        <div
            style={gradientStyle()}
            className={cn(
                `absolute z-[2] float-left h-[50vh] w-full ${fadeFrom}-0`,
                className,
            )}
        ></div>
    )
}
