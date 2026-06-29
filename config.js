
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfMaQ2N5b8KHdAjX11tXVc3kakNQkVhMg",
  authDomain: "base-de-dados-8060d.firebaseapp.com",
  databaseURL: "https://base-de-dados-8060d-default-rtdb.firebaseio.com",
  projectId: "base-de-dados-8060d",
  storageBucket: "base-de-dados-8060d.firebasestorage.app",
  messagingSenderId: "91146907783",
  appId: "1:91146907783:web:e7b28d3282152d19184822"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

