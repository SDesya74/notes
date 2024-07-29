<script lang="ts">
    import Message from './Message.svelte'

    let { from, to }: { from: Message; to: Message } = $props()

    let parent = $derived(from.data.transform)
    let child = $derived(to.data.transform)

    let childCenter = $derived({
        x: child.x + child.width / 2,
        y: child.y + child.height / 2,
    })

    let parentCenter = $derived({
        x: parent.x + parent.width / 2,
        y: parent.y + parent.height / 2,
    })

    let length = $derived(
        Math.sqrt(
            Math.pow(parentCenter.x - childCenter.x, 2) +
                Math.pow(parentCenter.y - childCenter.y, 2)
        )
    )
</script>

<div
    class="line absolute h-0.5 bg-black dark:bg-white visible"
    style="
    left: {childCenter.x}px;
    top: {childCenter.y}px;
    width: {length}px;
    transform: rotate({(Math.atan2(
        parentCenter.y - childCenter.y,
        parentCenter.x - childCenter.x
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
