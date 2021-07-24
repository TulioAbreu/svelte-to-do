<script lang="ts">
    import type { Todo } from "../store/todo-list";

    export let todo: Todo;
    export let onClickDone: () => void;
    export let onClickDelete: () => void;

    const todoText = todo.completed ? todo.title : `${todo.title}: ${todo.description}`;
</script>

<div class="task-root">
    <input class="task-btn" type="checkbox" on:click={onClickDone} checked={todo.completed} />
    <p class="task-title" class:completed-text="{todo.completed}">
        {todoText}
    </p>
    <button class="task-delete" on:click={onClickDelete}>
        ❌
    </button>
</div>

<style>
    .task-root {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }

    .task-btn {
        margin: 0px;
        width: 16px;
        height: 16px;
        margin-right: 16px;
    }

    .completed-text {
        text-decoration: line-through;
    }

    .task-title {
        margin: 0;
        margin-right: 16px;
    }

    .task-delete {
        padding: 0;
        margin: 0;
        border: none;
        background: transparent;
        cursor: pointer;
    }
</style>