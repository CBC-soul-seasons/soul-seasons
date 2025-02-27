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
  Marble1 = "/icons/marble/marble1.png",
  Marble2 = "/icons/marble/marble2.png",
  Marble3 = "/icons/marble/marble3.png",
  Marble4 = "/icons/marble/marble4.png",
  Marble5 = "/icons/marble/marble5.png",
  Marble6 = "/icons/marble/marble6.png"
}

export const seasonImg = {
 "Inspiring Flame": {"img": ['/icons/seasons/bonfire.png','/icons/seasons/feather.png'], "w": ["w-[102.41px]", "w-[64.02px]"],  "h": ["h-[85px]", "h-[124.02px]"] },
  "Trophies and Triumphs" : {"img":['/icons/seasons/trophies.png','/icons/seasons/confetti.png'], "w": ["w-[74.88px]", "w-[78px]"],"h": ["h-[69px]", "h-[92px]"]},
  "Heart & Home": {"img":['/icons/seasons/home.png','/icons/seasons/fireflies.png'],"w": ["w-[78.15px]", "w-[85.38px]"],"h": ["h-[82px]", "h-[76px]"]},
  "Life Canvas": {"img": ['/icons/seasons/canvas.png','/icons/seasons/origami.png'], "w": ["w-[146.09px]", "w-[81.09px]"],"h": ["h-[63px]", "h-[58px]"]},
  "A Refilled Heart": {"img":['/icons/seasons/picnic.png','/icons/seasons/flowerpetal.png'], "w": ["w-[140px]","w-[82.42px]"],"h": ["h-[70px]", "h-[71px]"]},
  "Ribbons and Paper Boxes":{ "img":['/icons/seasons/gift.png','/icons/seasons/foam.png'], "w": ["w-[81.49px]","w-[85.97px]"],"h": ["h-[76px]", "h-[72px]"] }
};


export type Result ={
  season: string;
  chapter: string;
}

export type UserData = {   
     name: string;         // User Name
     feelings: number;       // Pre/Post Feelings (1-10)
     result: Result;        // Result ที่ได้
     feedBack: string       // Feedback Website
}
