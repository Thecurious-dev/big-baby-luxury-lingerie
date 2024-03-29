import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducers";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
// import rootSaga from "./root.sagas";



const sagaMiddleware = createSagaMiddleware();


const middlewares = [];

if (process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middlewares));

// sagaMiddleware.run(rootSaga)
const persistor = persistStore(store);

const exportedObject ={
    store,
    persistor
}

export default exportedObject;