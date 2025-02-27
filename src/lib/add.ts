import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import { UserData } from '@/lib/enum';


export const addUser = async (userData:UserData) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), userData);
    console.log('Document written with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding document:', error);
  }
};