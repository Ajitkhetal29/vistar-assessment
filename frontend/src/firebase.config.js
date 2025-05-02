import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbIwTeP-m1QIGak8EJf8ScpK1MXgBkd2U",
  authDomain: "test-app-15d07.firebaseapp.com",
  projectId: "test-app-15d07",
  storageBucket: "test-app-15d07.firebasestorage.app",
  messagingSenderId: "966252856226",
  appId: "1:966252856226:web:171b7380faba3c59ffe8fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
