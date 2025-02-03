import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { environment } from "./environments/environment";

// Inicializar Firebase antes que Angular
const firebaseApp = initializeApp(environment.firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firestoreDB = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);

export { firebaseApp };
