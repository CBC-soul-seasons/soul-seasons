"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import React from "react"

const Scene1_4Page4: React.FC = () => {
  const t = useTranslations("1-4-4")

  return (
    <div className="flex h-screen w-full bg-[url('/bg/1-4-4.webp')] flex-col items-center bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="absolute bottom-[60%]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
          <div className="flex h-[135px] w-full">
            <div className="items-cemter flex h-full w-full flex-col justify-center">
              <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow">
                {t("theDiary")}
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-[48%] right-[41.5%] flex items-center justify-center text-4xl font-medium"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
          Day 0:
        </motion.div>
        <motion.div
          className="absolute top-[53%] right-[11%] w-56 flex items-center justify-center text-lg text-black whitespace-break-spaces"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
          {t("planting")}
        </motion.div>
      </div>
    </div>
  )
}

export default Scene1_4Page4
