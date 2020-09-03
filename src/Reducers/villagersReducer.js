let defaultState = {villagersArray: [], usersVillagers: []}

export function villagersReducer(state = defaultState, action){
    switch (action.type) {
        case 'FETCH_VILLAGERS':
            return {
                ...state, villagersArray: action.payload
            }
        case 'ADD_VILLAGER':
            console.log("success:", action.payload)
            return {
                ...state, usersVillagers: [...state.usersVillagers, action.payload]
            }
        default:
            return state;
    }
}