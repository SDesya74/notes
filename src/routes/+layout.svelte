<script lang="ts">
    import { browser } from '$app/environment'
    import { base } from '$app/paths'
    import { messages } from '$lib/index.svelte'
    import { version } from '$app/environment'
    import { page } from '$app/stores'
    import '../app.css'
    import '../theme.css'
    import ThemeToggle from '$lib/components/ThemeToggle.svelte'

    if (browser) {
        const raw = localStorage.getItem('notes')
        if (raw) messages.import(JSON.parse(raw))
    }

    // TODO: Make shared url generator
    function current(path: string) {
        return $page.url.pathname == path ? 'page' : undefined
    }
</script>

<main class="flex h-screen overflow-hidden bg-slate-100 dark:bg-slate-800">
    <div class="flex-1">
        <header
            class="bg-white dark:bg-slate-700 p-4 text-gray-700 dark:text-gray-100"
        >
            <ul
                class="flex flex-row gap-4 p-2 font-semibold text-lg xl:text-xl"
            >
                <li>
                    <a href="{base}/" aria-current={current(`${base}/`)}>
                        Notes
                    </a>
                </li>
                <li>
                    <a
                        href="{base}/graph"
                        aria-current={current(`${base}/graph`)}
                    >
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
                    class="flex-row justify-center items-center text-base hidden lg:visible"
                >
                    Version: {version}
                </li>
            </ul>
        </header>

        <slot />
    </div>
</main>

<style lang="postcss">
    a[aria-current] {
        @apply text-orange-400;
    }
</style>
