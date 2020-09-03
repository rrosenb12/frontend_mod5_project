let defaultState = {seacreaturesArray: [], usersSeacreatures: []}

export function seacreaturesReducer(state = defaultState, action){
    switch (action.type) {
        case 'FETCH_SEACREATURES':
            return {
                ...state, seacreaturesArray: action.payload 
            }
        case 'ADD_SEACREATURE':
            return {
                ...state, usersSeacreatures: [...state.usersSeacreatures, action.payload]
            }
        default:
            return state;
    }
}