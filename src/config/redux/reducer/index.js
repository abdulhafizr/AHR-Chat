const initState = {
    isValidationError: false,
    messageValidationError: '',
    isLoading: false,
    isSignup: '',
    isSignin: 'not-signin',
    authKey: '123',
    isSettingShow: false,
    isDetailShow: false,
    user: {uid: '123'},
}

const reducer = (state = initState, action) => {
    if(action.type === 'toggleIsValidationError'){
        return {
            ...state,
            isValidationError: !state.isValidationError
        }
    }
    if(action.type === 'changeMessageValidationError'){
        return {
            ...state,
            messageValidationError: action.value
        }
    }
    if(action.type === 'toggleIsLoading'){
        return {
            ...state,
            isLoading: !state.isLoading
        }
    }
    if(action.type === 'changeIsSignup'){
        return {
            ...state,
            isSignup: action.value
        }
    }
    if(action.type === 'changeIsSignin'){
        return {
            ...state,
            isSignin: action.value
        }
    }
    if(action.type === 'initAuthKey'){
        return {
            ...state,
            authKey: action.value
        }
    }
    if(action.type === 'initialUser'){
        return {
            ...state,
            user: action.value
        }
    }
    if(action.type === 'toggleIsSettingShow'){
        return {
            ...state,
            isSettingShow: !state.isSettingShow
        }
    }
    if(action.type === 'toggleIsDetailShow'){
        return{
            ...state,
            isDetailShow: !state.isDetailShow
        }
            
    }
    return state;
}

export default reducer;