// 🏆 Function to dynamically get pots with translated labels
export const getPotImages = (t: any) => {
    return {
        potImagesleft: [
            { src: "/icons/pot/potPink.png", label: t("pots.career_work"), glow: "/icons/potGlow/potPinkGlow.png" },
            { src: "/icons/pot/potIndigo.png", label: t("pots.family"), glow: "/icons/potGlow/potIndigoGlow.png"},
            { src: "/icons/pot/potRed.png", label: t("pots.relationship_friends"), glow: "/icons/potGlow/potRedGlow.png"},
            { src:"/icons/pot/potOrange.png", label: t("pots.sharing_contributions"), glow: "/icons/potGlow/potOrangeGlow.png" },
        ],
        potImagesright: [
            { src: "/icons/pot/potBlue.png", label: t("pots.self_development"), glow: "/icons/potGlow/potBlueGlow.png" },
            { src:"/icons/pot/potYellow.png", label: t("pots.finance_money"), glow: "/icons/potGlow/potYellowGlow.png" },
            { src: "/icons/pot/potGreen.png", label: t("pots.health"), glow: "/icons/potGlow/potGreenGlow.png" },
            { src: "/icons/pot/potPurple.png", label: t("pots.spiritual"), glow: "/icons/potGlow/potPurpleGlow.png" },
        ],
    };
};
