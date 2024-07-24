<script lang="ts">
    import { browser } from '$app/environment'
    import { base } from '$app/paths'
    import { messages } from '$lib/index.svelte'
    import { version } from '$app/environment'
    import '../app.css'

    if (browser) {
        const raw = localStorage.getItem('notes')
        if (raw) messages.import(JSON.parse(raw))
    }
</script>

<header>
    <ul class="flex flex-row gap-2 p-2">
        <li>
            <a
                class="px-2 rounded-md bg-orange-400 py-1 border-2 border-orange-500 text-white"
                href="{base}/">Home</a
            >
        </li>
        <li>
            <a
                class="px-2 rounded-md bg-orange-400 py-1 border-2 border-orange-500 text-white"
                href="{base}/graph">Graph</a
            >
        </li>
        <li>
            <a
                class="px-2 rounded-md bg-orange-400 py-1 border-2 border-orange-500 text-white"
                href="{base}/settings">Settings</a
            >
        </li>
        <li class="grow"></li>
        <li>
            Version: {version}
        </li>
    </ul>
</header>

<slot />
