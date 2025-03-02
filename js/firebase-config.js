// Firebase SDK-ны жүктегенімізге көз жеткіземіз
if (typeof firebase === "undefined") {
    console.error("Firebase SDK дұрыс жүктелмеді!");
}

// Firebase конфигурациясы
const firebaseConfig = {
    apiKey: "СІЗДІҢ_API_KEY",
    authDomain: "my-education-site.firebaseapp.com",
    projectId: "my-education-site",
    storageBucket: "my-education-site.appspot.com",
    messagingSenderId: "СІЗДІҢ_SENDER_ID",
    appId: "СІЗДІҢ_APP_ID"
};

// Firebase-ды бастау
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
