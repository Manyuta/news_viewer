const initState = {
    posts: [
        {id: '1', title: 'Blab la bla'},
        {id: '2', title: 'lalala'},
        {id: '3', title: 'jajaja'},

    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;