let defaultState = {bugsArray: [], usersBugs: []}

export function bugsReducer(state = defaultState, action){
    switch (action.type) {
        case 'FETCH_BUGS':
            return {
                ...state, bugsArray: action.payload
            }
        case 'ADD_BUG':
            return {
                ...state, usersBugs: [...state.usersBugs, action.payload]
            }
        case 'DELETE_BUG':
            return {
                ...state, usersBugs: [...state.usersBugs.filter(bug => bug.id !== action.payload.id)]
            }
        default:
            return state;
    }
}