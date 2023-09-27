import { initializeApp } from "firebase/app";
import { env } from "process";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.PROJUCT_BUCKET,
  messagingSenderId: env.SENDER_ID,
  appId: env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;