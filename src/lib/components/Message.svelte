<script lang="ts">
    import { base } from '$app/paths'
    import { type Message } from '$lib/index.svelte'
    import Markdown from 'svelte-exmarkdown'
    import { gfmPlugin } from 'svelte-exmarkdown/gfm'
    import deleteIcon from '$lib/assets/delete.svg?raw'

    let {
        value,
        ondelete,
        isLast,
    }: {
        value: Message
        ondelete: (message: Message) => void
        isLast: boolean
    } = $props()

    let isBranch = $derived(value.children.size > 1)
</script>

<div
    class="group/note flex hover:bg-slate-500 hover:bg-opacity-10 transition duration-200 px-2 text-white py-1 gap-2 border-l-2"
    class:border-accent={isBranch}
    class:border-transparent={!isBranch}
>
    <div class="grow">
        <article class="grow prose prose-zinc dark:prose-invert">
            <Markdown md={value.data.content} plugins={[gfmPlugin()]} />
        </article>
    </div>

    <div
        class="flex flex-row items-center gap-2 lg:opacity-0 group-hover/note:opacity-100 transition duration-200 text-black dark:text-white"
    >
        {#if !isLast}
            <a
                class="cursor-pointer w-4 h-4 stroke-current fill-current"
                href="{base}/#{value.id}"
                title="Create a new thread"
            >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M7.5 2a3.5 3.5 0 0 1 .99 6.86 5.5 5.5 0 0 0 5.26 3.89h.33a3.5 3.5 0 1 1 0 1.5h-.33a6.99 6.99 0 0 1-5.5-2.67v3.5a3.5 3.5 0 1 1-1.5 0V8.92A3.5 3.5 0 0 1 7.5 2zm0 14.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-10-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                    /></svg
                >
            </a>
        {/if}
        <button
            class="cursor-pointer w-4 h-4 stroke-current"
            onclick={() => ondelete(value)}
            title="Delete a note"
        >
            {@html deleteIcon}
        </button>
    </div>
</div>
