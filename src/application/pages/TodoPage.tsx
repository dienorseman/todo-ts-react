import {TodoForm} from "../../domain/todos/TodoForm.tsx";
import {TodoList} from "../../domain/todos/TodoList.tsx";

export const TodoPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
                <TodoForm />
                <TodoList />
        </div>
    )
}
