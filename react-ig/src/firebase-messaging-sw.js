importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyBI9AkVux66l7ae_aPun1bxRzGE9YZyEQo",
    authDomain: "pwa-instagram-g3.firebaseapp.com",
    databaseURL: "https://pwa-instagram-g3.firebaseio.com",
    projectId: "pwa-instagram-g3",
    storageBucket: "pwa-instagram-g3.appspot.com",
    messagingSenderId: "455451894461"
  };
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Instagram-ish';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});