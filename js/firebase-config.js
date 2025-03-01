const firebaseConfig = {
    apiKey: "Сіздің_API_кілт",
    authDomain: "my-education-site.firebaseapp.com",
    projectId: "my-education-site",
    storageBucket: "my-education-site.appspot.com",
    messagingSenderId: "Сіздің_Sender_ID",
    appId: "Сіздің_App_ID"
};

// Firebase бастау
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
