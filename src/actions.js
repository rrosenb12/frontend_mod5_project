export const fetchUser = (user) => {
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const fetchVillagers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/villagers')
          .then(response => response.json())
          .then(villagers => dispatch({ type: 'FETCH_VILLAGERS', villagers }));
      };
}

export const fetchFish = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/fish')
          .then(response => response.json())
          .then(fish => dispatch({ type: 'FETCH_FISH', fish }));
      };
}