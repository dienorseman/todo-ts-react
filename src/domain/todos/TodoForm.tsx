import { Button } from "@nextui-org/react"
import { useStore } from "../../infrastructure/hooks/useStore";
import { Todo } from "./types/Todo";
import { TextInput } from "../../ui/inputs/TextInput";
import { Formik, FormikValues } from "formik";
import {startNewTodo} from "./todoThunks.ts";

export const TodoForm = () => {
    const { useAppDispatch, useAppState } = useStore();
    const todos = useAppState(state => state.todos.list);
    const dispatch = useAppDispatch();

    const handleFormSubmit = (values: FormikValues, { setSubmitting }: any) => {
        const newTodo: Todo = {
            id: Math.random().toString(36),
            text: values.todo,
            done: false
        }
        dispatch(startNewTodo(newTodo))
        setSubmitting(false)
        values.todo = ''
    }

    return (
        <Formik
            initialValues={{ todo: '' }}
            onSubmit={handleFormSubmit}
            validate={values => {
                const errors: Record<string, string> = {};
                if (!values.todo) {
                    console.log('empty')
                    errors.todo = 'Task cannot be empty';
                }
                if (values.todo.length > 50) {
                    errors.todo = 'Task cannot be longer than 50 characters';
                }
                if (todos.some(todo => todo.text === values.todo)) {
                    errors.todo = 'Task already exists';
                }
                return errors;
            }}
        >
            {({ handleChange, handleSubmit, errors, values, isSubmitting, touched }) => (
                <form className="flex items-start justify-between h-20 w-3/12 xs:bg-red-500" 
                    onSubmit={handleSubmit}>
                    <TextInput
                        field="todo"
                        placeholder="new task"
                        value={values.todo}
                        error={errors.todo && touched.todo ? errors.todo.toString() : ''}
                        handleChange={handleChange}
                    />
                    <Button
                        className="h-14 w-32"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Add
                    </Button>
                </form>
            )}
        </Formik>
    )
}
