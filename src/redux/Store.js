import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./TodoSlice";
import { loadState } from "../utility/LocalStorage";
import { localStorageMiddleware } from "../utility/LocalStorageMiddleware";

const persistedState = loadState("todos")

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    preloadedState: {
        todos: { value: persistedState || [] }
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)

})

export default store