"use client"
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import React from "react"

const Scene3_3Page5: React.FC = () => {
  const t = useTranslations("3-3-5")

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute bottom-[65%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
        <div className="flex h-auto w-full px-6">
          <div className="items-cemter flex h-full w-full flex-col justify-center">
            <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow">
              {t("areYou")}
            </p>
          </div>
        </div>
      </motion.div>
      <DelayedFullScreenLink href="3-3-6" delay={2000} />
    </div>
  )
}

export default Scene3_3Page5
