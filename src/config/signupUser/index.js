import firebase from '../firebaseConfig';

const signupUser = ({email, password}) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
} 

export default signupUser;