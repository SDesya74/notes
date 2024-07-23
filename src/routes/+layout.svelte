<script lang="ts">
  import { base } from "$app/paths"
  import "../app.css"
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
  </ul>
</header>

<slot />
