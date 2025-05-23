export const translate = {
  initial: {
    y: -20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.75 },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.75 },
  },
}
