import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import reducer from './reducer';


const store = () => {
    const rootReducer = combineReducers({
        main: reducer
    });

    return createStore(rootReducer, applyMiddleware(thunk));
}

export default store;