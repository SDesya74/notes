<script>
    export let posX = 0
    export let posY = 0
    export let message = ''
    export let onMouseDown

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
    class="note"
    style="
            position: absolute;
            left: {posX}px;
            top: {posY}px;
          "
    role="button"
    tabindex="0"
    on:mousedown={onMouseDown}
>
    <div class="note-content flex w-full h-full justify-center items-center relative">
        <div class="note-rect select-none">{message}</div>
        <button class="w-4 h-4 absolute right-2 top-2 hover:top-1.5" on:click={() => copyToClipboard(message)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
              </svg>
        </button>
    </div>
</div>

<style>
    .note {
        width: 100px;
        height: 50px;
        background-color: lightgray;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .note-content {
        font-family: Arial;
        font-size: 14px;
    }
</style>
