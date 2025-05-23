export const itemVariants = {
  scaleOut: { scale: 0.8 },
  scaleIn: { scale: 1 },
}

export const headerVariants = {
  enter: { x: 0, transition: { duration: 0.3, type: "easeOut" } },
  exit: { y: "200%", transition: { duration: 0.3, type: "spring" } },
}

export const subheaderVariants = {
  enter: { y: 0, transition: { duration: 0.3, type: "spring" } },
  exit: { y: "100%", transition: { duration: 0.3, type: "spring" } },
}
