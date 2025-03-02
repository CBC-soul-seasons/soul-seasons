import { UserData } from "@/lib/enum";
import { db } from "@/lib/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const userData: UserData = await req.json();

    if (!userData.name || userData.feelings === undefined || !userData.result) {
      return NextResponse.json(
        { success: false, message: "Invalid Input" },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, "soul-users"), {
      ...userData,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({
      success: true,
      message: "User data added successfully",
      id: docRef.id,
    });
  } catch (error) {
    console.error("Error adding user data:", error);
    return NextResponse.json(
      { success: false, message: "Error saving user data" },
      { status: 500 }
    );
  }
};
