const initState = {
    isValidationError: false
}

const reducer = (state = initState, action) => {
    if(action.type === 'toggleIsValidationError') {
        return {
            ...state,
            isValidationError: !state.isValidationError
        }
    }
    return state;
}

export default reducer;