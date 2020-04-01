const initialState = {
    name: 'Ayush'
}
const personrReducer = (state = initialState, { type, payload }) => {
    if (type === 'UPDATE_PERSON') {
        return { ...state, name: payload }
    }
    return state;
}

export default personrReducer;