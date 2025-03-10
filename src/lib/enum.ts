export enum Categories {
  Ambitious = "Ambitious",
  HeartAndHome = "Heart & Home",
  SelfLove = "Self Love",
  SoulfulImpact = "Soulful Impact",
}

export enum Category {
  Motivation = "Motivation",
  Obstacle = "Obstacle",
}

export enum Motivation {
  CareerWork = "Career/Work",
  Family = "Family",
  RelationshipFriends = "Relationship/Friends",
  SharingContributions = "Sharing/Contributions",
  SelfDevelopment = "Self-Development",
  FinanceMoney = "Finance/Money",
  Health = "Health",
  Spiritual = "Spiritual",
}

export enum Season {
  InspiringFlames = "Inspiring Flames",
  LifesCanvas = "Life’s Canvas",
  HeartAndHome = "Heart & Home",
  RibbonsAndPaperBoxes = "Ribbons and Paper Boxes",
  TrophiesAndTriumphs = "Trophies and Triumphs",
  ARefilledHeart = "A Refilled Heart",
}

export enum Chapter {
  Start = "start",
  Middle = "middle",
  End = "end",
}

export enum Obstacle {
  NotGoodEnough = "NotGoodEnough",
  NotPrioritize = "NotPrioritize",
  NotLoveMyself = "NotLoveMyself",
  FearNotAccepted = "FearNotAccepted",
  TimeManagement = "TimeManagement",
  LackConfidence = "LackConfidence",
  LackInspiration = "LackInspiration",
  OverDriven = "OverDriven",
  SocietyPressure = "SocietyPressure",
  OverwhelmedWorld = "OverwhelmedWorld",
}

export enum MarbleImg {
  Marble1 = "/icons/marble/marble1.webp",
  Marble2 = "/icons/marble/marble2.webp",
  Marble3 = "/icons/marble/marble3.webp",
  Marble4 = "/icons/marble/marble4.webp",
  Marble5 = "/icons/marble/marble5.webp",
  Marble6 = "/icons/marble/marble6.webp",
}

export const seasonImg = {
  [Season.InspiringFlames]: {
    img: ["/icons/seasons/bonfire.webp", "/icons/seasons/feather.webp"],
    w: ["w-[102.41px]", "w-[64.02px]"],
    h: ["h-[85px]", "h-[124.02px]"],
  },
  [Season.TrophiesAndTriumphs]: {
    img: ["/icons/seasons/trophies.webp", "/icons/seasons/confetti.webp"],
    w: ["w-[74.88px]", "w-[78px]"],
    h: ["h-[69px]", "h-[92px]"],
  },
  [Season.HeartAndHome]: {
    img: ["/icons/seasons/home.webp", "/icons/seasons/fireflies.webp"],
    w: ["w-[78.15px]", "w-[85.38px]"],
    h: ["h-[82px]", "h-[76px]"],
  },
  [Season.LifesCanvas]: {
    img: ["/icons/seasons/canvas.webp", "/icons/seasons/origami.webp"],
    w: ["w-[146.09px]", "w-[81.09px]"],
    h: ["h-[63px]", "h-[58px]"],
  },
  [Season.ARefilledHeart]: {
    img: ["/icons/seasons/picnic.webp", "/icons/seasons/flowerpetal.webp"],
    w: ["w-[140px]", "w-[75.42px]"],
    h: ["h-[70px]", "h-[65px]"],
  },
  [Season.RibbonsAndPaperBoxes]: {
    img: ["/icons/seasons/gift.webp", "/icons/seasons/foam.webp"],
    w: ["w-[81.49px]", "w-[85.97px]"],
    h: ["h-[76px]", "h-[72px]"],
  },
};

export type Result = {
  season: string;
  chapter: string;
};

export type UserData = {
  name: string; // User Name
  feelings: number; // Pre/Post Feelings (1-10)
  result: Result; // Result ที่ได้
  feedBack: string; // Feedback Website
  feelingsAfter: number; // Post Feelings (1-10)
};
