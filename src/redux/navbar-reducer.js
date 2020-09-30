let initialState = {
    friends: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Zabit" },
        { id: 3, name: "Khabib" }
    ]
}

const navbarReducer = (state = initialState, action) => {
    let newState = {...state};
    return newState;
}
export default navbarReducer;