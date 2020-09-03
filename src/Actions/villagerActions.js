// let villagersArray = []

export const fetchVillagers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/villagers')
        .then(response => response.json())
        .then(villagers => {
            dispatch({ type: 'FETCH_VILLAGERS', payload: villagers })});
      };
}

export const fetchVillagersForUser = (user) => {
    fetch('http://localhost:3000/villagers')
    .then(response => response.json())
    .then(data => {
        // villagersArray = data
        fetchUserVillagers(user, data)
    })
}

export const fetchUserVillagers = (user, data) => {
    console.log("in fetch user villagers:", user)
        fetch('http://localhost:3000/user_villagers')
        .then(response => response.json())
        .then(userVillagers => {
            fetchVillagers()
            // console.log("in fetch:", user, userVillagers)
            let currentUserVillagers = userVillagers.filter(uV => uV.user_id === user.id)
            // console.log(currentUserVillagers)
            matchVillagers(currentUserVillagers, data)
            // currentUserVillagers.forEach(uV => matchVillagers(uV, data))
        }
    )
}

export const matchVillagers = (uV, data) => {
    console.log("in match villagers", uV)
    console.log(data)
    // let villager = data.find(villager => villager.id === uV.villager_id)
    // console.log("matched villager:", villager)
    // let displayVillagers = []
    let villagerIds = uV.map(villager => villager.villager_id)
    console.log("uv ids:", villagerIds)
    data.filter(villager => villagerIds.map(id => 
        {      
        // villager.id === id
        if (villager.id === id) {
            console.log("match:", villager)
            toTheReducer(villager)
            // return [...displayVillagers, villager]
        }
    }
    ))
    // console.log("display villagers:", villagers)
    // toTheReducer(villagers)
}

export const toTheReducer = (villager) => {
    console.log("in func to reducer:", villager)
    return {
        type: 'ADD_VILLAGER',
        payload: villager
    }
}

export const userVillagersState = (villagerObj) => {
    return {
        type: 'ADD_VILLAGER',
        payload: villagerObj
    }
}