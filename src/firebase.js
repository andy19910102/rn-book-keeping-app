import firebase from 'firebase'


const firebaseConfig = {
    // TODO: 加入Firebase專案設定
};


if (!firebase.apps.length) {
    // 初始化Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase