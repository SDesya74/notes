<script lang="ts">
    import Canvas from '$lib/components/Canvas.svelte'
    import Line from '$lib/components/Line.svelte'
    import Note from '$lib/components/Note.svelte'
    import { messages } from '$lib/index.svelte'

    $effect(() => {
        localStorage.setItem('notes', JSON.stringify(messages.export()))
    })
</script>

<Canvas>
    {#each Object.values(messages.inner) as message}
        {#if message.parent}
            <Line from={messages.inner[message.parent]} to={message} />
        {/if}
    {/each}
    {#each Object.values(messages.inner) as message}
        <Note {message} />
    {/each}
</Canvas>
