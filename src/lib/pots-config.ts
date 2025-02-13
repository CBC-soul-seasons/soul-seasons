
import potOrange from '../img/icons/pot/potOrange.png';
import potPurple from '../img/icons/pot/potPurple.png';
import potGreen from '../img/icons/pot/potGreen.png';
import potRed from '../img/icons/pot/potRed.png';
import potPink from '../img/icons/pot/potPink.png';
import potYellow from '../img/icons/pot/potYellow.png';
import potBlue from '../img/icons/pot/potBlue.png';
import potIndigo from '../img/icons/pot/potIndigo.png';

// Glow pots
import potIndigoGlow from '../img/icons/potGlow/potIndigoGlow.png';
import potPurpleGlow from '../img/icons/potGlow/potPurpleGlow.png';
import potOrangeGlow from '../img/icons/potGlow/potOrangeGlow.png';
import potRedGlow from '../img/icons/potGlow/potRedGlow.png';
import potGreenGlow from '../img/icons/potGlow/potGreenGlow.png';
import potYellowGlow from '../img/icons/potGlow/potYellowGlow.png';
import potBlueGlow from '../img/icons/potGlow/potBlueGlow.png';
import potPinkGlow from '../img/icons/potGlow/potPinkGlow.png';

// 🏆 Function to dynamically get pots with translated labels
export const getPotImages = (t: any) => {
    return {
        potImagesleft: [
            { src: potPink.src, label: t("pots.career_work"), glow: potPinkGlow.src },
            { src: potIndigo.src, label: t("pots.family"), glow: potIndigoGlow.src },
            { src: potRed.src, label: t("pots.relationship_friends"), glow: potRedGlow.src },
            { src: potOrange.src, label: t("pots.sharing_contributions"), glow: potOrangeGlow.src },
        ],
        potImagesright: [
            { src: potBlue.src, label: t("pots.self_development"), glow: potBlueGlow.src },
            { src: potYellow.src, label: t("pots.finance_money"), glow: potYellowGlow.src },
            { src: potGreen.src, label: t("pots.health"), glow: potGreenGlow.src },
            { src: potPurple.src, label: t("pots.spiritual"), glow: potPurpleGlow.src },
        ],
    };
};
