import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase-config";
import { UserData } from "@/lib/enum";

export const addUser = async (userData: UserData) => {
  try {
    const docRef = await addDoc(collection(db, "soul-users"), {
      ...userData,
      createdAt: serverTimestamp(), // Add timestamp here
    });
    console.log("User added successfully! with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};
