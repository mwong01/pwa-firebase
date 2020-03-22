require('dotenv').config();

export const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.apiKey,
  databaseURL: "https://pwa-firebase-f5036.firebaseio.com",
  projectId: "pwa-firebase-f5036",
  storageBucket: "pwa-firebase-f5036.appspot.com",
  messagingSenderId: "372223683088",
  appId: "1:372223683088:web:c7289d16b22816685bb895"
};