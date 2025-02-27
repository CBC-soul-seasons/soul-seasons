interface backgroundConfig {
  image: string | string[];
  imagePreload?: string[];
  stopMotionDuration?: number;
  redirectTo?: string;
  useBackgroundState?: boolean;
}

export const backgroundMapConfig: Record<string, backgroundConfig> = {
  "": {
    image: "/background/0.webp",
  },
  "0-1": {
    image: "/background/0.webp",
    imagePreload: ["/background/0-blur.jpg"],
  },
  "0-2": {
    image: "/background/0-blur.jpg",
    imagePreload: [],
  },
  "0-3-1": {
    image: "/background/0-blur.jgp",
    imagePreload: [],
  },
  "0-3-2": {
    image: "/background/0-blur.jpg",
    imagePreload: [],
  },
  "0-4-1": {
    image: "/background/0.webp",
    imagePreload: [],
  },
  "0-4-2": {
    image: "/background/0.webp",
    imagePreload: [],
  },
  "0-5": {
    image: "/background/0.webp",
    imagePreload: ["/background/0-7-1.png"],
  },
  "0-6": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-7-1": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-7-2": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-7-3": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-7-4": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-7-5": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-7-6": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-7-7": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-7-8": {
    image: "/background/0-7-1.png",
    imagePreload: [],
  },
  "0-8-1": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
  },
  "0-8-2": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
    redirectTo: "0-8-4",
    stopMotionDuration: 4000,
  },
  "0-8-4": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
    redirectTo: "0-8-7",
    stopMotionDuration: 6000,
  },
  "0-8-7": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
    stopMotionDuration: 6000,
    redirectTo: "0-8-9",
  },
  "0-8-9": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
  },
  "0-8-10": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
    stopMotionDuration: 6000,
    redirectTo: "0-8-13",
  },
  "0-8-13": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
    stopMotionDuration: 6000,
    redirectTo: "0-8-16",
  },
  "0-8-16": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
  },

  "0-8-19": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
    redirectTo: "0-8-21",
    stopMotionDuration: 4000,
  },
  "0-8-21": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
    stopMotionDuration: 6000,
    redirectTo: "0-8-25",
  },
  "0-8-25": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: [],
    stopMotionDuration: 4000,
    redirectTo: "0-8-28",
  },
  "0-8-28": {
    image: "/0-8/0-8-bg.webp",
    imagePreload: ["/0-8/0-8-29.png"],
    stopMotionDuration: 2000,
    redirectTo: "0-8-29",
  },
  "0-8-29": {
    image: "/0-8/0-8-29.png",
    imagePreload: ["/0-8/0-8-30.png"],
    stopMotionDuration: 2000,
    redirectTo: "0-8-30",
  },
  "0-8-30": {
    image: "/0-8/0-8-30.png",
    imagePreload: [],
    stopMotionDuration: 2000,
    redirectTo: "1-1-1",
  },
  "1-1-1": {
    image: "/0-8/0-8-30.png",
    imagePreload: [],
  },
  "1-1-2": {
    image: "/0-8/0-8-30.png",
    imagePreload: [],
  },
  "1-1-3": {
    image: "/background/1-1-3.png",
    imagePreload: [],
  },
  "1-2-1": {
    image: "/background/1-2.webp",
    imagePreload: [],
  },
  "1-2-2": {
    image: "/background/1-2.webp",
    imagePreload: [],
  },
  "1-2-3": {
    image: "/background/1-2.webp",
    imagePreload: [],
  },
  "1-2-4": {
    image: "/background/1-2.webp",
    imagePreload: [],
  },
  "1-2-5": {
    image: "/background/1-2.webp",
    imagePreload: [],
  },
  "1-2-6": {
    image: "/background/1-2.webp",
    imagePreload: ["/background/1-3-1.webp"],
  },
  "1-3-1": {
    image: "/background/1-3-1.webp",
    imagePreload: [
      "/background/1-3-2.webp",
      "/background/1-3-3.webp",
      "/background/1-3-4.webp",
      "/background/1-3-5.webp",
    ],
  },
  "1-3-2": {
    image: [
      "/background/1-3-2.webp",
      "/background/1-3-3.webp",
      "/background/1-3-4.webp",
      "/background/1-3-5.webp",
    ],
    stopMotionDuration: 1000,
    redirectTo: "1-3-6",
    imagePreload: ["/background/1-3-6.webp"],
  },
  "1-3-6": {
    image: "/background/1-3-6.webp",
    imagePreload: ["/background/1-4-1.webp"],
  },
  "1-4-1": {
    image: "/background/1-4-1.webp",
    imagePreload: ["/background/1-4-2.webp"],
  },
  "1-4-2": {
    image: "/background/1-4-2.webp",
    imagePreload: ["/background/1-4-4.webp"],
  },
  "1-4-4": {
    image: "/background/1-4-4.webp",
    imagePreload: ["/background/1-4-5.webp"],
  },
  "1-4-5": {
    image: "/background/1-4-5.webp",
    imagePreload: ["/background/1-4-6.webp"],
  },
  "1-4-6": {
    image: "/background/1-4-6.webp",
    imagePreload: ["/background/1-4-8.webp"],
  },
  "1-4-8": {
    image: "/background/1-4-8.webp",
    imagePreload: [
      "/background/1-4-9.webp",
      "/background/1-4-10.webp",
      "/background/1-4-11.webp",
      "/background/1-4-12.webp",
      "/background/1-4-13.webp",
      "/background/1-4-14.webp",
      "/background/1-4-15.webp",
    ],
  },
  "1-4-9": {
    image: [
      "/background/1-4-9.webp",
      "/background/1-4-10.webp",
      "/background/1-4-11.webp",
      "/background/1-4-12.webp",
      "/background/1-4-13.webp",
      "/background/1-4-14.webp",
      "/background/1-4-15.webp",
    ],
    stopMotionDuration: 1000,
    redirectTo: "2-1-1",
    imagePreload: ["/background/2-1.png"],
  },
  "2-1-1": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-2": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-3": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-4": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-5": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-6": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-7": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-8": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-9": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-1-10": {
    image: "/background/2-1.png",
    imagePreload: [],
  },
  "2-2-1": {
    image: [
      "/background/2-2-1-db.png",
      "/background/2-2-1-blur.png",
      "/background/2-2-1.png",
    ],
    stopMotionDuration: 2000,
    redirectTo: "2-2-2",
    imagePreload: ["/background/2-2-2.png"],
  },
  "2-2-2": {
    image: "/background/2-2-2.png",
    stopMotionDuration: 1000,
    imagePreload: ["/background/2-2-4.webp"],
  },
  "2-2-4": {
    image: "/background/2-2-4.webp",
    imagePreload: ["/background/2-3-1.png"],
  },
  "2-3-1": {
    image: "/background/2-3-1.png",
    imagePreload: [],
  },
  "2-3-2": {
    image: "/background/2-3-1.png",
    imagePreload: [],
  },
  "2-3-3": {
    image: "/background/2-3-1.png",
    imagePreload: [
      "/background/2-3-5.png",
      "/background/2-3-6.png",
      "/background/2-3-7.png",
      "/background/2-3-8.png",
      "/background/2-3-9.png",
      "/background/2-3-10.png",
    ],
  },
  "2-3-5": {
    image: [
      "/background/2-3-5.png",
      "/background/2-3-6.png",
      "/background/2-3-7.png",
      "/background/2-3-8.png",
      "/background/2-3-9.png",
      "/background/2-3-10.png",
    ],
    stopMotionDuration: 1000,
    redirectTo: "3-1-1",
    imagePreload: [],
  },
  "2-7": {
    image: [
      "/background/2-1.webp",
      "/background/2-2.webp",
      "/background/2-3.webp",
    ],
    stopMotionDuration: 1200,
    redirectTo: "2-8",
    imagePreload: [],
  },
  "2-8": {
    image: "/background/2-6.webp",
    imagePreload: [
      "/background/2-9-1.webp",
      "/background/2-9-2.webp",
      "/background/2-9-3.webp",
      "/background/2-9-4.webp",
      "/background/2-9-5.webp",
      "/background/2-9-6.webp",
      "/background/2-9-7.webp",
      "/background/2-9-8.webp",
    ],
  },
  "2-9": {
    image: [
      "/background/2-9-1.webp",
      "/background/2-9-2.webp",
      "/background/2-9-3.webp",
      "/background/2-9-4.webp",
      "/background/2-9-5.webp",
      "/background/2-9-6.webp",
      "/background/2-9-7.webp",
      "/background/2-9-8.webp",
    ],
    stopMotionDuration: 1200,
    redirectTo: "2-10",
    imagePreload: [],
  },
  "3-1-1": {
    image: "/background/3-1.gif",
    imagePreload: [],
  },
  "3-1-2": {
    image: "/background/3-1.gif",
    imagePreload: [],
  },
  "3-1-3": {
    image: "/background/3-1.gif",
    imagePreload: [],
  },
  "3-1-4": {
    image: "/background/3-1.gif",
    imagePreload: [],
  },
  "3-1-5": {
    image: "/background/3-1.gif",
    imagePreload: [],
  },
  "3-2-2": {
    image: "/background/3-2-11_1.gif",
    imagePreload: [],
  },
  "3-2-3": {
    image: "/background/3-2-11_1.gif",
    imagePreload: [],
  },
  "3-2-4": {
    image: "/background/3-2-11_1.gif",
    useBackgroundState: true,
  },
  "3-2-6": {
    image: "/background/3-2-11_3.gif",
    stopMotionDuration: 2000,
    redirectTo: "3-2-7",
  },
  "3-2-7": {
    image: "/background/3-2-11_3.gif",
    imagePreload: [],
  },
  "3-2-10": {
    image: "/background/3-2-11_3.gif",
    imagePreload: [],
  },
  "3-2-11": {
    image: "/background/3-2-11_3.gif",
    imagePreload: ["/background/3-2-11_1.gif", "/background/3-2-11_2.gif"],
  },
  "3-2-12": {
    image: "/background/3-2-11_3.gif",
    useBackgroundState: true,
  },
  "3-3-1": {
    image: "/background/3-3-1.gif",
    imagePreload: [],
  },
  "3-3-2": {
    image: "/background/3-3-1.gif",
    imagePreload: [],
  },
  "3-3-3": {
    image: "/background/3-3-1.gif",
    imagePreload: [],
  },
  "3-3-4": {
    image: "/background/3-3-1.gif",
    imagePreload: [],
  },
  "3-3-5": {
    image: "/background/3-3-1.gif",
    imagePreload: [],
  },
  "3-3-6": {
    image: "/background/3-3-1.gif",
    imagePreload: [
      "/background/3-3-7.webp",
      "/background/3-3-8.webp",
      "/background/3-3-9.webp",
      "/background/3-3-10.webp",
      "/background/3-3-11.webp",
      "/background/3-3-12.webp",
      "/background/3-3-13.webp",
      "/background/3-3-14.webp",
    ],
  },
  "3-3-7": {
    image: [
      "/background/3-3-7.webp",
      "/background/3-3-8.webp",
      "/background/3-3-9.webp",
      "/background/3-3-10.webp",
      "/background/3-3-11.webp",
      "/background/3-3-12.webp",
      "/background/3-3-13.webp",
      "/background/3-3-14.webp",
    ],
    stopMotionDuration: 1200,
    redirectTo: "4-1-1",
    imagePreload: [
      "/background/4-1-1.webp",
      "/background/4-1-2.webp",
      "/background/4-1-3.webp",
      "/background/4-1-4.gif",
    ],
  },
  "4-1-1": {
    image: [
      "/background/4-1-1.webp",
      "/background/4-1-2.webp",
      "/background/4-1-3.webp",
      "/background/4-1-4.gif",
    ],
    stopMotionDuration: 1000,
    redirectTo: "4-1-4",
    imagePreload: [],
  },

  "4-1-4": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-5": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-6": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-7": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-8": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-9": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-10": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-11": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-12": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-13": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-14": {
    image: "/background/4-1-4.gif",
    imagePreload: [],
  },
  "4-1-15": {
    image: "/background/4-1-4.gif",
    imagePreload: [
      "/background/4-1-17.webp",
      "/background/4-1-18.webp",
      "/background/4-1-19.webp",
      "/background/4-1-20.webp",
      "/background/4-1-21.webp",
    ],
  },
  "4-1-16": {
    image: [
      "/background/4-1-4.gif",
      "/background/4-1-17.webp",
      "/background/4-1-18.webp",
      "/background/4-1-19.webp",
      "/background/4-1-20.webp",
      "/background/4-1-21.webp",
    ],
    stopMotionDuration: 1000,
    redirectTo: "5-1-1",
    imagePreload: ["/background/5-1-1.png"],
  },
  "5-1-1": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-2": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-3": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-4": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-5": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-6": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-7": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-8": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-9": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-10": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-11": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-12": {
    image: "/background/5-1-1.png",
    imagePreload: [],
  },
  "5-1-13": {
    image: "/background/5-1-1.png",
    imagePreload: ["/background/5-2-1.webp"],
  },
  "5-2-1": {
    image: "/background/5-2-1.webp",
    imagePreload: [],
  },
  "5-2-2": {
    image: "/background/5-2-1.webp",
    imagePreload: [],
  },
  "5-2-3": {
    image: "/background/5-2-1.webp",
    imagePreload: [],
  },
  "5-2-4": {
    image: "/background/5-2-1.webp",
    imagePreload: [],
  },
  "5-2-5": {
    image: "/background/5-2-1.webp",
    imagePreload: [],
  },
  "5-2-6": {
    image: "/background/5-2-1.webp",
    imagePreload: [],
  },
  "5-2-7": {
    image: "/background/5-2-1.webp",
    imagePreload: ["/background/6-1-1.png"],
  },
  "6-1-1": {
    image: "/background/6-1-1.png",
    imagePreload: [
      "/background/6-1-1.png",
      "/background/6-1-2.png",
      "/background/6-1-3.png",
      "/background/6-1-4.png",
    ],
  },
  "6-1-2": {
    image: [
      "/background/6-1-1.png",
      "/background/6-1-2.png",
      "/background/6-1-3.png",
      "/background/6-1-4.png",
    ],
    stopMotionDuration: 1200,
    redirectTo: "6-2-1",
    imagePreload: ["/background/6-2-1.png"],
  },
  "6-2-1": {
    image: "/background/6-2-1.png",
    imagePreload: ["/background/6-2-4.png"],
  },
  "6-2-4": {
    image: "/background/6-2-4.png",
    imagePreload: [],
  },
  "6-2-5": {
    image: "/background/6-2-4.png",
    imagePreload: [],
  },
  "6-2-6": {
    image: "/background/6-2-4.png",
    imagePreload: ["/img/6-3-1.webp"],
  },
  "6-3-1": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-2": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-3": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-4": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-5": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-6": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-7": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-8": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-9": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-10": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "6-3-11": {
    image: "/img/6-3-1.webp",
    imagePreload: [],
  },
  "7-1-1": {
    image: "/background/7-1-1.png",
    imagePreload: ["/background/7-1-2.png"],
  },
  "7-1-2": {
    image: ["/background/7-1-2.png", "/background/7-1-3.png"],
    stopMotionDuration: 1000,
    imagePreload: ["/background/7-1-2.png"],
  },
  "7-1-4": {
    image: ["/background/7-1-2.png", "/background/7-1-3.png"],
    stopMotionDuration: 1000,
    imagePreload: [],
  },
  "7-1-6": {
    image: "/background/7-2-open.png",
    imagePreload: [],
  },
  "7-1-7-1": {
    image: "/background/7-2.webp",
    imagePreload: [],
  },
  "7-1-7-2": {
    image: "/background/7-2.webp",
    imagePreload: [],
  },
  "7-1-7-3": {
    image: "/background/7-2.webp",
    imagePreload: [],
  },
  "7-2": {
    image: "/background/7-2.webp",
    imagePreload: [],
  },
  "7-3-1": {
    image: "/background/7-3-1.webp",
    imagePreload: [],
  },
  "7-3-2": {
    image: "/background/7-3-1.webp",
    imagePreload: [],
  },
  "7-3-3": {
    image: "/background/7-3-1.webp",
    imagePreload: [],
  },
} as const;
