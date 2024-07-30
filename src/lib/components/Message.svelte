<script lang="ts">
    import { base } from '$app/paths'
    import { type Message } from '$lib/index.svelte'
    import Markdown from 'svelte-exmarkdown'
    import { gfmPlugin } from 'svelte-exmarkdown/gfm'

    import branchIcon from '$lib/assets/controlIcons/branchIcon.svg?raw'
    import trashIcon from '$lib/assets/controlIcons/trashIcon.svg?raw'

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
                {@html branchIcon}
            </a>
        {/if}
        <button
            class="cursor-pointer w-4 h-4 stroke-current"
            onclick={() => ondelete(value)}
            title="Delete a note"
        >
            {@html trashIcon}
        </button>
    </div>
</div>
