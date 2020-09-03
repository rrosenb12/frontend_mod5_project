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

export const fetchTags = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/tags')
        .then(response => response.json())
        .then(tags => dispatch({type: 'FETCH_TAGS', tags}))
    }
}

export const fetchPics = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/pictures')
        .then(response => response.json())
        .then(pictures => dispatch({type: 'FETCH_PICTURES', pictures}))
    }
}