import { Writable, writable } from "svelte/store";

export type Todo = {
    readonly id: string;
    title: string;
    completed: boolean;
    description?: string;
};

export interface TodoStorage extends Writable<Todo[]> {
    addTodo: (todo: Todo) => void;
    removeTodoById: (id: string) => void;
    updateTodo: (value: Todo) => void;
}

function createTodoStorage(): TodoStorage {
    const { subscribe, set, update } = writable<Todo[]>([{
        id: "taskId",
        title: "First Task",
        completed: false,
        description: "This is my first task",
    }]);

    return {
        subscribe,
        addTodo: (todo: Todo) => {
            update((todos: Todo[]): Todo[] => {
                return [...todos, todo];
            })
        },
        removeTodoById: (id: string) => {
            update((todos: Todo[]): Todo[] => {
                return todos.filter((todo: Todo) => todo.id !== id);
            });
        },
        updateTodo: (value: Todo) => {
            update((todos: Todo[]): Todo[] => {
                const index = todos.findIndex((todo: Todo) => todo.id === value.id);
                todos[index] = value;
                return todos;
            });
        },
        set,
        update,
    };
}

export const TodoListStorage = createTodoStorage();
