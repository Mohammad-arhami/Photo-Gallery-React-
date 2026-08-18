// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDelA_1pxPZRcVDE6W9OOsKN_un9N1q6l0",
  authDomain: "photo-gallery-5f644.firebaseapp.com",
  projectId: "photo-gallery-5f644",
  storageBucket: "photo-gallery-5f644.firebasestorage.app",
  messagingSenderId: "700702560516",
  appId: "1:700702560516:web:d4b23ec5f07c96b81c4051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {db , storage};

