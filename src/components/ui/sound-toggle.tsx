"use client";

import { useSoundStore } from "@/store/sound";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./button";

const SoundToggle = () => {
  const { toggle, isPlaying } = useSoundStore();
  return (
    <Button
      variant="ghost"
      onClick={toggle}
      className="rounded-[8px] p-2 text-accent w-auto h-auto [&_svg]:w-5 [&_svg]:h-5 "
    >
      {isPlaying ? <Volume2 /> : <VolumeX />}
    </Button>
  );
};

export default SoundToggle;
