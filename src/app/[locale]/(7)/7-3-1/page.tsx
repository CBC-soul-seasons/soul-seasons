"use client";
import DelayedFullScreenLink from "@/components/ui/DelayedFullScreenLink";
import Image from "next/image";

const Page7_3_1 = () => {
  return (
    <div className="flex h-screen flex-col text-white relative">
      <Image
        src="/background/7-3-ticket.webp"
        alt="ticket"
        width={350}
        height={100}
        objectFit="contain"
        className="relative z-0 left-[15%] top-[40%]"
      />

      <DelayedFullScreenLink href="7-3-2" delay={2000} />
    </div>
  );
};

export default Page7_3_1;
