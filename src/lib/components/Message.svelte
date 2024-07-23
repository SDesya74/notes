<script lang="ts">
  import type { Id, Message } from "$lib/index.svelte"
  import Markdown from "svelte-exmarkdown"
  import { gfmPlugin } from "svelte-exmarkdown/gfm"

  let { value, newTopic }: { value: Message; newTopic: (parent: Id) => void } =
    $props()

  let topicStarted = $derived(value.children.length > 1)
</script>

<div class="flex flex-col" style="width: 65ch">
  <div class="rounded bg-gray-200" class:bg-red-300={topicStarted}>
    <div class="flex flex-row px-1">
      <div class="text-gray-50">{value.id}</div>
      <div class="flex grow"></div>
      <button onclick={() => newTopic(value.id)}>+</button>
    </div>
    <article class="px-1 prose">
      <Markdown md={value.content} plugins={[gfmPlugin()]} />
    </article>
  </div>
</div>
