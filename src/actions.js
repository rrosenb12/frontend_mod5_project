export const fetchUser = (user) => {
    return{
        type: 'SET_USER',
        payload: user
    }
}