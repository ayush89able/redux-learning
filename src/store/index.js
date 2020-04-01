import { createStore, combineReducers } from 'redux';
import personReducer from '../reducers/personReducer';
import gameReducer from '../reducers/gameReducer';
import cakeAndIcecreamReducer from '../reducers/cakeAndIcecreamReducer';

const InitialState = {

}
const AllReducers = combineReducers({ game: gameReducer, person: personReducer, cakeAndIcecreamReducer: cakeAndIcecreamReducer });
const store = createStore(AllReducers, InitialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())
console.log(store.getState());

export default store; 