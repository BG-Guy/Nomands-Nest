import { MotionValue } from "framer-motion"

export const displayIsraelTime = () => {
    var now = new Date()
    var hours = now.toLocaleString("en-US", {
        timeZone: "Asia/Jerusalem",
        hour: "numeric",
        hour12: false,
    })
    var minutes = now.toLocaleString("en-US", {
        timeZone: "Asia/Jerusalem",
        minute: "numeric",
    })

    // Format single digits with leading zero
    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")

    var israelTime = hours + ":" + minutes

    return israelTime
}
