const initState = {
    isValidationError: false,
    messageValidationError: '',
    isLoading: false,
    isSignup: '',
    isSettingShow: false,
    isDetailShow: false,
    user: 'Abdul',
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
    if(action.type === 'changeUser'){
        return {
            ...state,
            user: 'Abdul Hafiz Ramadan'
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