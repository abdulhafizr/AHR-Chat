const initState = {
    isValidationError: false,
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