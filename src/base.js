import Rebase from 're-base';
import firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCq9qemWf7ylSECFwlsveCkgw-KAWyGub0",
	authDomain: "catch-of-the-day-levi-zitting.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-levi-zitting.firebaseio.com",
	// projectId: "catch-of-the-day-levi-zitting",
	// storageBucket: "catch-of-the-day-levi-zitting.appspot.com",
	// messagingSenderId: "314137968520"
})

const base = Rebase.createClass(firebaseApp.database())

export default base;

