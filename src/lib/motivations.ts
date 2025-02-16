export enum MotivationCategories {
    Ambitious = "Ambitious",
    HeartAndHome = "Heart & Home",
    SelfLove = "Self Love",
    SoulfulImpact = "Soulful Impact",
}
export const motivationMap:  {[key: string]: MotivationCategories} = {
    "Career/Work": MotivationCategories.Ambitious ,
    "Family": MotivationCategories.HeartAndHome,
    "Relationship/Friends": MotivationCategories.HeartAndHome,
    "Sharing/Contributions": MotivationCategories.SoulfulImpact,
    "Self-Development": MotivationCategories.SelfLove,
    "Finance/Money": MotivationCategories.Ambitious ,
    "Health": MotivationCategories.SelfLove,
    "Spiritual": MotivationCategories.SoulfulImpact,
    
    "อาชีพ/การงาน": MotivationCategories.Ambitious ,
    "ครอบครัว": MotivationCategories.HeartAndHome,
    "ความสัมพันธ์/เพื่อนฝูง": MotivationCategories.HeartAndHome,
    "การแบ่งปัน/ช่วยเหลือสังคม": MotivationCategories.SoulfulImpact,
    "การพัฒนาตัวเอง": MotivationCategories.SelfLove,
    "การเงิน/รายได้": MotivationCategories.Ambitious ,
    "สุขภาพ": MotivationCategories.SelfLove,
    "จิตวิญญาณ/ศาสนา": MotivationCategories.SoulfulImpact
};

