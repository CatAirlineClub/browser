<script lang="ts">
    import {ClickableView} from '../logic/logic'
	export let view : {view: ClickableView[]};
    $: folder = view.view;
    function clickAndUpdate(item: ClickableView) {
        item.onClick();
        view = view;
    }
</script>


<ol>
    {#each folder as item}
        <li on:click={() => {clickAndUpdate(item); }}>
            <span>{item.name}</span>
            {#if item.children.length}
            <ol>
                {#each item.children as view}
                    <svelte:self view={view}></svelte:self>
                {/each}
            </ol>
            {/if}
        </li>
    {/each}
</ol>

<style>
    li {
        cursor: pointer;
    }
</style>
