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

export const fetchBugs = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/bugs')
          .then(response => response.json())
          .then(bugs => dispatch({ type: 'FETCH_BUGS', bugs }));
      };
}

export const fetchSeacreatures = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/sea_creatures')
          .then(response => response.json())
          .then(seacreatures => dispatch({ type: 'FETCH_SEACREATURES', seacreatures }));
      };
}

export const fetchFossils = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/fossils')
          .then(response => response.json())
          .then(fossils => dispatch({ type: 'FETCH_FOSSILS', fossils }));
      };
}

export const clickItem = (item) => {
    return {
        type: 'CLICK_ITEM',
        payload: item
    }
}

export const unClickItem = () => {
    return {
        type: 'UNCLICK_ITEM'
    }
}