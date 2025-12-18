import { saveState } from "./LocalStorage"

export const localStorageMiddleware = storeApi => next => action => {
    const result = next(action)

    const state = storeApi.getState()

    saveState(state.todos.value, "todos")

    return result
}