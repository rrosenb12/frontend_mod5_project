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