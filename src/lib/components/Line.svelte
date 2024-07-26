<script>
    import { messages } from '$lib/index.svelte'

    let { posLinksX, posLinksY, posIndexX, posIndexY, messageId } = $props()

    let noteWidth = 96
    let noteHeight = 68

    $effect(() => {
        let transform = messages.get(messageId).data.transform

        console.log(transform)
    })
</script>

<div
    class="line absolute h-0.5 bg-black dark:bg-white"
    style="
    left: {posLinksX + noteWidth / 2}px;
    top: {posLinksY + noteHeight / 2}px;
    width: {Math.sqrt(
        Math.pow(posIndexX - posLinksX, 2) + Math.pow(posIndexY - posLinksY, 2)
    )}px;
    transform: rotate({(Math.atan2(
        posIndexY - posLinksY,
        posIndexX - posLinksX
    ) *
        180) /
        Math.PI}deg);
    "
></div>

<style>
    .line {
        transform-origin: 0 0;
        z-index: 0;
    }
</style>
