import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyBA2WaeTY29iA_tzAgZsbdmkKtQmtlVR2U",
  authDomain: "soul-seasons.firebaseapp.com",
  projectId: "soul-seasons",
  storageBucket: "soul-seasons.firebasestorage.app",
  messagingSenderId: "163569464363",
  appId: "1:163569464363:web:5d77ef8fb113fa96de266e",
  measurementId: "G-R2XJY603HD"
};
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
