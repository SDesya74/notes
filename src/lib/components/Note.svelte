<script>
    import { base } from '$app/paths'
    import { messages } from '../index.svelte'

    import moveIcon from '$lib/assets/controlIcons/moveIcon.svg?raw'
    import copyIcon from '$lib/assets/controlIcons/copyIcon.svg?raw'
    import linkIcon from '$lib/assets/controlIcons/linkIcon.svg?raw'

    let {
        posX,
        posY,
        messageContent,
        onMouseDown,
        messageId,
        noteWidth,
        noteHeight,
    } = $props()

    $effect(() => {
        messages.updateTransform(
            messageId,
            { x: posX, y: posY },
            noteWidth,
            noteHeight
        )
    })

    function copyToClipboard(text) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log('Text copied to clipboard')
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err)
            })
    }
</script>

<div
    bind:offsetHeight={noteHeight}
    bind:offsetWidth={noteWidth}
    class="note min-w-24 max-w-96 min-h-12 relative pt-3"
    style="
            position: absolute;
            left: {posX}px;
            top: {posY}px;
          "
>
    <button
        class="w-4 h-4 absolute right-2 top-2"
        title="Drag & move"
        onmousedown={onMouseDown}
    >
        {@html moveIcon}
    </button>
    <button
        title="Copy message content"
        class="w-4 h-4 absolute left-2 top-2"
        onclick={() => copyToClipboard(messageContent)}
    >
        {@html copyIcon}
    </button>
    <a
        title="Go to message"
        class="w-4 h-4 absolute left-8 top-2"
        href="{base}/#{messageId}"
    >
        {@html linkIcon}
    </a>
    <div class="flex w-full h-full justify-center">
        <div class="p-4 w-full break-all">{messageContent}</div>
    </div>
</div>

<style>
    .note {
        background-color: lightgray;
        border-radius: 10px;
        display: flex;
        align-items: end;
        justify-content: center;
    }
</style>
