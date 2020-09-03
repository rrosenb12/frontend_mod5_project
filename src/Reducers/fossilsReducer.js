let defaultState = {fossilsArray: [], usersFossils: []}

export function fossilsReducer(state = defaultState, action){
    switch (action.type) {
        case 'FETCH_FOSSILS':
            return {
                ...state, fossilsArray: action.payload
            }
        case 'ADD_FOSSIL':
            return {
                ...state, usersFossils: [...state.usersFossils, action.payload]
            }
        default:
            return state;
    }
}