<script lang="ts">
    import { browser } from '$app/environment'

    import darkThemeIcon from '$lib/assets/themeIcons/darkThemeIcon.svg?raw'
    import whiteThemeIcon from '$lib/assets/themeIcons/whiteThemeIcon.svg?raw'

    // TODO: Move dark state into a separate file
    let dark = $state(
        browser &&
            (localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches))
    )

    $effect(() => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    })
</script>

<button onclick={() => (dark = !dark)}>
    <div class:hidden={dark}>
        {@html darkThemeIcon}
    </div>

    <div class:hidden={!dark}>
        {@html whiteThemeIcon}
    </div>
</button>
