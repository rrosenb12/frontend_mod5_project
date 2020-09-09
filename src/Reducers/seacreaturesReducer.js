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
        case 'DELETE_SEACREATURE':
            console.log(action.payload)
            return {
               ...state, usersSeacreatures: [...state.usersSeacreatures.filter(seacreature => seacreature.id !== action.payload.id)]
            }
        default:
            return state;
    }
}