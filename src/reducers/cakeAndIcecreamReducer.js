const initialState = {
    numberOfCakes: 10,
    numberOfIcecrems: 20
}
const cakeAndIcecreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        case 'BUY_ICECREAM': return {
            ...state,
            numberOfIcecrems: state.numberOfIcecrems - 1
        }
        default: return state;
    }
}
export default cakeAndIcecreamReducer