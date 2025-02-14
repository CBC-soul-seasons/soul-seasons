"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink"

const Scene5_2Page7: React.FC = () => {
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
  })

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div
        className={`w-[200px] h-[200px] absolute bottom-[260px] left-[80px] ${
          animate ? "rotate-0 translate-y-32 -translate-x-6" : "rotate-90"
        }  transform transition duration-700 ease-in delay-500`}>
        <Image src="/background/fruit.webp" fill objectFit="contain" alt="christmas-tree" />
      </div>
      <DelayedFullScreenLink href="6-1-1" delay={2000} />
    </div>
  )
}

export default Scene5_2Page7
