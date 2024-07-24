<script>
    export let posLinksX = 0;
    export let posLinksY = 0;
    export let posIndexX = 0;
    export let posIndexY = 0;
</script>

<div
    class="line"
    style="
    position: absolute;
    left: {posLinksX + 50}px;
    top: {posLinksY + 50}px;
    width: {Math.sqrt(Math.pow(posIndexX - posLinksX, 2) + Math.pow(posIndexY - posLinksY, 2))}px;
    height: 2px;
    background: black;
    transform: rotate({Math.atan2(posIndexY - posLinksY, posIndexX - posLinksX) * 180 / Math.PI}deg);
    "
></div>

<style>
    .line {
        transform-origin: 0 0;
        z-index: -1;
    }
</style>