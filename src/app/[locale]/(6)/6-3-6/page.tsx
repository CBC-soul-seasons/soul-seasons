"use client"
import NextButton from "@/components/ui/NextButton"
import { TextareaWithCounter } from "@/components/ui/textareaWithCounter"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import React, { useState } from "react"

const Scene6_3Page6: React.FC = () => {
  const t = useTranslations("6-3-6")
  const [feedbackText, setFeedbackText] = useState("")

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="absolute bottom-[40%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
        <div className="flex h-auto w-full px-6">
          <div className="items-cemter flex h-full w-full flex-col justify-center">
            <p className="text-center text-lg text-white font-light whitespace-break-spaces drop-shadow-text leading-[24.68px]">
              {t("couldYou")}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-[61%] w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
        <TextareaWithCounter
          onChange={(e) => {
            setFeedbackText(e.target.value)
            localStorage.setItem("feedbackText", e.target.value)
          }}
          value={feedbackText}
          maxCount={80}
          className="mx-12 h-[214px]"
        />
      </motion.div>
      <motion.div
        className="absolute top-[87%]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
        <NextButton url="6-3-7" disabled={feedbackText.length === 0} />
      </motion.div>
    </div>
  )
}

export default Scene6_3Page6
