export enum ObstacleCategory {
    Ambitious = "Ambitious",
    HeartAndHome = "Heart & Home",
    SelfLove = "Self Love",
    SoulfulImpact = "Soulful Impact",
  }
  
  export const obstacleMapping: { [key: string]: ObstacleCategory | ObstacleCategory[] } = {
    "I'm not good enough.": ObstacleCategory.Ambitious,
    "I don't prioritize the important things close to me enough.": ObstacleCategory.HeartAndHome,
    "I don't love myself enough.": ObstacleCategory.SelfLove,
    "I fear not being accepted.": ObstacleCategory.SoulfulImpact,
    "I struggle with time management.": [ObstacleCategory.Ambitious, ObstacleCategory.HeartAndHome],
    "I lack self-confidence.": [ObstacleCategory.Ambitious, ObstacleCategory.SelfLove],
    "I haven't found enough inspiration.": [ObstacleCategory.Ambitious, ObstacleCategory.SoulfulImpact],
    "I'm too driven, to the point of losing sight of the journey.": [ObstacleCategory.HeartAndHome, ObstacleCategory.SelfLove],
    "I feel pressured by society.": [ObstacleCategory.HeartAndHome, ObstacleCategory.SoulfulImpact],
    "I feel overwhelmed by a world that moves too fast.": [ObstacleCategory.SelfLove, ObstacleCategory.SoulfulImpact],
    "ยังเก่งไม่พอ": ObstacleCategory.Ambitious,
    "ไม่ให้ความสำคัญกับสิ่งใกล้ตัวมากพอ": ObstacleCategory.HeartAndHome,
    "รักตัวเองไม่พอ": ObstacleCategory.SelfLove,
    "กลัวการไม่ถูกยอมรับ": ObstacleCategory.SoulfulImpact,
    "จัดสรรเวลาได้ไม่ดี": [ObstacleCategory.Ambitious, ObstacleCategory.HeartAndHome],
    "เชื่อมั่นในตัวเองไม่มากพอ": [ObstacleCategory.Ambitious, ObstacleCategory.SelfLove],
    "ยังไม่มีแรงบันดาลใจที่มากพอ": [ObstacleCategory.Ambitious, ObstacleCategory.SoulfulImpact],
    "มุ่งมั่นเกินไป จนหลงลืมระหว่างทาง": [ObstacleCategory.HeartAndHome, ObstacleCategory.SelfLove],
    "ความกดดันจากสังคม": [ObstacleCategory.HeartAndHome, ObstacleCategory.SoulfulImpact],
    "โลกที่หมุนเร็วเกินไป": [ObstacleCategory.SelfLove, ObstacleCategory.SoulfulImpact]
  };
  