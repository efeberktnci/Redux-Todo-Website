import { ActionTypes } from "../reducers/actionTypes"

export const addTodo = (payload) => ({
    type: ActionTypes.ADD_TODO,
    payload,
})

export const updateTodo = (payload) => ({
    type: ActionTypes.UPDATE_TODO,
    payload,
})

export const removeTodo = (payload) => ({
    type: ActionTypes.REMOVE_TODO,
    payload,
})