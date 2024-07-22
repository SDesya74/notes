<script lang="ts">
  import type { Message } from "$lib"

  let { value }: { value: Message } = $props()

  let topicStarted = $derived(value.children.length > 1)
</script>

<div class="rounded bg-gray-50" class:bg-red-100={topicStarted}>
  <p>{value.text}</p>
</div>
