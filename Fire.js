import firebase, { initializeApp } from 'firebase';
import '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBljkb4fTLP48KdmRwhuuNhi2izeGdabaU",
    authDomain: "todoapp-25d03.firebaseapp.com",
    databaseURL: "https://todoapp-25d03.firebaseio.com",
    projectId: "todoapp-25d03",
    storageBucket: "todoapp-25d03.appspot.com",
    messagingSenderId: "493840083323",
    appId: "1:493840083323:web:ce45c57403b21910cb75de"
};

class Fire{
    constructor(callback){
        this.init(callback);
    }

    init(callback){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if(user){
                callback(null,user)
            }else{
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error);
                });
            }
        });
    }
    getLists(callback){
        let ref = firebase.firestore().collection("users").doc(this.userId).collection("lists");

        this.unsubscribe = ref.onSnapshot(snapshot =>{
            lists = [];

            snapshot.forEach(doc =>{
                lists.push({id: doc.id, ...doc.data()});
            });

            callback(lists);
        });
    }
    get userId(){
        return firebase.auth().currentUser.uid;
    }
}

export default Fire;