export const fetchVillagers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/villagers')
          .then(response => response.json())
          .then(villagers => dispatch({ type: 'FETCH_VILLAGERS', payload: villagers }));
      };
}

export const userVillagersState = (villagerObj) => {
    return {
        type: 'ADD_VILLAGER',
        payload: villagerObj
    }
}