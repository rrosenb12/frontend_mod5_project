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
        case 'DELETE_FISH':
            return {
                ...state, usersFish: [...state.usersFish.filter(fish => fish.id !== action.payload.id)]
            }
        default:
            return state;
    }
}