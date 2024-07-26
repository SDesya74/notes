<script>
    import { base } from '$app/paths'
    import { messages } from '../index.svelte'
    let {
        posX,
        posY,
        messageContent,
        onMouseDown,
        messageId,
    } = $props()

    let noteWidth = 96;
    let noteHeight = 68;

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
    class="note min-w-24 max-w-96 min-h-12 relative pt-3 visible"
    style="
            position: absolute;
            left: {posX}px;
            top: {posY}px;
          "
>
    <button class="w-4 h-4 absolute right-2 top-2" onmousedown={onMouseDown}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrows-move"
            viewBox="0 0 16 16"
        >
            <path
                fill-rule="evenodd"
                d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"
            />
        </svg>
    </button>
    <button
        class="w-4 h-4 absolute left-2 top-2"
        onclick={() => copyToClipboard(messageContent)}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-copy"
            viewBox="0 0 16 16"
        >
            <path
                fill-rule="evenodd"
                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
            />
        </svg>
    </button>
    <a class="w-4 h-4 absolute left-8 top-2" href="{base}/#{messageId}">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-link"
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
