import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from './types/Todo'

export interface TodoState {
    list: Todo[]
}

const initialState: TodoState = {
    list: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.list.push(action.payload)
        }
    }
})

export const { addTodo } = todoSlice.actions
export const selectTodos = (state: { todos: TodoState }) => state.todos.list
export const todosReducer = todoSlice.reducer
