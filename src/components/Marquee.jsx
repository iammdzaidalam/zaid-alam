import { MARQUEE_TEXT } from "../constants"
import { motion } from "framer-motion"
const Marquee = () => {
  return (
    <div className="mt-4 w-full bg-customText text-customText2 lg:py-6 dark:bg-darkText">
      <div className="flex overflow-hidden whitespace-nowrap">
        {[...Array(2)].map((_, index) => (
          <motion.h1
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }}
          key={index} className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl">
            {MARQUEE_TEXT}
          </motion.h1>
        ))}
      </div>
    </div>
  )
}

export default Marquee;   