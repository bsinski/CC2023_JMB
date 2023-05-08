// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKR5xM3P4v-YriKG-R43_XKBe6sLumSVM",
  authDomain: "cc2023-a7edf.firebaseapp.com",
  projectId: "cc2023-a7edf",
  storageBucket: "cc2023-a7edf.appspot.com",
  messagingSenderId: "17913891214",
  appId: "1:17913891214:web:24a5b9ee6719d91d6ebcdf",
  measurementId: "G-M11VYQF6VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);
export { storage }