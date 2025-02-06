export const scenePageMap = {
  "0": "/sound/track/0.mp3",
} as const;

export const soundPageMap: Record<
  string,
  {
    soundEffect?: {
      sound: string;
      loop?: boolean;
      volume?: number;
    };
    backgroundVolume?: number;
  }
> = {
  "2-1": {
    soundEffect: {
      sound: "/sound/sound-effect/1.mp3",
    },
  },
} as const;
