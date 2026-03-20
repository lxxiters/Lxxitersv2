// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfhwLjj0hwr717n-cICNg2DPOrRUwCXGw",
  authDomain: "lx-xiters-web.firebaseapp.com",
  databaseURL: "https://lx-xiters-web-default-rtdb.firebaseio.com",
  projectId: "lx-xiters-web",
  storageBucket: "lx-xiters-web.firebasestorage.app",
  messagingSenderId: "296778295574",
  appId: "1:296778295574:web:f5f86f02bbc6a9b8f2c837",
  measurementId: "G-RF1W4KLXDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };