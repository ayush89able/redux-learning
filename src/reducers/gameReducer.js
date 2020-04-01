const initialState = {
    name: 'Football'
}

const gameReducer = (state = initialState, { type, payload }) => {
    if (type === 'UPDATE_GAME') {
        return { ...state, name: payload }
    }
    return state;
}

export default gameReducer;