<script lang="ts">
    import type { Todo } from "../store/todo-list";

    export let newTodo: Todo;
    export let onSubmit: (event: Event) => void;
</script>

<form class="root">
    <label class="label" for="title">Title</label>
    <input class="input-field" id="title" type="text" name="title" bind:value={newTodo.title} />
    <label class="label" for="title">Description</label>
    <input class="input-field" id="description" type="text" name="description" bind:value={newTodo.description} />
    <button class="submit-btn" type="submit" on:click={(e) => onSubmit(e)}>
        Create Task
    </button>
</form>

<style>
    .root {
        display: flex;
        flex-direction: column;
    }

    .label {
        align-self: flex-start;
    }
    
    .input-field {
        border-radius: 4px;
    }
</style>
