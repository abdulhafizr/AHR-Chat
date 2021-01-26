import firebase from '../firebaseConfig';

const signinUser = ({ email, password }) => (dispatch) => {
    
    return new Promise((resolve, reject) => {
        if([...password].length <= 5) {
            return dispatch({type: 'toggleIsValidationError'});
        }
    
        dispatch({type: 'toggleIsLoading'})
    
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                const { uid, email, displayName, emailVerified, phoneNumber, photoURL } = user.user;
                dispatch({type: 'toggleIsLoading'});
                dispatch({type: 'changeIsSignin', value: 'success'});
                dispatch({type: 'initialUser', value: {
                    uid,
                    email,
                    displayName,
                    emailVerified,
                    phoneNumber,
                    photoURL
                }})
                dispatch({type: 'initAuthKey', value: uid});
                resolve(true);
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                dispatch({type: 'toggleIsLoading'});
                dispatch({type: 'changeIsSignin', value: 'failed'});
                dispatch({type: 'changeMessageValidationError', value: errorMessage});
                reject(false);
            });
    })
}

export default signinUser;