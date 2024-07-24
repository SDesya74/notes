<script>
    export let posX = 0
    export let posY = 0
    export let message = ''
    export let onMouseDown;

    function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
</script>

<g
    role="button"
    tabindex="0"
    transform="translate({posX}, {posY})"
    class="node"
    on:mousedown={onMouseDown}
>
    <rect width="100" height="50" rx='10' ry='10' fill="lightgray" />
    <text x="10" y="25" font-family="Arial" font-size="14">
        {message}
    </text>
    <foreignObject x="70" y="5" width="30" height="30">
        <button on:click={() => copyToClipboard(message)} style="width: 100%; height: 100%; border: none; background: transparent; cursor: pointer;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
              </svg>
        </button>
      </foreignObject>
</g>
