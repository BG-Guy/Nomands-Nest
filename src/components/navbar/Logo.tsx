import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
    const backgroundImage = 'url("images/logo-2.png")'

    return (
        <div
            style={{ backgroundImage }}
            className={cn(
                "flex h-8 w-8 items-center justify-center bg-contain bg-no-repeat",
                className,
            )}
        ></div>
    )
}
