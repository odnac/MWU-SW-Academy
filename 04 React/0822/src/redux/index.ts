import { applyMiddleware, combineReducers, createStore } from "redux";
import { tasks } from "./tasks";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
// import storage from "redux-persist/lib/storage"; // localStorage
import session from "redux-persist/lib/storage/session"; // sessionStorage
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage: session,
    whitelist: ['tasks'],
}

const combinedReducer = combineReducers({ tasks })

const rootReducer = persistReducer(persistConfig, combinedReducer)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export const persistor = persistStore(store as any)

export type RootState = ReturnType<typeof rootReducer>

// redux-logger
// 상태가 변경될 때 connsole에 로그를 찍어주는 middleware 라이브러리

// redux-devtools-extension

// redux-persist
// 상태가 localStorage나 sessionStorage를 통해 남아 있을 수 있도록 도와주는 middleware 라이브러리