import { useEffect } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { useStore } from "../../infrastructure/hooks/useStore"
import { TodoItem } from "./TodoItem";


export const TodoList = () => {
    const { useAppState } = useStore();
    const todos = useAppState(state => state.todos.list)
    useEffect(() => {
    }, [todos])

    if (!todos.length) {
        return null
    }

    return (
        <ScrollShadow
            className="w-3/12 h-3/6"
            hideScrollBar
            offset={100}
        >
            <div
                className="w-full h-full flex flex-col items-center justify-start gap-4 py-8"
            >
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                }
            </div>
        </ScrollShadow>
    )
}
