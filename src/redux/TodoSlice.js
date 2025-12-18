import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: { value: [] },
    reducers: {
        onAdd: (state, action) => {
            state.value.push(action.payload)
        },
        onDelete: (state, action) => {
            if(state.value.length != 0){
                state.value = state.value.filter((todo) => todo.id != action.payload)
            }
        },
        completed: (state, action) => {
            state.value.map((todo) => {
                if(todo.id === action.payload){
                    todo.isCompleted = !todo.isCompleted
                }
            })
        },
        important: (state, action) => {
            state.value.map((todo) => {
                if(todo.id === action.payload){
                    todo.isImportant = !todo.isImportant
                }
            })
        },
    }
})

export const { onAdd, onDelete, completed, important } = todoSlice.actions

export const todoReducer = todoSlice.reducer