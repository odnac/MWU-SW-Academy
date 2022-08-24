import { combineReducers } from "redux";
import { tasks } from "./tasks";
import logger from 'redux-logger'
import session from "redux-persist/lib/storage/session"; // sessionStorage
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage: session,
    whitelist: ['tasks'],
}

const combinedReducer = combineReducers({ tasks: tasks.reducer })

const rootReducer = persistReducer(persistConfig, combinedReducer)

//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export const store = configureStore({ reducer: rootReducer, middleware: [logger], devTools: true })

export const persistor = persistStore(store as any)

export type RootState = ReturnType<typeof store.getState>

// redux-logger
// 상태가 변경될 때 connsole에 로그를 찍어주는 middleware 라이브러리

// redux-devtools-extension

// redux-persist
// 상태가 localStorage나 sessionStorage를 통해 남아 있을 수 있도록 도와주는 middleware 라이브러리