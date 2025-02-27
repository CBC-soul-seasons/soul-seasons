import { AmbientTrack, SoundEffect } from "@/components/ui/sounds";

export const scenePageMap = {
  "0-1": "/sound/bgm/B1 - fresh morning relaxation.wav",
  "0-2": "/sound/bgm/B1 - fresh morning relaxation.wav",
  "0-3": "/sound/bgm/B1 - fresh morning relaxation.wav",
  "0-4": "/sound/bgm/B1 - fresh morning relaxation.wav",
  "0-5": "/sound/bgm/B1 - fresh morning relaxation.wav",
  "0-6": "/sound/bgm/B2 - deep forest relaxation.wav",
  "0-7": "/sound/bgm/B2 - deep forest relaxation.wav",
  "0-8": "/sound/bgm/B2 - deep forest relaxation.wav",
  "1-1": "/sound/bgm/B3 - Nostalgia.wav",
  "1-1-1": undefined,
  "1-1-2": undefined,
  "1-2": "/sound/bgm/B3 - Nostalgia.wav",
  "1-3": "/sound/bgm/B3 - Nostalgia.wav",
  "1-4": "/sound/bgm/B3 - Nostalgia.wav",
  "1-4-9": "/sound/bgm/B4 - Rain V3.wav",
  "2-1": "/sound/bgm/B4 - Rain V3.wav",
  "2-2": "/sound/bgm/B4 - Rain V3.wav",
  "2-3": "/sound/bgm/B4 - Rain V3.wav",
  "2-3-5": "/sound/bgm/B5 - Winter.wav",
  "3-1": "/sound/bgm/B5 - Winter.wav",
  "3-2": "/sound/bgm/B5 - Winter.wav",
  "3-3": "/sound/bgm/B5 - Winter.wav",
  "3-3-7": "/sound/bgm/B6 - Spring V3.wav",
  "4-1": "/sound/bgm/B6 - Spring V3.wav",
  "5-1": "/sound/bgm/B7 - Summer2.wav",
  "5-2": "/sound/bgm/B7 - Summer2.wav",
  "6-1": "/sound/bgm/B8 - outro.wav",
  "6-2": "/sound/bgm/B8 - outro.wav",
  "6-3": "/sound/bgm/B8 - outro.wav",
  "7-1": "/sound/bgm/B8 - outro.wav",
  "7-2": "/sound/bgm/B8 - outro.wav",
  "7-3": "/sound/bgm/B8 - outro.wav",
} as const;

export const soundPageMap: Record<
  string,
  {
    soundEffect?: SoundEffect;
    backgroundVolume?: number;
  }
> = {
  "0-8-2": {
    soundEffect: {
      sound: "/sound/effect/E2 - 2 Intro Watering Tree (No effects).wav",
      volume: 1,
    },
  },
  "0-8-4": {
    soundEffect: {
      sound: "/sound/effect/E3 - Intro ต้นไม้โต1.wav",
      volume: 1,
    },
  },
  "0-8-7": {
    soundEffect: {
      sound: "/sound/effect/E3 - Intro ต้นไม้โต1.wav",
      volume: 1,
      replay: true,
    },
  },
  "0-8-10": {
    soundEffect: {
      sound: "/sound/effect/E2 - 2 Intro Watering Tree (No effects).wav",
      volume: 1,
    },
  },
  "0-8-13": {
    soundEffect: {
      sound: "/sound/effect/E4 - Intro ต้นไม้โต2.wav",
      volume: 1,
    },
  },
  "0-8-16": {
    soundEffect: {
      sound: "/sound/effect/E4 - Intro ต้นไม้โต2.wav",
      volume: 1,
      replay: true,
    },
  },
  "0-8-19": {
    soundEffect: {
      sound: "/sound/effect/E2 - 2 Intro Watering Tree (No effects).wav",
      volume: 1,
    },
  },
  "0-8-21": {
    soundEffect: {
      sound: "/sound/effect/E5 - Intro ต้นไม้โต3.wav",
      volume: 1,
    },
  },
  "1-3-1": {
    soundEffect: {
      sound: "/sound/effect/E8 - Autumn เสียงเดิน.wav",
      volume: 1,
    },
    backgroundVolume: 0.1,
  },
  "1-3-2": {
    soundEffect: {
      sound: "/sound/effect/E8 - Autumn เสียงเดิน.wav",
      volume: 1,
      replay: true,
    },
    backgroundVolume: 0.1,
  },
  "1-4-5": {
    soundEffect: {
      sound: "/sound/effect/E9 - Autumn book flip.wav",
      volume: 1,
    },
  },
  "1-4-9": {
    soundEffect: {
      sound: "/sound/effect/E9 - Autumn book flip.wav",
      volume: 1,
    },
  },
  "2-2-4": {
    soundEffect: {
      sound: "/sound/effect/E10 - Winter Sparklex3.wav",
    },
  },
  "2-3-1": {
    soundEffect: {
      sound: "/sound/effect/E10 - Winter Sparkle.wav",
    },
  },
  "3-3-7": {
    soundEffect: {
      sound: "/sound/effect/E14 - ร่มตก.wav",
    },
  },
  "4-1-1": {
    soundEffect: {
      sound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
      volume: 1,
    },
  },
  "5-2-4": {
    soundEffect: {
      sound: "/sound/effect/E15 - Summer_TreeShaking.wav",
      volume: 0.1,
    },
  },
  "5-2-7": {
    soundEffect: {
      sound: "/sound/effect/E16 - Summer_FruitFall.wav",
      volume: 0.1,
    },
  },
} as const;

export const ambientPageMap: Record<string, AmbientTrack> = {
  "0-1": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-2": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-3-1": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-3-2": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-4-1": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-4-2": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-4-3": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-5": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
  "0-8-30": {
    sound: "/sound/effect/E6 - Wind.mp3",
    volume: 1,
  },
  "1-1-1": {
    sound: "/sound/effect/E6 - Wind.mp3",
    volume: 1,
  },
  "1-1-2": {
    sound: "/sound/effect/E6 - Wind.mp3",
    volume: 1,
  },
  "1-1-3": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-2-1": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-2-2": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-2-4": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-2-5": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-2-6": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-3-1": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-3-2": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-3-6": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-4-1": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-4-2": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-4-4": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-4-5": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-4-6": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-4-8": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "1-4-9": {
    sound: "/sound/effect/E6 - Wind.mp3",
    secondSound: "/sound/effect/E7 - ลม choice 2 (มีเสียงใบไม้เบาๆ).mp3",
    volume: 1,
  },
  "2-3-5": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-1": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-2": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-3": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-4": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-1-5": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-2-2": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-2-3": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "3-2-4": {
    sound: "/sound/effect/E12 - ฝนค่อยๆดัง.wav",
  },
  "3-2-6": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-2-7": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-2-10": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-2-11": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-2-12": {
    sound: "/sound/effect/E12 - ฝนค่อยๆดัง.wav",
  },
  "3-3-1": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-2": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-3": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-4": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-5": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-6": {
    sound: "/sound/effect/E13 - Scene1Rain&bell.wav",
    volume: 0.3,
  },
  "3-3-7": {
    sound: "/sound/effect/E11 - ฝนตกเบา.wav",
  },
  "4-1-1": {
    sound: "/sound/effect/E1 - 1 Intro Birds Wind.wav",
  },
} as const;
