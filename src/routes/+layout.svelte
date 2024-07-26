<script lang="ts">
    import { browser } from '$app/environment'
    import { base } from '$app/paths'
    import { messages } from '$lib/index.svelte'
    import { version } from '$app/environment'
    import { page } from '$app/stores'
    import ThemeToggle from '$lib/components/ThemeToggle.svelte'
    import favicon from '$lib/assets/favicon.svg?raw'
    import '../app.css'
    import '../theme.css'

    if (browser) {
        const raw = localStorage.getItem('notes')
        if (raw) messages.import(JSON.parse(raw))
    }

    // TODO: Make shared url generator
    function current(path: string) {
        return $page.url.pathname == path ? 'page' : undefined
    }
</script>

<main
    class="flex flex-col h-screen overflow-hidden bg-slate-100 dark:bg-slate-800"
>
    <header class="bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-100">
        <ul
            class="flex flex-row items-center gap-4 px-1 sm:px-4 font-semibold text-lg"
        >
            <li class="w-14 h-14 p-2">
                <a href="{base}/" aria-current={current(`${base}/`)}>
                    {@html favicon}
                </a>
            </li>
            <li>
                <a href="{base}/graph" aria-current={current(`${base}/graph`)}>
                    Graph
                </a>
            </li>
            <li>
                <a
                    href="{base}/settings"
                    aria-current={current(`${base}/settings`)}
                >
                    Settings
                </a>
            </li>
            <li class="grow"></li>

            <ThemeToggle />

            <li
                class="flex-row justify-center items-center text-base collapse sm:visible"
            >
                Version: {version}
            </li>
        </ul>
    </header>

    <slot />
</main>

<style lang="postcss">
    a[aria-current] {
        @apply text-orange-400;
    }
</style>
