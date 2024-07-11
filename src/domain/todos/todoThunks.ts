import axios from 'axios'
import {AppDispatch} from "../../infrastructure/store/store.ts";
import {Todo} from "./types/Todo.ts";
import {addTodo} from "./todoSlice.ts";


export const startNewTodo = (todo: Todo) => {
    try {
        return async (dispatch: AppDispatch) => {
            console.log('about to send todo to server', todo)
            const response = await axios.post('http://localhost:3000/todos', todo)
            if (response.status === 201) {
                dispatch(addTodo({
                    id: response.data.id,
                    text: response.data.text,
                    done: response.data.done
                }))
                dispatch(addTodo(todo));
            } else {
                throw new Error('Failed to add todo')
            }
        }
    } catch (error) {
        console.error(error)
    }
}