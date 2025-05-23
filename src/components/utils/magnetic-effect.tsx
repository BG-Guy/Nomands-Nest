import { MotionValue } from "framer-motion"

export const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

export const animateOut = (
    x: MotionValue<number>,
    y: MotionValue<number>,
    time: number,
    setTime: (time: number) => void,
    setReqId: React.Dispatch<React.SetStateAction<number | null>>,
) => {
    y.set(y.get() * Math.sin(time))
    y.set(lerp(y.get(), 0, 0.04))
    x.set(x.get() * Math.sin(time))
    x.set(lerp(x.get(), 0, 0.04))
    const newTime = time + 0.2
    setTime(newTime)

    if (Math.abs(y.get()) > 0.5) {
        setReqId(
            requestAnimationFrame(() =>
                animateOut(x, y, newTime, setTime, setReqId),
            ),
        )
    } else {
        setTime(Math.PI / 2)
        y.set(0)
        x.set(0)
    }
}

export const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue,
) => {
    const { xRange, yRange } = getRangeCoords(item, event, x, y)
    x.set(xRange * 20)
    y.set(yRange * 20)
}

export const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number,
) => {
    const INPUT_RANGE = inputUpper - inputLower
    const OUTPUT_RANGE = outputUpper - outputLower
    return (value: number) =>
        outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
}

export const getRangeCoords = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue,
) => {
    const bounds = item.getBoundingClientRect()
    const relativeX = event.clientX - bounds.left
    const relativeY = event.clientY - bounds.top
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX)
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY)
    const range = { xRange, yRange }
    return range
}
