export const modalVariants = {
  initial: {
    x: 0,
    width: 180,
    height: 180,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.3,
    },
  },
  expand: {
    width: "100%",
    height: "100%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      // delay whole expand by 0.3s
      // delay: 0.5,
      // 👇 custom delays for each property
      width: { delay: 0.35 },
      height: { delay: 0.35 },
    },
  },
  exit: {
    x: 0,
    width: 180,
    height: 180,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.3,
    },
  },
}

export const descriptionVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  enter: {
    opacity: 1,
    y: 20,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      // delay whole expand by 0.3s
      delay: 0.7,
    },
  },
  exit: {
    y: 0,
    opacity: 0,
  },
}
