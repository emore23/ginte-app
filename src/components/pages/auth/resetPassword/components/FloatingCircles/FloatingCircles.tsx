import { motion } from "framer-motion";

const circleVariants = (initialY: string) => ({
  initial: { scale: 0.8, opacity: 0.7, y: initialY },
  animate: {
    scale: [0.8, 1.1, 0.9, 1],
    y: [initialY, "5%", "-5%", initialY],
    opacity: [0.7, 0.8, 0.7, 0.8],
  },
  transition: {
    repeat: Infinity,
    repeatType: "reverse" as "reverse",
    duration: 15,
    ease: "easeInOut",
  },
});

export function FloatingCircles() {
  return (
    <>
		  <motion.div
        className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-[#16a34a]"
        initial={circleVariants("-80%").initial}
        animate={circleVariants("-80%").animate}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[10%] left-[22%] right-[25px] w-[300px] h-[300px] rounded-full bg-[#16a34a] -translate-x-1/2"
        initial={circleVariants("-80%").initial}
        animate={circleVariants("-80%").animate}
        transition={circleVariants("-50%").transition}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[150px] h-[150px] rounded-full bg-[#16a34a]"
        initial={circleVariants("-80%").initial}
        animate={circleVariants("-80%").animate}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-[20%] w-[300px] h-[300px] rounded-full bg-[#16a34a] translate-x-1/2"
        initial={circleVariants("50%").initial}
        animate={circleVariants("50%").animate}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </>
  );
}
