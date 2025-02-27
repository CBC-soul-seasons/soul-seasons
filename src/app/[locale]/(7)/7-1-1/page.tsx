'use client'
import { motion } from "framer-motion"
import { useRouter } from "@/i18n/routing"
const Scene7_1_1 = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/7-1-2");
  }
  const goal = localStorage.getItem("goal")
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 0 }}
    >
    <section className="w-full h-lvh flex flex-col items-center justify-center"
    onClick={handleClick}>
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-12">
      <h1 className="relative left-[30px] top-[50px] text-center font-tan_mon font-normal italic text-[64px] leading-[90.25px] tracking-normal">
            Goal
          </h1>
          <div className="mt-10">
            {goal}
          </div>
      </div>
         
    </section>
    </motion.div>
    
  )
}

export default Scene7_1_1
