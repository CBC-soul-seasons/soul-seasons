import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';

type UserData = {   
     name: string;         // User Name
     feelings: number;       // Pre/Post Feelings (1-10)
     result: string;        // Result ที่ได้
     feedBack: string       // Feedback Website
}

export const addUser = async (userData:UserData) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), userData);
    console.log('Document written with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding document:', error);
  }
};