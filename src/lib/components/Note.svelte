<script lang="ts">
    import { base } from '$app/paths'
    import { gfmPlugin } from 'svelte-exmarkdown/gfm'
    import Markdown from 'svelte-exmarkdown'
    import deleteIcon from '$lib/assets/delete.svg?raw'
    import { type Message, messages } from '$lib/index.svelte'
    import CanvasDragger from './CanvasDragger.svelte'

    let {
        message = $bindable(),
    }: {
        message: Message
    } = $props()

    let transform = $derived(message.data.transform)

    function dragNote(event: any) {
        message.data.transform.x += event.movementX
        message.data.transform.y += event.movementY
    }

    function deleteNote() {
        messages.delete(message.id)
    }
</script>

<div
    bind:offsetWidth={message.data.transform.width}
    bind:offsetHeight={message.data.transform.height}
    class="min-w-24 max-w-96 min-h-12 pt-3 visible absolute bg-gray-200 rounded-md flex items-end justify-center"
    style="left: {transform.x}px; top: {transform.y}px;"
>
    <CanvasDragger
        drag={dragNote}
        end={() =>
            localStorage.setItem('notes', JSON.stringify(messages.export()))}
    />

    <button
        class="w-4 h-4 absolute left-2 top-2 stroke-black"
        onclick={deleteNote}
    >
        {@html deleteIcon}
    </button>
    <a class="w-4 h-4 absolute left-8 top-2" href="{base}/#{message.id}">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path
                d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
            />
            <path
                d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"
            />
        </svg>
    </a>
    <div class="flex w-full h-full justify-center">
        <div class="p-4 w-full break-all">
            <article class="grow prose prose-zinc">
                <Markdown md={message.data.content} plugins={[gfmPlugin()]} />
            </article>
        </div>
    </div>
</div>



