<script lang="ts">
    import { base } from '$app/paths'
    import type { Message } from '$lib/index.svelte'
    import Markdown from 'svelte-exmarkdown'
    import { gfmPlugin } from 'svelte-exmarkdown/gfm'

    let { value }: { value: Message } = $props()

    let topicStarted = $derived(value.children.size > 1)
</script>

<div
    class="group/note flex hover:bg-slate-500 hover:bg-opacity-10 transition duration-200 px-2 text-white py-1 gap-2 border-l-2"
    class:border-accent={topicStarted}
    class:border-transparent={!topicStarted}
>
    <div class="grow">
        <article class="grow prose prose-zinc dark:prose-invert">
            <Markdown md={value.data.content} plugins={[gfmPlugin()]} />
        </article>
    </div>

    <a
        class="lg:opacity-0 group-hover/note:opacity-100 transition duration-200 cursor-pointer"
        href="{base}/#{value.id}">+</a
    >
</div>
