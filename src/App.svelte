<script lang="ts">
    import TodoItems from "./components/TodoList.svelte";
</script>

<main>
    <h1>Small Todo</h1>
    <TodoItems />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>