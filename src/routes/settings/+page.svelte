<script lang="ts">
    import { browser } from '$app/environment'
    import { messages } from '$lib/index.svelte'
    import Tree from 'svelte-json-tree'

    let raw = $state(browser ? localStorage.getItem('notes') || '{}' : '{}')
    function exportGraph() {
        raw = JSON.stringify(messages.export())
    }

    function importGraph() {
        messages.import(JSON.parse(raw))
        localStorage.setItem('notes', JSON.stringify(messages.export()))
    }

    function deleteGraph() {
        messages.clear()
        localStorage.removeItem('notes')
    }
</script>

<div class="flex flex-row gap-2 p-2">
    <button
        class="bg-blue-300 rounded-sm px-4 py-1 text-white"
        onclick={exportGraph}>Export graph</button
    >
    <button
        class="bg-blue-300 rounded-sm px-4 py-1 text-white"
        onclick={importGraph}>Import graph</button
    >
    <button
        class="bg-red-400 rounded-sm px-4 py-1 text-white"
        onclick={deleteGraph}>Delete everything</button
    >
</div>

<div class="flex flex-row">
    <pre>
        <textarea bind:value={raw} style="width: 65ch;"></textarea>
    </pre>
    <Tree value={JSON.parse(raw)} defaultExpandedLevel={5} />
</div>
