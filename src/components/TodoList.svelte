<script lang="ts">
    import type { Todo } from "../store/todo-list";
    import { TodoListStorage } from "../store/todo-list";
    import TodoForm from "./TodoForm.svelte";
    import TodoItem from "./TodoItem.svelte";
    import { v4 as uuid } from "uuid";

    let newTodo: Todo;
    clearNewTodo();

    function addTodo(event: Event): void {
        event.preventDefault();
        TodoListStorage.addTodo(newTodo);
        clearNewTodo();
    }

    function clearNewTodo(): void {
        newTodo = {
            id: uuid(),
            completed: false,
            title: "",
            description: "",
        };
    }

    function toggleTodo(todo: Todo): void {
        todo.completed = !todo.completed;
        TodoListStorage.updateTodo(todo);
    }

    function deleteTodo({ id }: Todo): void {
        TodoListStorage.removeTodoById(id);
    }
</script>

<div class="root">
    <TodoForm bind:newTodo={newTodo} onSubmit={(event) => addTodo(event)} />
    <div class="section-root">
        <p class="section-title">To Do</p>
        {#each $TodoListStorage as todo}
            {#if !todo.completed}
                <TodoItem todo={todo} onClickDone={() => toggleTodo(todo)} onClickDelete={() => deleteTodo(todo)}/>
            {/if}
        {/each}
    </div>
    <div class="section-root">
        <p class="section-title">Done</p>
        {#each $TodoListStorage as todo}
            {#if todo.completed}
                <TodoItem todo={todo} onClickDone={() => toggleTodo(todo)} onClickDelete={() => deleteTodo(todo)}/>
            {/if}
        {/each}
    </div>
</div>

<style>
    .root {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;
    }

    .section-root {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 24px;
    }

    .section-title {
        font-size: 24px;
    }
</style>
