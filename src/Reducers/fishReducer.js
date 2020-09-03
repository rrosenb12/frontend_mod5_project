let defaultState = {fishArray: [], usersFish: []}

export function fishReducer(state = defaultState, action){
    switch (action.type) {
        case 'FETCH_FISH':
            return {
                ...state, fishArray: action.payload
            }
        case 'ADD_FISH':
            return {
                ...state, usersFish: [...state.usersFish, action.payload]
            }
        default:
            return state;
    }
}