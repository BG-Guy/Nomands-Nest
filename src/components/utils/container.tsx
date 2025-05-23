import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "xl:px-12 lg:px-10 md:pr-2 md:px-1 mx-auto w-full max-w-[1750px]",
        className
      )}>
      {children}
    </div>
  )
}

export default Container
