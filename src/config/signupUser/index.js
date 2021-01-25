import firebase from '../firebaseConfig';

const signupUser = ({email, password}) => (dispatch) => {
    
    if([...password].length <= 5){
        return dispatch({type: 'toggleIsValidationError'})
    }
    

    dispatch({type: 'toggleIsLoading'});
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            dispatch({type: 'toggleIsLoading'});
            dispatch({type: 'changeIsSignup', value: 'success'});
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            dispatch({type: 'toggleIsLoading'});
            dispatch({type: 'changeIsSignup', value: 'failed'});
        });
} 

export default signupUser;