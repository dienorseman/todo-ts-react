import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import { Todo } from "./types/Todo";

export const TodoItem = ({ todo }: { todo: Todo }) => {
    const [checked, setChecked] = useState(todo.done);
    return (
        <div className={`w-full min-h-14 flex items-center justify-between border rounded-3xl ${checked ? 'bg-gray-200' : ''}`}>
            <p className={`ml-4 ${checked ? 'line-through' : ''}`}>{todo.text}</p>
            <Checkbox
                className="mr-1"
                checked={todo.done}
                onChange={() => setChecked(!checked)}
            />
        </div>
    )
}
