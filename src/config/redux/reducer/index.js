const initState = {
    isValidationError: false,
    user: 'Abdul'
}

const reducer = (state = initState, action) => {
    if(action.type === 'toggleIsValidationError') {
        return {
            ...state,
            isValidationError: !state.isValidationError
        }
    }
    if(action.type === 'changeUser') {
        return {
            ...state,
            user: 'Abdul Hafiz Ramadan'
        }
    }
    return state;
}

export default reducer;